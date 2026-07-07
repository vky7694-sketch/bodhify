"use client";

import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import offlineQueue from "../lib/offlineQueue";
import Link from "next/link";

export default function EnrollButton({ slug, title, price }: { slug: string; title: string; price: number }) {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleEnroll = async () => {
    if (!user) {
      setStatus("Please login to enroll.");
      return;
    }

    setLoading(true);
    setStatus(null);

    const payload = {
      slug,
      title,
      price,
      purchasedAt: new Date().toISOString(),
      queuedAt: new Date().toISOString(),
    } as any;

    try {
      if (db) {
        await addDoc(collection(db, "users", user.uid, "courses"), {
          ...payload,
          purchasedAt: serverTimestamp(),
        });
        setStatus("Enrolled successfully.");
      } else {
        await offlineQueue.enqueue({
          op: "add",
          collectionPath: `users/${user.uid}/courses`,
          data: payload,
        });
        setStatus("Enrolled (queued). Will sync when Firestore is available.");
      }
    } catch (err: any) {
      console.error("Enroll error", err);
      try {
        await offlineQueue.enqueue({
          op: "add",
          collectionPath: `users/${user.uid}/courses`,
          data: payload,
        });
        setStatus("Enrolled (queued). Will retry automatically.");
      } catch (e) {
        setStatus("Failed to enroll. Try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-6">
      {!user ? (
        <Link href="/login">
          <button className="px-4 py-2 rounded-xl bg-green-600 hover:bg-green-700">
            Login to Enroll
          </button>
        </Link>
      ) : (
        <button
          onClick={handleEnroll}
          disabled={loading}
          className="px-4 py-2 rounded-xl bg-green-600 hover:bg-green-700 disabled:opacity-60"
        >
          {loading ? "Enrolling..." : "Enroll / Buy"}
        </button>
      )}

      {status && <div className="mt-3 text-sm text-gray-300">{status}</div>}
    </div>
  );
}
