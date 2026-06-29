"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Send, Bot, User } from "lucide-react";

export default function AiTutorPage() {
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hi 👋 I'm your AI Engineering Tutor. Ask me anything from Mechanical, ECE, AI, Electrical or GATE preparation.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const quickPrompts = [
    "Explain Thermodynamics first law",
    "What is Signal and Systems?",
    "Explain Machine Learning basics",
    "GATE preparation strategy",
    "What is PID controller?",
  ];

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    const userMsg = { role: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();

      const aiMsg = {
        role: "ai",
        text: data.reply || "Sorry, I couldn't process that.",
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "Error connecting to AI server." },
      ]);
    }

    setLoading(false);
  };

  const handleSend = () => sendMessage(input);

  return (
    <main className="min-h-screen bg-[#020617] text-white pt-24">
      <Navbar />

      {/* HEADER */}
      <section className="text-center px-6 py-10">
        <h1 className="text-5xl font-black">AI Tutor</h1>
        <p className="text-gray-400 mt-4">
          Your 24/7 Engineering Assistant for doubts, concepts, and GATE prep
        </p>
      </section>

      {/* CHAT BOX */}
      <section className="max-w-4xl mx-auto px-6 pb-10">
        <div className="bg-white/5 border border-white/10 rounded-3xl h-[550px] flex flex-col">

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.role === "ai" && (
                  <Bot className="text-blue-400 mt-1" />
                )}

                <div
                  className={`max-w-[70%] px-4 py-3 rounded-2xl text-sm leading-6 ${
                    msg.role === "user"
                      ? "bg-blue-600"
                      : "bg-white/10"
                  }`}
                >
                  {msg.text}
                </div>

                {msg.role === "user" && (
                  <User className="text-green-400 mt-1" />
                )}
              </div>
            ))}

            {loading && (
              <div className="text-gray-400 text-sm">
                AI is thinking...
              </div>
            )}
          </div>

          {/* INPUT */}
          <div className="p-4 border-t border-white/10 flex gap-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask your engineering doubt..."
              className="flex-1 p-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />

            <button
              onClick={handleSend}
              className="bg-blue-600 hover:bg-blue-700 px-5 rounded-xl flex items-center"
            >
              <Send size={18} />
            </button>
          </div>
        </div>

        {/* QUICK PROMPTS */}
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          {quickPrompts.map((q, i) => (
            <button
              key={i}
              onClick={() => sendMessage(q)}
              className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm hover:border-blue-500 transition"
            >
              {q}
            </button>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}