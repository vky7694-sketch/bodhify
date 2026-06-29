"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "What is BODHIFY?",
      answer:
        "BODHIFY is an AI-powered engineering learning platform that combines animations, virtual labs, interactive simulations, and expert-designed courses to simplify complex engineering concepts.",
    },
    {
      question: "Who can use BODHIFY?",
      answer:
        "Engineering students, diploma students, faculty members, GATE aspirants, and anyone interested in learning engineering concepts can benefit from BODHIFY.",
    },
    {
      question: "Does BODHIFY provide GATE preparation?",
      answer:
        "Yes. BODHIFY includes GATE-focused courses, previous year questions, mock tests, concept videos, and AI-assisted explanations.",
    },
    {
      question: "Are Virtual Labs included?",
      answer:
        "Yes. Students can perform engineering experiments and simulations virtually to gain practical understanding without requiring physical laboratory equipment.",
    },
    {
      question: "Can I access BODHIFY on mobile?",
      answer:
        "Yes. BODHIFY is designed to work seamlessly on desktops, tablets, and smartphones for learning anytime and anywhere.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#020617] py-24">
      <div className="max-w-5xl mx-auto px-8">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-white">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-400 mt-5 text-lg">
            Find answers to the most common questions about BODHIFY.
          </p>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
            >

              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >

                <span className="text-xl font-semibold text-white">
                  {faq.question}
                </span>

                {openIndex === index ? (
                  <ChevronUp className="text-blue-400" />
                ) : (
                  <ChevronDown className="text-blue-400" />
                )}

              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-400 leading-8">
                  {faq.answer}
                </div>
              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}