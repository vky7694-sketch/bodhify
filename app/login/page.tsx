"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, Lock, Eye } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

import {
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import { auth, googleProvider } from "../lib/firebase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Email / password login using Firebase
  const handleEmailLogin = async () => {
    setError("");
    setSuccess("");

    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    // basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    try {
      console.log("Attempting email login for", email);
      await signInWithEmailAndPassword(auth, email, password);
      setSuccess("Login successful!");
      window.location.href = "/dashboard";
    } catch (err: any) {
      console.error("Email login error:", err);
      const code = err?.code || "error";
      const message = err?.message || "Login failed.";
      // specific helpful guidance for invalid-credential
      if (code === "auth/invalid-credential") {
        setError(`${code}: ${message} — try clearing cookies/localStorage and retry, or use a different sign-in method.`);
      } else {
        setError(`${code}: ${message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  // Google OAuth login
  const handleGoogleLogin = async () => {
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      window.location.href = "/dashboard";
    } catch (err: any) {
      console.error("Google login error:", err);
      setError(`${err?.code || "error"}: ${err?.message || "Google login failed."}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#020617] pt-28 flex items-center justify-center px-6">

        <div className="w-full max-w-md">

          {/* Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">

            <div className="text-center">

              <h1 className="text-4xl font-black text-white">
                Welcome Back
              </h1>

              <p className="text-gray-400 mt-3">
                Login to continue your engineering journey.
              </p>

            </div>

            {/* Email */}

            <div className="mt-10">

              <label className="text-gray-300 text-sm">
                Email Address
              </label>

              <div className="mt-2 flex items-center bg-white/10 rounded-xl px-4">

                <Mail className="text-gray-400" size={20} />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-transparent outline-none px-3 py-4 text-white placeholder-gray-500"
                />

              </div>

            </div>

            {/* Password */}

            <div className="mt-6">

              <label className="text-gray-300 text-sm">
                Password
              </label>

              <div className="mt-2 flex items-center bg-white/10 rounded-xl px-4">

                <Lock className="text-gray-400" size={20} />

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full bg-transparent outline-none px-3 py-4 text-white placeholder-gray-500"
                />

                <Eye
                  className="text-gray-400 cursor-pointer"
                  size={20}
                />

              </div>

            </div>

            {/* Remember */}

            <div className="flex justify-between items-center mt-5">

              <label className="flex items-center gap-2 text-gray-300 text-sm">

                <input type="checkbox" />

                Remember Me

              </label>

              <Link
                href="#"
                className="text-blue-400 hover:text-blue-300 text-sm"
              >
                Forgot Password?
              </Link>

            </div>

            {/* Login */}

            {error && (
              <p className="text-red-400 text-sm mt-4 text-center">
                {error}
              </p>
            )}

            {success && (
              <p className="text-green-400 text-sm mt-4 text-center">
                {success}
              </p>
            )}

            <button
              onClick={handleEmailLogin}
              disabled={loading}
              className="w-full mt-8 bg-blue-600 hover:bg-blue-700 rounded-xl py-4 text-lg font-semibold transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            {/* Divider */}

            <div className="flex items-center my-8">

              <div className="flex-1 h-px bg-white/10"></div>

              <span className="px-4 text-gray-400 text-sm">
                OR
              </span>

              <div className="flex-1 h-px bg-white/10"></div>

            </div>

            {/* Google */}

            <button
              onClick={handleGoogleLogin}
              disabled={loading}
              className="w-full border border-white/20 hover:bg-white/10 rounded-xl py-4 flex justify-center items-center gap-3 transition text-white disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <FcGoogle size={24} />
              {loading ? "Logging in..." : "Continue with Google"}
            </button>

            {/* Register */}

            <p className="text-center text-gray-400 mt-8">

              Don't have an account?{" "}

              <Link
                href="/register"
                className="text-blue-400 hover:text-blue-300"
              >
                Register
              </Link>

            </p>

          </div>

        </div>

      </main>

      <Footer />
    </>                   
  );
}