"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // HERO
  const [heroTitle, setHeroTitle] = useState("");
  const [heroSubtitle, setHeroSubtitle] = useState("");

  // TESTIMONIAL
  const [testimonialName, setTestimonialName] = useState("");
  const [testimonialRole, setTestimonialRole] = useState("");
  const [testimonialText, setTestimonialText] = useState("");

  // FAQ
  const [faqQuestion, setFaqQuestion] = useState("");
  const [faqAnswer, setFaqAnswer] = useState("");

  async function saveContent() {
    setLoading(true);

    await fetch("/api/content/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        hero: {
          title: heroTitle,
          subtitle: heroSubtitle,
        },
        testimonials: [
          {
            name: testimonialName,
            role: testimonialRole,
            text: testimonialText,
          },
        ],
        faqs: [
          {
            question: faqQuestion,
            answer: faqAnswer,
          },
        ],
      }),
    });

    setLoading(false);

    // Redirect to home & refresh content
    router.push("/");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-[#F4F5F6]">

      {/* HEADER */}
      {/* <div className="bg-white border-b">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/avatar.png"
              alt="Admin"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold text-[#23262F]">Edgar Thompson</p>
              <p className="text-sm text-[#777E90]">edgarthomp@gmail.com</p>
            </div>
          </div>

          <button
            onClick={() => router.push("/admin/logout")}
            className="px-4 py-2 rounded-full border border-[#3772FF] text-[#3772FF] font-medium"
          >
            Logout
          </button>
        </div>
      </div> */}

      {/* CONTENT */}
      <div className="max-w-[800px] mx-auto p-6 space-y-8">

        {/* HERO */}
        <section className="bg-white rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4 text-black">Hero Section</h3>

          <input
            className="w-full h-[44px] mb-3 px-3 border rounded-lg text-black"
            placeholder="Hero Title"
            value={heroTitle}
            onChange={(e) => setHeroTitle(e.target.value)}
          />

          <textarea
            className="w-full h-[90px] px-3 border rounded-lg text-black"
            placeholder="Hero Subtitle"
            value={heroSubtitle}
            onChange={(e) => setHeroSubtitle(e.target.value)}
          />
        </section>

        {/* TESTIMONIAL */}
        <section className="bg-white rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4 text-black">Testimonial</h3>

          <input
            className="w-full h-[44px] mb-3 px-3 border rounded-lg text-black"
            placeholder="Name"
            value={testimonialName}
            onChange={(e) => setTestimonialName(e.target.value)}
          />

          <input
            className="w-full h-[44px] mb-3 px-3 border rounded-lg text-black"
            placeholder="Role"
            value={testimonialRole}
            onChange={(e) => setTestimonialRole(e.target.value)}
          />

          <textarea
            className="w-full h-[90px] px-3 border rounded-lg text-black"
            placeholder="Testimonial text"
            value={testimonialText}
            onChange={(e) => setTestimonialText(e.target.value)}
          />
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4 text-black">FAQ</h3>

          <input
            className="w-full h-[44px] mb-3 px-3 border rounded-lg text-black"
            placeholder="Question"
            value={faqQuestion}
            onChange={(e) => setFaqQuestion(e.target.value)}
          />

          <textarea
            className="w-full h-[90px] px-3 border rounded-lg text-black"
            placeholder="Answer"
            value={faqAnswer}
            onChange={(e) => setFaqAnswer(e.target.value)}
          />
        </section>

        {/* SAVE */}
        <button
          onClick={saveContent}
          disabled={loading}
          className="w-full h-[48px] rounded-full bg-[#23262F] text-white font-semibold"
        >
          {loading ? "Saving..." : "Save & Publish"}
        </button>
      </div>
    </div>
  );
}
