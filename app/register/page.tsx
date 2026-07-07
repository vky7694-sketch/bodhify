"use client";

import { useState } from "react";
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../lib/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { enqueue } from "../lib/offlineQueue";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setError("");
    if (!email || !password) return setError("Enter email and password.");
    setLoading(true);
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      // create user profile doc (use offline queue if Firestore unavailable)
      const profile = { email: cred.user.email, createdAt: serverTimestamp() };
      try {
        if (db) {
          await setDoc(doc(db, "users", cred.user.uid), profile);
        } else {
          await enqueue({ op: "set", docPath: `users/${cred.user.uid}`, data: profile });
        }
      } catch (err) {
        // fallback to enqueue on any failure
        await enqueue({ op: "set", docPath: `users/${cred.user.uid}`, data: profile });
      }
      window.location.href = "/dashboard";
    } catch (err: any) {
      console.error("Register error:", err);
      setError(`${err?.code || "error"}: ${err?.message || "Registration failed."}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-md p-6 border rounded-lg bg-white/5">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        {error && <div className="text-red-400 mb-3">{error}</div>}
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="w-full p-3 mb-3 bg-transparent border rounded" />
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className="w-full p-3 mb-3 bg-transparent border rounded" />
        <button onClick={handleRegister} disabled={loading} className="w-full py-3 bg-blue-600 text-white rounded">{loading?"Creating...":"Create account"}</button>
        <p className="mt-4 text-sm">Already have an account? <Link href="/login" className="text-blue-400">Login</Link></p>
      </div>
    </div>
  );
}
