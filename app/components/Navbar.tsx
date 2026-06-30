"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#07142b]/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 h-20">

        {/* Logo */}
        <Link href="/">
          <h1 className="text-3xl md:text-4xl font-black text-blue-500">
            BODHIFY
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 text-white">
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/virtual-labs">Virtual Labs</Link>
          <Link href="/ai-tutor">AI Tutor</Link>
          <Link href="/research">Research</Link>
          <Link href="/contact">Contact</Link>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-3">
          <Link href="/login">
            <button className="px-5 py-2 border border-white/20 rounded-xl text-white">
              Login
            </button>
          </Link>

          <Link href="/dashboard">
            <button className="px-5 py-2 bg-blue-600 rounded-xl text-white">
              Dashboard
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden bg-[#07142b] border-t border-white/10">

          <div className="flex flex-col p-5 gap-5 text-white">

            <Link href="/" onClick={() => setOpen(false)}>Home</Link>

            <Link href="/courses" onClick={() => setOpen(false)}>
              Courses
            </Link>

            <Link href="/virtual-labs" onClick={() => setOpen(false)}>
              Virtual Labs
            </Link>

            <Link href="/ai-tutor" onClick={() => setOpen(false)}>
              AI Tutor
            </Link>

            <Link href="/research" onClick={() => setOpen(false)}>
              Research
            </Link>

            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>

            <hr className="border-white/10"/>

            <Link href="/login">
              <button className="w-full py-3 border rounded-xl text-white">
                Login
              </button>
            </Link>

            <Link href="/dashboard">
              <button className="w-full py-3 bg-blue-600 rounded-xl text-white">
                Dashboard
              </button>
            </Link>

          </div>

        </div>
      )}
    </nav>
  );
}