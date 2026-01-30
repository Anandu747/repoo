"use client"

import Image from "next/image";
import { useEffect } from "react";
import { fadeUp, popupHover } from "@/app/animations/gsap";

export default function FeatureSection() {
  
  useEffect(() => {
    
    fadeUp(".about-title");
    fadeUp(".about-subtitle");
    fadeUp(".about-desc");
    fadeUp(".about-card");
    popupHover(".about-card");

  }, []);


  return (
    <section className="w-full bg-[#FCFCFD] py-[96px]">
      <div className="max-w-[1300px] mx-auto px-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[80px]">

          {/* LEFT CONTENT */}
          <div
  className="
    w-[533px]
    flex
    flex-col
    gap-[48px]
  "
>
  {/* Heading */}
  <h2
    className="
      about-title
      text-[48px]
      leading-[120%]
      font-semibold
      text-[#23262F]
    "
  >
    Maximizing Your Health Potential Together
  </h2>

  {/* Sub content block */}
  <div className="flex flex-col gap-[12px]">
    <h4 className="about-subtitle text-[18px] font-semibold text-[#23262F]">
      Smart Nutrition Planning
    </h4>

    <p className="about-desc text-[16px] leading-[160%] text-[#777E90] max-w-[420px]">
      Your AI-powered health companion transforms the way you approach
      wellness, making healthy living effortless and personalized.
    </p>
  </div>

  {/* Button */}
  <button
    className="
      h-[48px]
      w-fit
      px-[32px]
      rounded-full
      bg-white
      border
      border-[#00000008]
      text-[16px]
      font-semibold
      text-[#23262F]
    "
  >
    Read More
  </button>
</div>


          {/* RIGHT CONTENT */}
         <div
  className="
    about-card
    w-[544px]
    h-[408.89px]
    rounded-[20px]
    bg-[#F4F5F6]
    p-[42px]
    flex
    items-center
    justify-center
  "
>
  {/* Inner frame */}
  <div
    className="
      w-[460px]
      h-[324.89px]
      bg-white
      rounded-[23.84px]
      shadow-sm
      p-[24px]
    "
  >
    {/* Header */}
<div className="flex items-center justify-between mb-4">
  <div className="flex items-center gap-2 text-[#1F2937] text-sm">
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full">
      <Image
              src="/images/Vector.png"
              alt="timer"
              width={16}
              height={17}
              priority
        />
    </span>
    Time Tracker
  </div>

  <button className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/10 text-sm text-[#1F2937]">
    ⏲ History
  </button>
</div>

{/* Timer Card */}
<div className="flex items-center justify-between rounded-[20px] bg-[#F1F3F5] px-6 py-5 mb-4">
  <div>
    <p className="text-xs text-[#1F2937] mb-1">Design System</p>
    <div className="flex items-baseline gap-1">
      <span className="text-[36px] font-semibold text-[#23262F]">10:34</span>
      <span className="text-[36px] font-semibold text-[#2075FF]">:00</span>
    </div>
  </div>

  <button className="w-[56px] h-[56px] rounded-full bg-[#2075FF] flex items-center justify-center">
    <Image
              src="/images/Vector 284.png"
              alt="play"
              width={18}
              height={20}
              priority
        />
  </button>
</div>

{/* Previous Tasks */}
<div>
  <p className="text-sm font-medium text-[#1F2937] mb-1">
    Previous Tasks
  </p>

  {/* Task 1 */}
  <div className="flex items-center justify-between mb-3">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-[#F1F3F5] flex items-center justify-center">
        <Image
              src="/images/logo-64.png"
              alt="play"
              width={18}
              height={20}
              priority
        />
      </div>
      <div>
        <p className="text-sm text-[#1F2937]">Loom UI Design System</p>
        <p className="text-xs text-[#777E90]">1:20:35</p>
      </div>
    </div>
    <button className="text-[#777E90]">⋮</button>
  </div>

  {/* Task 2 */}
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-[#F1F3F5] flex items-center justify-center">
        <Image
              src="/images/logo-64.png"
              alt="play"
              width={18}
              height={20}
              priority
        />
      </div>
      <div>
        <p className="text-sm text-[#1F2937]">Loom UI / UX Designer</p>
        <p className="text-xs text-[#777E90]">1:45:35</p>
      </div>
    </div>
    <button className="text-[#777E90]">⋮</button>
  </div>
</div>

  </div>
</div>


        </div>
      </div>
    </section>
  );
}
