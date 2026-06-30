"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#020617] pt-24">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl" />
      <div className="absolute top-10 right-0 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-2 lg:px-10">

        {/* LEFT SIDE */}
        <div className="text-center lg:text-left">

          <p className="mb-4 text-xs uppercase tracking-[6px] text-blue-400 sm:text-sm sm:tracking-[10px]">
            Welcome To
          </p>

          <h1 className="text-5xl font-black leading-none text-white sm:text-6xl md:text-7xl lg:text-8xl">
            BODHIFY
          </h1>

          <h2 className="mt-5 text-2xl text-gray-300 sm:text-3xl md:text-4xl">
            See. Understand. Excel.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg lg:mx-0">
            India's next-generation engineering learning platform with immersive
            animations, AI-powered tutoring, virtual laboratories, research
            assistance, and GATE preparation.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">

            <Link href="/courses">
              <button className="w-full rounded-xl bg-blue-600 px-8 py-4 text-lg transition hover:bg-blue-700 sm:w-auto">
                Explore Courses
              </button>
            </Link>

            <button className="w-full rounded-xl border border-white/20 px-8 py-4 text-lg transition hover:bg-white/10 sm:w-auto">
              Watch Demo
            </button>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">

          <div className="
            w-full
            max-w-[340px]
            sm:max-w-[420px]
            lg:max-w-[520px]
            h-[340px]
            sm:h-[420px]
            lg:h-[520px]
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            shadow-2xl
            flex
            items-center
            justify-center
          ">

            <div className="text-center px-6">

              <div className="text-6xl sm:text-7xl lg:text-8xl">
                🤖
              </div>

              <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                AI Learning Assistant
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
                Interactive 3D Robot, AI Tutor, Virtual Labs and Smart Learning
                experience will appear here.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}