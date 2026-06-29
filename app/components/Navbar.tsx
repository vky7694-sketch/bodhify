"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#07142b]/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-black text-blue-500 tracking-wider cursor-pointer">
            BODHIFY
          </h1>
        </Link>

        {/* Menu */}
        <ul className="hidden lg:flex items-center gap-10 text-lg font-medium text-white">

          <li>
            <Link href="/" className="text-white hover:text-blue-400 transition">
              Home
            </Link>
          </li>

          <li>
            <Link href="/courses" className="hover:text-blue-400 transition">
              Courses
            </Link>
          </li>

          <li>
            <Link href="/virtual-labs" className="hover:text-blue-400 transition">
              Virtual Labs
            </Link>
          </li>

          <li>
            <Link href="/ai-tutor" className="hover:text-blue-400 transition">
              AI Tutor
            </Link>
          </li>

          <li>
            <Link href="/research" className="hover:text-blue-400 transition">
              Research
            </Link>
          </li>

          <li>
            <Link href="/contact" className="hover:text-blue-400 transition">
              Contact
            </Link>
          </li>

        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-4">

          <Link href="/login">
            <button className="px-5 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition">
              Login
            </button>
          </Link>

          <Link href="/dashboard">
            <button className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition">
              Dashboard
            </button>
          </Link>

        </div>

      </div>
    </nav>
  );
}