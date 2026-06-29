"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Search,
  Brain,
  Bot,
  Cog,
  CircuitBoard,
  Zap,
  Building2,
  Leaf,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function ResearchPage() {
  const [search, setSearch] = useState("");

  const papers = [
    {
      title: "AI-Based Predictive Maintenance for Industrial Machines",
      abstract:
        "A deep learning model that predicts machine failure using sensor data and vibration analysis.",
      domain: "Artificial Intelligence",
      year: 2025,
      icon: <Brain className="text-purple-400" />,
      slug: "ai-predictive-maintenance",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Autonomous Navigation System for Mobile Robots",
      abstract:
        "A ROS2-based navigation framework using SLAM and reinforcement learning.",
      domain: "Robotics",
      year: 2024,
      icon: <Bot className="text-red-400" />,
      slug: "autonomous-robot-navigation",
      color: "from-red-500 to-orange-500",
    },
    {
      title: "Thermal Optimization in IC Engines Using CFD",
      abstract:
        "CFD analysis to improve thermal efficiency and reduce emissions in combustion engines.",
      domain: "Mechanical Engineering",
      year: 2024,
      icon: <Cog className="text-blue-400" />,
      slug: "cfd-ic-engine",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Smart IoT-Based Energy Monitoring System",
      abstract:
        "An embedded system that monitors real-time energy consumption using IoT sensors.",
      domain: "Electrical Engineering",
      year: 2025,
      icon: <Zap className="text-yellow-400" />,
      slug: "iot-energy-monitoring",
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "5G Communication Optimization Using MIMO Antennas",
      abstract:
        "Enhancing data transmission efficiency using advanced MIMO antenna configurations.",
      domain: "Electronics & Communication",
      year: 2024,
      icon: <CircuitBoard className="text-green-400" />,
      slug: "5g-mimo-optimization",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Sustainable Concrete Using Industrial Waste Materials",
      abstract:
        "Developing eco-friendly concrete using fly ash and recycled aggregates.",
      domain: "Civil Engineering",
      year: 2023,
      icon: <Building2 className="text-orange-400" />,
      slug: "sustainable-concrete",
      color: "from-orange-500 to-yellow-500",
    },
    {
      title: "Solar Energy Storage Optimization Using Phase Change Materials",
      abstract:
        "Improving solar thermal storage efficiency using PCM-based systems.",
      domain: "Renewable Energy",
      year: 2025,
      icon: <Leaf className="text-green-500" />,
      slug: "solar-pcm-storage",
      color: "from-green-500 to-lime-500",
    },
  ];

  const filteredPapers = papers.filter((paper) => {
    const q = search.toLowerCase();
    return (
      paper.title.toLowerCase().includes(q) ||
      paper.abstract.toLowerCase().includes(q) ||
      paper.domain.toLowerCase().includes(q)
    );
  });

  return (
    <main className="min-h-screen bg-[#020617] text-white pt-24">

      <Navbar />

      {/* HEADER */}
      <section className="text-center px-6 py-16">
        <h1 className="text-5xl font-black">Research Hub</h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Explore cutting-edge engineering research papers powered by AI summaries and insights.
        </p>

        {/* SEARCH */}
        <div className="mt-8 max-w-xl mx-auto relative">
          <Search className="absolute left-4 top-3 text-gray-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search research papers..."
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none"
          />
        </div>
      </section>

      {/* PAPERS GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredPapers.map((paper, index) => (
            <div
              key={index}
              className="group rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${paper.color}`} />

              <div className="p-7">
                <div className="flex items-center gap-3 mb-4">
                  {paper.icon}
                  <span className="text-sm text-gray-400">
                    {paper.domain}
                  </span>
                </div>

                <h2 className="text-xl font-bold">{paper.title}</h2>

                <p className="mt-4 text-gray-400 text-sm leading-6">
                  {paper.abstract}
                </p>

                <div className="mt-6 flex justify-between items-center">
                  <span className="text-blue-400 text-sm">
                    {paper.year}
                  </span>

                  <Link href={`/research/${paper.slug}`}>
                    <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl text-sm">
                      Read <ArrowRight size={16} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredPapers.length === 0 && (
          <p className="text-center text-gray-400 mt-10">
            No research papers found for "{search}"
          </p>
        )}
      </section>

      <Footer />
    </main>
  );
}