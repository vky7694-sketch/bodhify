"use client";

export default function Stats() {
  const stats = [
    {
      number: "500+",
      title: "Animated Concepts",
      description: "Visual engineering concepts explained with immersive animations.",
    },
    {
      number: "50+",
      title: "Virtual Labs",
      description: "Interactive experiments and engineering simulations.",
    },
    {
      number: "1000+",
      title: "GATE Questions",
      description: "Previous year questions with AI-powered explanations.",
    },
    {
      number: "24/7",
      title: "AI Tutor",
      description: "Learn anytime with your personal AI engineering assistant.",
    },
  ];

  return (
    <section className="bg-[#030712] py-24">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">
            BODHIFY in Numbers
          </h2>

          <p className="text-gray-400 mt-5 text-lg">
            Empowering engineering students through innovation and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-blue-500 transition duration-300"
            >
              <h3 className="text-5xl font-black text-blue-400">
                {item.number}
              </h3>

              <h4 className="text-2xl font-semibold text-white mt-6">
                {item.title}
              </h4>

              <p className="text-gray-400 mt-4 leading-7">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}