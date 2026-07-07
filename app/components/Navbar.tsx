"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useRouter } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Corporate courses", href: "/corporate-courses" },
  { name: "Virtual Labs", href: "/virtual-labs" },
  { name: "AI Tutor", href: "/ai-tutor" },
  { name: "Research", href: "/research" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { user } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (err) {
      console.error("Logout error", err);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#07142b]/80 border-b border-white/10">

      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <h1 className="text-3xl font-black tracking-wider text-blue-500">
            BODHIFY
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">

          {links.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`transition ${
                  pathname === item.href
                    ? "text-blue-400"
                    : "text-white hover:text-blue-400"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}

        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-3">
          {user ? (
            <>
              <span className="text-white/90 px-3">{user.email}</span>
              <button onClick={handleLogout} className="px-5 py-2 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">
                Logout
              </button>
              <Link href="/dashboard">
                <button className="px-5 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition">
                  Dashboard
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/login">
                <button className="px-5 py-2 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">
                  Login
                </button>
              </Link>

              <Link href="/dashboard">
                <button className="px-5 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition">
                  Dashboard
                </button>
              </Link>
            </>
          )}

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#07142b] border-t border-white/10"
          >
            <div className="flex flex-col p-6 space-y-5">

              {links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`text-lg ${
                    pathname === item.href
                      ? "text-blue-400"
                      : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <div className="border-t border-white/10 pt-5 space-y-3">

                <Link href="/login">
                  <button className="w-full py-3 rounded-xl border border-white/20 text-white hover:bg-white/10">
                    Login
                  </button>
                </Link>

                <Link href="/dashboard">
                  <button className="w-full py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700">
                    Dashboard
                  </button>
                </Link>

              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}