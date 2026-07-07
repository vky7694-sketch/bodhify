"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { collection, addDoc, onSnapshot, query, serverTimestamp, deleteDoc, doc } from "firebase/firestore";
import { db } from "../lib/firebase";
import { enqueue, processQueue } from "../lib/offlineQueue";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useRouter } from "next/navigation";

type Course = {
	docId: string;
	slug: string;
	title: string;
	price: number;
};

type OwnedCourse = {
	docId: string;
	id: string;
	slug: string;
	title: string;
	price: number;
};

const defaultCourses = [
	{ slug: "drone-engineering", title: "Drone Engineering", price: 79 },
	{ slug: "rc-plane-design", title: "RC Plane Design & Flight", price: 65 },
	{ slug: "augmented-reality", title: "Augmented Reality (AR)", price: 69 },
	{ slug: "virtual-reality", title: "Virtual Reality (VR)", price: 79 },
	{ slug: "iot", title: "Internet of Things (IoT)", price: 74 },
	{ slug: "gate-preparation", title: "GATE Preparation", price: 49 },
	{ slug: "gate-mechanical", title: "GATE Mechanical Engineering", price: 55 },
	{ slug: "gate-ece", title: "GATE Electronics & Communication", price: 55 },
	{ slug: "gate-aptitude", title: "GATE Aptitude", price: 39 },
	{ slug: "mechanical-engineering", title: "Mechanical Engineering", price: 59 },
	{ slug: "electronics-communication", title: "Electronics & Communication", price: 59 },
	{ slug: "electrical-engineering", title: "Electrical Engineering", price: 55 },
	{ slug: "ai", title: "Artificial Intelligence", price: 69 },
	{ slug: "robotics", title: "Robotics", price: 65 },
	{ slug: "civil-engineering", title: "Civil Engineering", price: 52 },
	{ slug: "automobile-engineering", title: "Automobile Engineering", price: 58 },
];

