"use client";

import { useState, useEffect } from "react";
import { fadeUp, } from "@/app/animations/gsap";

// const faqs = [
//   {
//     question: "What features does the AI Health Assistant offer?",
//     answer:
//       "Our AI Health Assistant provides personalized health insights, smart nutrition planning, activity tracking, sleep monitoring, and AI-powered recommendations tailored to your lifestyle.",
//   },
//   {
//     question: "Is the app customizable to my needs?",
//     answer:
//       "Yes, the app adapts to your goals, preferences, and daily habits to deliver a fully personalized wellness experience.",
//   },
//   {
//     question: "How accurate is the AI health tracking?",
//     answer:
//       "Experience the future of personalized health and wellness before everyone else. Join our exclusive early access program and help shape the future of AI-powered health coaching.",
//   },
//   {
//     question: "Do I need any special equipment?",
//     answer:
//       "No special equipment is required. The app works seamlessly with your smartphone and optional wearable integrations.",
//   },
//   {
//     question: "How does the free trial work?",
//     answer:
//       "You can explore all premium features during the free trial period. Cancel anytime before the trial ends with no charges.",
//   },
// ];

export default function FAQ() {
  const [content, setContent] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
  if (content?.testimonials?.length) {
    fadeUp(".faq-title");
    
  }
}, [content]);

  useEffect(() => {
    fetch("/api/content/get")
      .then((res) => res.json())
      .then(setContent)
      .catch(console.error);
  }, []);

  if (!content?.faqs?.length) return null;

  return (
    <section className="w-full bg-[#FCFCFD] py-[96px]">
      <div className="mx-auto max-w-[760px] px-6">
        
        {/* Heading */}
        <h2 className="faq-title text-[40px] leading-[120%] font-semibold text-[#23262F] text-center mb-4">
          Frequently Asked <br /> Questions
        </h2>

        <p className="faq-title text-[16px] leading-[160%] text-[#777E90] text-center mb-[64px]">
          Get answers to common questions about our AI health assistant app
        </p>

        {/* FAQ List */}
        <div className="faq-title border-t border-[#E6E8EC]">
          {content.faqs.map((faq: any, index: number) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="border-b border-[#E6E8EC] py-[24px]"
              >
                {/* Question */}
                <button
                  onClick={() =>
                    setActiveIndex(isActive ? null : index)
                  }
                  className="faq-title w-full flex items-center justify-between text-left"
                >
                  <span
                    className={`text-[20px] font-medium ${
                      isActive ? "text-[#3772FF]" : "text-[#23262F]"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span className="text-[28px] leading-none text-[#23262F]">
                    {isActive ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                {isActive && (
                  <p className="mt-[16px] text-[16px] leading-[160%] text-[#777E90] max-w-[680px]">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
