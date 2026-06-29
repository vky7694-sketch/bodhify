"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import {
  Cpu,
  Cog,
  CircuitBoard,
  Car,
  Brain,
  Building2,
  Bot,
  PlayCircle,
  FlaskConical,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function VirtualLabsPage() {
  const labs = [
    { title:"Mechanical Engineering Lab", icon:<Cog size={44} className="text-blue-400"/>, description:"CAD, CAM, Thermodynamics, Machine Design and Manufacturing simulations.", experiments:"25 Experiments", color:"from-blue-500 to-cyan-500"},
    { title:"ECE Virtual Lab", icon:<CircuitBoard size={44} className="text-green-400"/>, description:"Digital Electronics, Analog Circuits, Embedded Systems and VLSI.", experiments:"30 Experiments", color:"from-green-500 to-emerald-500"},
    { title:"Electrical Engineering Lab", icon:<Cpu size={44} className="text-yellow-400"/>, description:"Power Systems, Machines, Control Systems and Protection.", experiments:"20 Experiments", color:"from-yellow-400 to-orange-500"},
    { title:"Artificial Intelligence Lab", icon:<Brain size={44} className="text-purple-400"/>, description:"Machine Learning, Deep Learning, NLP and Computer Vision.", experiments:"35 Experiments", color:"from-purple-500 to-pink-500"},
    { title:"Robotics Lab", icon:<Bot size={44} className="text-red-400"/>, description:"ROS2, Automation, Robot Programming and Mechatronics.", experiments:"22 Experiments", color:"from-red-500 to-orange-500"},
    { title:"Civil Engineering Lab", icon:<Building2 size={44} className="text-orange-400"/>, description:"Surveying, Structural Analysis and Geotechnical Engineering.", experiments:"18 Experiments", color:"from-orange-500 to-yellow-500"},
    { title:"Automobile Engineering Lab", icon:<Car size={44} className="text-cyan-400"/>, description:"IC Engines, EVs, Hybrid Vehicles and Vehicle Dynamics.", experiments:"20 Experiments", color:"from-cyan-500 to-blue-500"},
    { title:"AI Guided Experiment", icon:<FlaskConical size={44} className="text-indigo-400"/>, description:"AI-assisted virtual experiments with instant explanations.", experiments:"Unlimited", color:"from-indigo-500 to-purple-500"},
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#020617] text-white pt-24">
        <section className="py-20 text-center px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-blue-300">
            <FlaskConical size={18}/> Next Generation Engineering Labs
          </div>
          <h1 className="mt-8 text-6xl font-black">Virtual Laboratory</h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-gray-400">
            Perform AI-powered engineering experiments with interactive simulations and virtual equipment.
          </p>
        </section>

        <section className="mx-auto mb-20 grid max-w-7xl gap-6 px-8 md:grid-cols-4">
          {["Interactive Simulations","AI Guided Experiments","3D Models","Instant Feedback"].map((f)=>(
            <div key={f} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <CheckCircle className="mx-auto mb-3 text-green-400"/>
              <h3 className="font-semibold">{f}</h3>
            </div>
          ))}
        </section>

        <section className="mx-auto max-w-7xl px-8 pb-24">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {labs.map((lab)=>(
              <div key={lab.title} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:-translate-y-2 hover:border-blue-500">
                <div className={`h-2 bg-gradient-to-r ${lab.color}`}></div>
                <div className="p-8">
                  <div className="mb-6">{lab.icon}</div>
                  <h2 className="text-2xl font-bold">{lab.title}</h2>
                  <p className="mt-5 leading-7 text-gray-400">{lab.description}</p>
                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-blue-400">{lab.experiments}</span>
                    <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 hover:bg-blue-700">
                      <PlayCircle size={18}/>Launch
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto max-w-6xl px-8">
            <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-600/20 via-cyan-500/10 to-indigo-600/20 p-16 text-center">
              <h2 className="text-5xl font-bold">Ready to Start Experimenting?</h2>
              <p className="mt-6 text-xl text-gray-300">
                Launch AI-powered engineering experiments and learn by doing.
              </p>
              <Link href="/ai-tutor">
                <button className="mx-auto mt-10 flex items-center gap-3 rounded-xl bg-blue-600 px-10 py-4 text-lg hover:bg-blue-700">
                  Launch AI Lab Assistant <ArrowRight size={20}/>
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
