"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-[#030712] py-28">

      <div className="max-w-6xl mx-auto px-8">

        <div className="rounded-[40px] border border-blue-500/20 bg-gradient-to-r from-blue-600/20 via-cyan-500/10 to-indigo-600/20 p-16 text-center">

          <h2 className="text-5xl font-bold text-white">
            Ready to Transform Your Engineering Learning?
          </h2>

          <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto leading-9">
            Join thousands of engineering students learning through
            AI-powered tutoring, interactive animations, virtual labs,
            and exam-focused courses designed for academic excellence
            and career success.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-12">

            <Link href="/courses">
              <button className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold transition-all">

                Explore Courses

                <ArrowRight size={22} />

              </button>
            </Link>

            <Link href="/contact">
              <button className="border border-white/20 hover:bg-white/10 px-8 py-4 rounded-xl text-lg font-semibold transition-all">

                Contact Us

              </button>
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}