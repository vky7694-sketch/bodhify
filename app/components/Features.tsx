"use client";

import {
  Brain,
  Box,
  GraduationCap,
  Cpu,
  BookOpen,
  Trophy,
  Award,
} from "lucide-react";

export default function Features() {
const features = [
  {
    icon: <Box size={40} className="text-blue-400" />,
    title: "3D Animated Learning",
    description:
      "Understand complex engineering concepts through immersive 3D animations and interactive visualizations.",
  },
  {
    icon: <Brain size={40} className="text-cyan-400" />,
    title: "AI Personal Tutor",
    description:
      "Receive instant explanations, personalized guidance, and AI-powered doubt clarification anytime.",
  },
  {
    icon: <Cpu size={40} className="text-green-400" />,
    title: "Virtual Laboratories",
    description:
      "Perform engineering experiments virtually with interactive simulations and real-time feedback.",
  },
  {
    icon: <BookOpen size={40} className="text-purple-400" />,
    title: "Comprehensive Courses",
    description:
      "Access structured courses covering Mechanical, ECE, Electrical, Civil, AI, Robotics, IoT, and more.",
  },
  {
    icon: <Award size={40} className="text-yellow-400" />,
    title: "PMP® Certification",
    description:
      "PMI-aligned Project Management Professional (PMP®) certification coaching exclusively for corporate professionals with mock tests and certification guidance.",
  },
  {
    icon: <GraduationCap size={40} className="text-pink-400" />,
    title: "GATE Preparation",
    description:
      "Prepare for GATE with previous year questions, AI-powered solutions, concept videos, and mock examinations.",
  },
  {
    icon: <Trophy size={40} className="text-orange-400" />,
    title: "Skill Certifications",
    description:
      "Earn digital certificates after completing courses, assessments, and practical projects.",
  },
  {
    icon: <Brain size={40} className="text-indigo-400" />,
    title: "Research & Innovation",
    description:
      "Develop innovative engineering projects with AI-assisted research support, publications, and patent guidance.",
  },
];

  return (
    <section className="bg-[#020617] py-24">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">
            Why Choose BODHIFY?
          </h2>

          <p className="text-gray-400 text-lg mt-5 max-w-3xl mx-auto">
            Experience a revolutionary way of learning engineering through
            visualization, AI, simulations, and interactive technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-white">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-400 leading-8">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}