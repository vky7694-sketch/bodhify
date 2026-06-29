"use client";

import {
  Brain,
  Box,
  GraduationCap,
  Cpu,
  BookOpen,
  Trophy,
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
      icon: <Brain size={40} className="text-blue-400" />,
      title: "AI Personal Tutor",
      description:
        "Get instant explanations, solve doubts, and receive personalized learning support anytime.",
    },
    {
      icon: <Cpu size={40} className="text-blue-400" />,
      title: "Virtual Laboratories",
      description:
        "Perform engineering experiments virtually with real-time simulations and interactive models.",
    },
    {
      icon: <BookOpen size={40} className="text-blue-400" />,
      title: "Comprehensive Courses",
      description:
        "Access structured learning materials covering Mechanical, Electronics, AI, Robotics, Civil, and more.",
    },
    {
      icon: <GraduationCap size={40} className="text-blue-400" />,
      title: "GATE Preparation",
      description:
        "Master competitive exams with previous year questions, mock tests, and AI-powered solutions.",
    },
    {
      icon: <Trophy size={40} className="text-blue-400" />,
      title: "Skill Certification",
      description:
        "Earn certificates after completing courses and assessments to showcase your engineering skills.",
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