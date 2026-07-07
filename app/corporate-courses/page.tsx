"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { Award, Briefcase, Users, Compass, BookOpen, ArrowRight, Search } from "lucide-react";

export default function CorporateCoursesPage() {
  const [search, setSearch] = useState("");

  const courses = [
    {
      title: "Project Management Professional (PMP®)",
      icon: <Award size={48} className="text-yellow-500" />,
      description:
        "PMI-aligned PMP® certification coaching for corporate professionals covering frameworks, Agile, mock tests, and exam preparation.",
      lessons: "40+ Hours",
      slug: "pmp-certification",
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Agile for Teams",
      icon: <Users size={48} className="text-green-400" />,
      description:
        "Practical Agile and Scrum training for corporate teams, role-based workshops, and real-world simulations.",
      lessons: "20+ Hours",
      slug: "agile-for-teams",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Leadership & Stakeholder Management",
      icon: <Briefcase size={48} className="text-blue-400" />,
      description:
        "Training on leadership skills, communication, stakeholder engagement, and driving project outcomes in organizations.",
      lessons: "15+ Hours",
      slug: "leadership-stakeholders",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Business Analysis Essentials",
      icon: <Compass size={48} className="text-indigo-400" />,
      description:
        "Requirements elicitation, process modeling, and analysis techniques to deliver business value.",
      lessons: "18+ Hours",
      slug: "business-analysis-essentials",
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Corporate Compliance & Governance",
      icon: <BookOpen size={48} className="text-red-400" />,
      description:
        "Overview of corporate compliance, risk management, and governance best practices for enterprises.",
      lessons: "10+ Hours",
      slug: "compliance-governance",
      color: "from-red-500 to-pink-500",
    },
  ];

  const filtered = courses.filter((c) => {
    const q = search.toLowerCase();
    return (
      c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q)
    );
  });

  return (
    <main className="min-h-screen bg-[#020617] text-white pt-24">
      <Navbar />

      <section className="text-center px-6 py-16">
        <h1 className="text-5xl font-black">Corporate Courses</h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Training and certification programs tailored for corporate professionals and teams.
        </p>

        <div className="mt-8 max-w-xl mx-auto relative">
          <Search className="absolute left-4 top-3 text-gray-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search corporate courses..."
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {filtered.map((course, idx) => (
            <div key={idx} className="group rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-blue-500 hover:-translate-y-2 transition-all duration-300">
              <div className={`h-2 bg-gradient-to-r ${course.color}`} />
              <div className="p-7">
                <div className="mb-5">{course.icon}</div>
                <h2 className="text-xl font-bold">{course.title}</h2>
                <p className="mt-4 text-gray-400 text-sm leading-6">{course.description}</p>
                <div className="mt-7 flex justify-between items-center">
                  <span className="text-blue-400 text-sm">{course.lessons}</span>
                  <Link href={`/courses/${course.slug}`}>
                    <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl text-sm">
                      Explore <ArrowRight size={16} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-400 mt-10">No corporate courses found for "{search}"</p>
        )}
      </section>

      <Footer />
    </main>
  );
}
