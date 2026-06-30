"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  HelpCircle,
} from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    category: "General Inquiry",
    message: "",
  });

  const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  console.log("Form Submitted:", form);

  alert("Message sent successfully!");

  setForm({
    name: "",
    email: "",
    category: "General Inquiry",
    message: "",
  });
};

  return (
    <main className="min-h-screen bg-[#020617] text-white pt-24">

      <Navbar />

      {/* HERO */}
      <section className="text-center px-6 py-16">
        <h1 className="text-5xl font-black">Contact Us</h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Have questions about courses, research, or AI learning? We’re here to help you anytime.
        </p>
      </section>

      {/* CONTACT GRID */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 pb-20">

        {/* FORM */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none"
              required
            />

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none"
            >
              <option>General Inquiry</option>
              <option>Course Support</option>
              <option>Research Help</option>
              <option>Technical Issue</option>
            </select>

            <textarea
              name="message"
              placeholder="Your Message..."
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none"
              required
            />

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl transition"
            >
              <Send size={18} />
              Send Message
            </button>

          </form>
        </div>

        {/* CONTACT INFO */}
        <div className="space-y-6">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex items-center gap-4">
            <Mail className="text-blue-400" />
            <div>
              <p className="text-gray-400 text-sm">Email</p>
              <p className="font-semibold">sambodhigate@gmail.com</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex items-center gap-4">
            <Phone className="text-green-400" />
            <div>
              <p className="text-gray-400 text-sm">Phone</p>
              <p className="font-semibold">+91 82204 86288</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex items-center gap-4">
            <MapPin className="text-red-400" />
            <div>
              <p className="text-gray-400 text-sm">Location</p>
              <p className="font-semibold">India (Remote Learning Platform)</p>
            </div>
          </div>

          {/* MINI FAQ */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <HelpCircle className="text-yellow-400" />
              <h3 className="font-bold">Quick Help</h3>
            </div>

            <p className="text-sm text-gray-400 mb-2">
              • How do I access courses?
            </p>
            <p className="text-sm text-gray-400 mb-2">
              • Can I download study materials?
            </p>
            <p className="text-sm text-gray-400">
              • How does AI tutoring work?
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}