"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo */}
          <div>
            <h2 className="text-4xl font-black text-blue-500">
              BODHIFY
            </h2>

            <p className="mt-6 text-gray-400 leading-8">
              India's next-generation engineering learning platform that
              combines AI, interactive animations, virtual laboratories,
              simulations, and exam-focused preparation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/courses">Courses</Link>
              </li>

              <li>
                <Link href="/virtual-labs">Virtual Labs</Link>
              </li>

              <li>
                <Link href="/ai-tutor">AI Tutor</Link>
              </li>

              <li>
                <Link href="/research">Research</Link>
              </li>

              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Popular Courses
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>Mechanical Engineering</li>
              <li>Electronics & Communication</li>
              <li>Electrical Engineering</li>
              <li>Artificial Intelligence</li>
              <li>Robotics</li>
              <li>GATE Preparation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Contact
            </h3>

            <div className="space-y-5 text-gray-400">

              <div className="flex items-center gap-3">
                <Phone size={20} className="text-blue-400" />
                <span>+91 82204 86288</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={20} className="text-blue-400" />
                <span>info@bodhify.in</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-400 mt-1" />
                <span>India</span>
              </div>

            </div>

            {/* Social Buttons */}
            <div className="flex gap-3 mt-8">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:scale-110 transition"
              >
                F
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center hover:scale-110 transition"
              >
                I
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-sky-600 flex items-center justify-center hover:scale-110 transition"
              >
                L
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center hover:scale-110 transition"
              >
                Y
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500">
          © {new Date().getFullYear()} BODHIFY. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}