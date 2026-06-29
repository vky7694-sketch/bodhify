"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#020617] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl"></div>
      <div className="absolute top-20 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>

          <p className="uppercase tracking-[10px] text-blue-400 mb-6">
            Welcome To
          </p>

          <h1 className="text-7xl lg:text-8xl font-black text-white leading-none">
            BODHIFY
          </h1>

          <h2 className="mt-6 text-4xl text-gray-300">
            See. Understand. Excel.
          </h2>

          <p className="mt-8 text-xl text-gray-400 leading-9 max-w-xl">
            India's next-generation engineering learning platform with
            immersive animations, virtual laboratories, AI-powered tutoring,
            research assistance, and GATE preparation.
          </p>

          <div className="flex flex-wrap gap-6 mt-10">

            <Link href="/courses">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg transition">
                Explore Courses
              </button>
            </Link>

            <button className="border border-white/20 hover:bg-white/10 px-8 py-4 rounded-xl text-lg transition">
              Watch Demo
            </button>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">

          <div className="w-[520px] h-[520px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center shadow-2xl">

            <div className="text-center">

              <div className="text-8xl mb-6">
                🤖
              </div>

              <h2 className="text-3xl font-bold">
                AI Learning Assistant
              </h2>

              <p className="mt-4 text-gray-400 px-10">
                Interactive 3D Robot will be added here.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}