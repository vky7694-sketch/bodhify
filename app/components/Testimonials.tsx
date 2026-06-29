"use client";

import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Arun Kumar",
      role: "Mechanical Engineering Student",
      review:
        "BODHIFY completely changed the way I learn. The animations made difficult concepts easy to understand and improved my GATE preparation.",
    },
    {
      name: "Priya S",
      role: "ECE Student",
      review:
        "The AI Tutor explains every concept clearly, and the virtual labs help me practice without needing expensive hardware.",
    },
    {
      name: "Rahul M",
      role: "Robotics Enthusiast",
      review:
        "Interactive simulations and project-based learning make BODHIFY far better than traditional online courses.",
    },
  ];

  return (
    <section className="bg-[#030712] py-24">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-white">
            What Our Learners Say
          </h2>

          <p className="text-gray-400 mt-5 text-lg">
            Trusted by students, educators, and future engineers.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-blue-500 transition-all duration-300"
            >

              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-300 leading-8 italic">
                "{item.review}"
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">

                <h3 className="text-xl font-bold text-white">
                  {item.name}
                </h3>

                <p className="text-blue-400">
                  {item.role}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}