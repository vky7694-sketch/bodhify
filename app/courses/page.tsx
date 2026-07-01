"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import {
  Cpu,
  Award,
  Brain,
  Bot,
  CircuitBoard,
  Cog,
  Building2,
  Car,
  Zap,
  ArrowRight,
  Search,
} from "lucide-react";

export default function CoursesPage() {
  const [search, setSearch] = useState("");

  const courses = [
    // ⭐ GATE FIRST
    {
      title: "GATE Preparation",
      icon: <Brain size={48} className="text-indigo-400" />,
      description:
        "Complete GATE preparation with PYQs, Mock Tests, Notes and AI explanations.",
      lessons: "300 Lessons",
      slug: "gate-preparation",
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "GATE Mechanical Engineering",
      icon: <Cog size={48} className="text-blue-400" />,
      description:
        "Thermodynamics, SOM, FM, TOM, Manufacturing and Engineering Mathematics.",
      lessons: "180 Lessons",
      slug: "gate-mechanical",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "GATE Electronics & Communication",
      icon: <CircuitBoard size={48} className="text-green-400" />,
      description:
        "Analog, Digital, Signals, Communication Systems, Networks and Control.",
      lessons: "170 Lessons",
      slug: "gate-ece",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "GATE Aptitude",
      icon: <Brain size={48} className="text-yellow-400" />,
      description:
        "Quantitative aptitude, reasoning and verbal ability for GATE.",
      lessons: "60 Lessons",
      slug: "gate-aptitude",
      color: "from-yellow-400 to-orange-500",
    },

    // ⭐ ORIGINAL COURSES (KEEPED)
    {
      title: "Mechanical Engineering",
      icon: <Cog size={48} className="text-blue-500" />,
      description:
        "Machine Design, Thermodynamics, Manufacturing, CAD, CAM, CAE and Industrial Engineering.",
      lessons: "120 Lessons",
      slug: "mechanical-engineering",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Electronics & Communication",
      icon: <CircuitBoard size={48} className="text-green-500" />,
      description:
        "Electronic Devices, Analog Circuits, Digital Electronics, Embedded Systems and VLSI.",
      lessons: "95 Lessons",
      slug: "electronics-communication",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Electrical Engineering",
      icon: <Zap size={48} className="text-yellow-400" />,
      description:
        "Power Systems, Electrical Machines, Control Systems and Protection.",
      lessons: "85 Lessons",
      slug: "electrical-engineering",
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "Artificial Intelligence",
      icon: <Brain size={48} className="text-purple-500" />,
      description:
        "Machine Learning, Deep Learning, Computer Vision, NLP and Generative AI.",
      lessons: "150 Lessons",
      slug: "ai",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Robotics",
      icon: <Bot size={48} className="text-red-500" />,
      description:
        "Industrial Robotics, ROS2, Mechatronics, Automation and Robot Programming.",
      lessons: "80 Lessons",
      slug: "robotics",
      color: "from-red-500 to-orange-500",
    },
    {
      title: "Civil Engineering",
      icon: <Building2 size={48} className="text-orange-500" />,
      description:
        "Structures, Surveying, Construction, Geotechnical and Environmental Engineering.",
      lessons: "75 Lessons",
      slug: "civil-engineering",
      color: "from-orange-500 to-yellow-500",
    },
    {
      title: "Automobile Engineering",
      icon: <Car size={48} className="text-cyan-500" />,
      description:
        "IC Engines, Electric Vehicles, Hybrid Vehicles and Vehicle Dynamics.",
      lessons: "70 Lessons",
      slug: "automobile-engineering",
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Project Management Professional (PMP®)",
      icon: <Award size={48} className="text-yellow-500" />,
      description:
        "PMI-aligned PMP® certification coaching exclusively for corporate professionals covering Project Management Frameworks, Agile, Hybrid approaches, Mock Tests, and Exam Preparation.",
      lessons: "40+ Hours",
      slug: "pmp-certification",
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Project Management Professional (PMP®)",
      icon: <Award size={48} className="text-amber-500" />,
      description:
        "Globally recognized PMP® certification training based on PMI standards. Designed for corporate professionals with real-world case studies, mock exams, and complete certification guidance.",
      lessons: "40+ Hours",
      slug: "project-management-professional",
      color: "from-amber-500 via-orange-500 to-red-500",
    },

  ];

  // ✅ FIXED SEARCH (title + description)
  const filteredCourses = courses.filter((course) => {
    const query = search.toLowerCase();
    return (
      course.title.toLowerCase().includes(query) ||
      course.description.toLowerCase().includes(query)
    );
  });

  return (
    <main className="min-h-screen bg-[#020617] text-white pt-24">

      <Navbar />

      {/* HERO */}
      <section className="text-center px-6 py-16">
        <h1 className="text-5xl font-black">Engineering Courses</h1>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Learn with AI-powered explanations, simulations, and structured learning paths.
        </p>

        {/* SEARCH */}
        <div className="mt-8 max-w-xl mx-auto relative">
          <Search className="absolute left-4 top-3 text-gray-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search courses..."
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none"
          />
        </div>
      </section>

      {/* COURSES */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="group rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${course.color}`} />

              <div className="p-7">
                <div className="mb-5">{course.icon}</div>

                <h2 className="text-xl font-bold">{course.title}</h2>

                <p className="mt-4 text-gray-400 text-sm leading-6">
                  {course.description}
                </p>

                <div className="mt-7 flex justify-between items-center">
                  <span className="text-blue-400 text-sm">
                    {course.lessons}
                  </span>

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

        {/* EMPTY STATE */}
        {filteredCourses.length === 0 && (
          <p className="text-center text-gray-400 mt-10">
            No courses found for "{search}"
          </p>
        )}
      </section>

      <Footer />
    </main>
  );
}