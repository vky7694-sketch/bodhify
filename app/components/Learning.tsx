"use client";

import { PlayCircle, Brain, FlaskConical, Trophy } from "lucide-react";

export default function Learning() {
  const steps = [
    {
      icon: <PlayCircle size={55} className="text-blue-400" />,
      title: "Watch & Visualize",
      description:
        "Learn engineering concepts through high-quality animations, videos, and interactive 3D visualizations.",
    },
    {
      icon: <Brain size={55} className="text-cyan-400" />,
      title: "Understand with AI",
      description:
        "Ask questions to your AI Tutor and receive simple explanations, diagrams, and solved examples instantly.",
    },
    {
      icon: <FlaskConical size={55} className="text-green-400" />,
      title: "Practice in Virtual Labs",
      description:
        "Perform experiments, simulations, and engineering activities in an interactive virtual environment.",
    },
    {
      icon: <Trophy size={55} className="text-yellow-400" />,
      title: "Master & Achieve",
      description:
        "Take quizzes, solve GATE-level problems, earn certificates, and track your learning progress.",
    },
  ];

  return (
    <section className="bg-[#020617] py-24">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-white">
            How BODHIFY Works
          </h2>

          <p className="text-gray-400 mt-5 text-lg max-w-3xl mx-auto">
            A smarter way to learn engineering through visualization,
            interaction, practice, and AI-powered guidance.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step, index) => (

            <div
              key={index}
              className="relative bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >

              <div className="flex justify-center mb-6">
                {step.icon}
              </div>

              <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {step.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}