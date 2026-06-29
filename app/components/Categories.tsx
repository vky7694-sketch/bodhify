"use client";

import {
  Cpu,
  Bot,
  Cog,
  CircuitBoard,
  Building2,
  Car,
  Brain,
  Zap,
} from "lucide-react";

export default function Categories() {
  const categories = [
    {
      icon: <Cog size={50} className="text-blue-400" />,
      title: "Mechanical Engineering",
      desc: "Machine Design, Thermodynamics, Manufacturing, CAD & CAE.",
    },
    {
      icon: <CircuitBoard size={50} className="text-green-400" />,
      title: "Electronics",
      desc: "Analog, Digital Electronics, Embedded Systems and PCB Design.",
    },
    {
      icon: <Zap size={50} className="text-yellow-400" />,
      title: "Electrical Engineering",
      desc: "Power Systems, Machines, Control Systems and Protection.",
    },
    {
      icon: <Bot size={50} className="text-pink-400" />,
      title: "Robotics",
      desc: "Industrial Robotics, ROS, Automation and Mechatronics.",
    },
    {
      icon: <Brain size={50} className="text-purple-400" />,
      title: "Artificial Intelligence",
      desc: "Machine Learning, Deep Learning, Computer Vision and NLP.",
    },
    {
      icon: <Building2 size={50} className="text-orange-400" />,
      title: "Civil Engineering",
      desc: "Structures, Surveying, Geotechnical and Environmental Engineering.",
    },
    {
      icon: <Car size={50} className="text-red-400" />,
      title: "Automobile Engineering",
      desc: "IC Engines, Electric Vehicles, Vehicle Dynamics and Design.",
    },
    {
      icon: <Cpu size={50} className="text-cyan-400" />,
      title: "Competitive Exams",
      desc: "GATE, ESE, PSU, SSC JE and Technical Aptitude Preparation.",
    },
  ];

  return (
    <section className="bg-[#030712] py-24">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-white">
            Explore Engineering Domains
          </h2>

          <p className="text-gray-400 mt-5 text-lg max-w-3xl mx-auto">
            Learn through interactive animations, AI tutors, virtual labs,
            simulations and real-world engineering projects.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {categories.map((item, index) => (

            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 cursor-pointer"
            >

              <div className="mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition">

                {item.title}

              </h3>

              <p className="text-gray-400 leading-7">

                {item.desc}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}