export default function DashboardPage() {
	const { user, loading } = useAuth();
	const [owned, setOwned] = useState<OwnedCourse[]>([]);
	const [processing, setProcessing] = useState<string | null>(null);
	const [courses, setCourses] = useState<Course[]>([]);
	const [firestoreAvailable, setFirestoreAvailable] = useState(true);
	const [firestorePermissionDenied, setFirestorePermissionDenied] = useState(false);
	const router = useRouter();

	const [authLogs, setAuthLogs] = useState<string[]>([]);
	const [showDebug, setShowDebug] = useState(false);

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (u) => {
			const entry = `${new Date().toLocaleTimeString()} - auth state changed: ${u ? `${u.email} (${u.uid})` : "null"}`;
			setAuthLogs((s) => [entry, ...s].slice(0, 100));
		});

		return () => unsub();
	}, []);

	const handleLogoutPage = async () => {
		try {
			await signOut(auth);
			router.push("/");
		} catch (err) {
			console.error("Logout error", err);
		}
	};

	useEffect(() => {
		if (!user) {
			setOwned([]);
			return;
		}

		if (!db) {
			setFirestoreAvailable(false);
			return;
		}

		const coll = collection(db, "users", user.uid, "courses");
		const q = query(coll);
		const unsub = onSnapshot(q, (snap) => {
			const items: OwnedCourse[] = snap.docs.map((d) => ({
				docId: d.id,
				id: d.id,
				slug: d.data().slug || d.data().courseId || d.data().courseSlug || "",
				title: d.data().title,
				price: d.data().price,
			}));
			setOwned(items);
		});

		return () => unsub();
	}, [user]);

	// subscribe to courses collection
	useEffect(() => {
		if (!db) {
			setFirestoreAvailable(false);
			return;
		}
		const coll = collection(db, "courses");
		const q = query(coll);
		const unsub = onSnapshot(
			q,
			(snap) => {
				const items: Course[] = snap.docs.map((d) => ({
					docId: d.id,
					slug: d.data().slug || d.data().courseId || d.id,
					title: d.data().title,
					price: d.data().price,
				}));
				setCourses(items);
			},
			(err) => {
				console.error("Firestore courses subscribe error", err);
				setFirestoreAvailable(false);
				if (err?.code === "permission-denied" || (err?.message && err.message.includes("permission"))) {
					setFirestorePermissionDenied(true);
				}
			}
		);

		return () => unsub();
	}, []);

	const seedDefaultCourses = async () => {
		try {
			for (const c of defaultCourses) {
				if (db) {
					await addDoc(collection(db, "courses"), {
						slug: c.slug,
						title: c.title,
						price: c.price,
						createdAt: serverTimestamp(),
					});
				} else {
					await enqueue({ op: "add", collectionPath: `courses`, data: { slug: c.slug, title: c.title, price: c.price, createdAt: serverTimestamp() } });
				}
			}
			alert("Seeded default courses (or queued for upload).");
		} catch (err) {
			console.error("Seeding error", err);
			alert("Could not seed courses.");
		}

		processQueue().catch(() => {});
	};

	const handleBuy = async (course: Course) => {
		if (!user) {
			alert("Please log in to purchase courses.");
			return;
		};

		if (owned.find((c) => c.slug === course.slug)) {
			alert("You already own this course.");
			return;
		}

		setProcessing(course.slug);
		try {
			const payload = {
				slug: course.slug,
				title: course.title,
				price: course.price,
				purchasedAt: serverTimestamp(),
			};

			if (db) {
				await addDoc(collection(db, "users", user.uid, "courses"), payload);
			} else {
				await enqueue({ op: "add", collectionPath: `users/${user.uid}/courses`, data: payload });
			}
		} catch (err) {
			console.error("Purchase error", err);
			try {
				await enqueue({ op: "add", collectionPath: `users/${user.uid}/courses`, data: {
					slug: course.slug,
					title: course.title,
					price: course.price,
					purchasedAt: serverTimestamp(),
				}});
				alert("Could not complete purchase immediately; it will be retried.");
			} catch (queueErr) {
				console.error("Queue fallback error", queueErr);
				alert("Purchase failed and could not be queued.");
			}
		} finally {
			setProcessing(null);
		}

		processQueue().catch(() => {});
	};


	const handleDelete = async (courseDocId?: string) => {
		if (!user || !courseDocId) return;
		try {
			if (db) {
				await deleteDoc(doc(db, "users", user.uid, "courses", courseDocId));
			} else {
				await enqueue({ op: "delete", docPath: `users/${user.uid}/courses/${courseDocId}` });
			}
		} catch (err) {
			console.error("Delete error", err);
			await enqueue({ op: "delete", docPath: `users/${user.uid}/courses/${courseDocId}` });
			alert("Could not delete course immediately; it will be retried.");
		}

		processQueue().catch(() => {});
	};

	if (loading) return <div className="p-8">Loading...</div>;

	return (
		<main className="min-h-screen bg-[#020617] pt-28 flex items-start justify-center px-6 text-white">
			<div className="w-full max-w-6xl">
				<Navbar />

				<div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl mt-8">
					<div className="flex items-center justify-between mb-6">
						<h1 className="text-2xl font-bold">Dashboard</h1>
						<div className="flex items-center gap-3">
							<div className="text-sm text-gray-300">{user ? user.email : ""}</div>
							<button onClick={handleLogoutPage} className="px-4 py-2 rounded-lg border border-white/20">Logout</button>
						</div>
					</div>

					{!firestoreAvailable && (
						<div className="mb-4 p-3 bg-red-800/50 rounded text-sm">
							Firestore appears unavailable: enable Firestore in your Firebase project or check your config.
						</div>
					)}

					{firestorePermissionDenied && (
						<div className="mb-4 p-3 bg-yellow-800/50 rounded text-sm">
							Firestore permission denied: update your Firestore rules to allow reads for authenticated users (for dev use: set allow read, write: if true;). Open Firebase Console → Firestore → Rules.
						</div>
					)}

					{user ? (
						<div>
							<section className="mb-8">
									<h2 className="text-xl font-semibold mb-3">Available Courses</h2>
									<div className="mb-4 flex items-center gap-3">
										{courses.length === 0 && (
											<button onClick={seedDefaultCourses} className="px-3 py-1 rounded border">Sync default courses</button>
										)}
									</div>
									<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
										{courses.map((course) => {
											const ownedAlready = owned.find((c) => c.slug === course.slug);
											return (
												<div key={course.docId} className="p-4 border rounded-lg bg-white/5">
													<h3 className="font-bold">{course.title}</h3>
													<p className="text-sm text-gray-300">Price: ${course.price}</p>
													<div className="mt-3">
														<button
															onClick={() => handleBuy(course)}
															disabled={!!ownedAlready || processing === course.slug}
															className="px-4 py-2 rounded-lg bg-blue-600 text-white disabled:opacity-50"
														>
															{ownedAlready ? "Added" : processing === course.slug ? "Processing..." : "Buy"}
														</button>
													</div>
												</div>
											);
										})}
									</div>
							</section>

							<section>
								<h2 className="text-xl font-semibold mb-3">My Courses</h2>
								{owned.length === 0 ? (
									<p>You haven't added any courses yet.</p>
								) : (
									<ul className="space-y-2">
										{owned.map((c) => (
											<li key={c.id} className="p-3 border rounded-lg bg-white/5">
												<div className="flex items-center justify-between">
													<div>
														<div className="font-semibold">{c.title}</div>
														<div className="text-sm text-gray-300">Price: ${c.price}</div>
													</div>
													<div>
														<button onClick={() => handleDelete(c.docId)} className="ml-4 px-3 py-1 rounded bg-red-600 text-white text-sm">Delete</button>
													</div>
												</div>
											</li>
										))}
									</ul>
								)}
							</section>

							<section className="mt-6">
								<div className="flex items-center justify-between">
									<h2 className="text-xl font-semibold mb-3">Auth Debug</h2>
									<div className="flex items-center gap-3">
										<button onClick={() => setShowDebug((s) => !s)} className="px-3 py-1 rounded border">{showDebug ? "Hide" : "Show"}</button>
										<button onClick={() => setAuthLogs([])} className="px-3 py-1 rounded border">Clear logs</button>
									</div>
								</div>

								{showDebug && (
									<div className="bg-black/50 p-4 rounded">
										<div className="mb-3">
											<div className="font-semibold">auth.currentUser</div>
											<pre className="text-xs max-h-40 overflow-auto">{JSON.stringify(auth.currentUser, null, 2)}</pre>
										</div>

										<div>
											<div className="font-semibold mb-2">Recent auth events</div>
											<ul className="text-sm max-h-40 overflow-auto space-y-1">
												{authLogs.map((l, i) => (
													<li key={i} className="text-gray-300">{l}</li>
												))}
											</ul>
										</div>
									</div>
								)}
							</section>
						</div>
					) : (
						<p>You are not signed in.</p>
					)}
				</div>

				<div className="mt-8">
					<Footer />
				</div>
			</div>
		</main>
	);
}