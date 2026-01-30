"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { fadeUp,popupHover } from "@/app/animations/gsap";


export default function Hero() {
const [content, setContent] = useState<any>(null);

useEffect(() => {
    fetch("/api/content/get")
      .then((res) => res.json())
      .then(setContent)
      .catch(console.error);
  }, []);

  
  useEffect(() => {
    if (!content) return;
    fadeUp(".hero-title");
    fadeUp(".hero-subtitle");
    
  }, [content]);


  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F9FAFB] to-white">

      {/* Background half-circle using background-image */}
      <div
  className="
    absolute
    top-50
    left-1/2
    -translate-x-1/2
    w-[1249px]
    h-[1249px]
    -translate-y-[650px]
    rounded-full
    bg-center
    bg-no-repeat
    bg-contain
    pointer-events-none
    z-0
    opacity-70
    contrast-125
    brightness-90
  "
  style={{
    backgroundImage:
      "url('/images/Collaboration Background Shape.png')",
    filter: "drop-shadow(0 0 0 rgba(120,120,120,0.6))",
  }}
/>


      {/* Hero content */}
      <div className="relative z-10 max-w-[1300px] mx-auto px-6 pt-28 pb-20">

        {/* Phone + floating cards */}
        <div className="relative flex justify-center items-center mb-20">

          {/* Left floating card */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block">

  {/* Background glow */}
  <div
    className="
      absolute
      inset-0
      -z-10
      bg-[#70D9FF]
      blur-[276.4px]
      rounded-full
    "
  />

  {/* Image */}
  <Image
    src="/images/Frame 1707482516.png"
    alt="Day off"
    width={400}
    height={317}
    className="hero-card"
  />
</div>


          {/* Phone */}
          <div className="relative w-full h-[577px]">
  <div
    className="absolute -translate-y-[80px]"
    style={{
      left: "392.21px",
      top: "22px",
    }}
  >
    <div className="relative w-[512px] h-[577px] overflow-hidden ">
      
      {/* Phone image */}
      <Image
        src="/images/iPhone 12 Pro.png"
        alt="AI Health Coach App"
        width={512}
        height={577}
        priority
      />

      {/* Bottom inner gradient shadow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-[160px]
        "
        style={{
          background:
            "linear-gradient(180deg, rgba(249,249,249,0) 0%, #F9F9F9 100%)",
        }}
      />
    </div>
  </div>
</div>




          {/* Right floating card */}
          <div className="absolute right-[-35px] top-1/2 -translate-y-1/2 hidden lg:block">

  {/* Background glow */}
  <div
    className="
      absolute
      inset-0
      -z-10
      bg-[#FFE5AA]
      blur-[174.68px]
      rounded-full
    "
  />

  {/* Image */}
  <Image
    src="/images/Frame 1707482517.png"
    alt="Work analysis"
    width={400}
    height={317}
  />
</div>

        </div>

        {/* Text content */}
        <div className="text-center max-w-3xl mx-auto">

          {/* Users */}
         <div className="flex items-center justify-center gap-4 mb-6">

  {/* Avatars */}
  <div className="flex items-center">
    {[
      "/images/avatar.png",
      "/images/avatar (1).png",
      "/images/avatar (2).png",
    ].map((src, index) => (
      <div
        key={index}
        className={`
         relative
          w-12
          h-12
          rounded-full
          overflow-hidden
          border-2
          border-white
          ${index !== 0 ? "-ml-3" : ""}
        `}
      >
        <Image
          src={src}
          alt="User avatar"
          fill
          className="object-cover"
        />
      </div>
    ))}
  </div>

  {/* Text */}
  <div className="text-sm text-gray-600">
    <span className="font-semibold text-gray-900 text-lg">
      59,182
    </span>{" "}
    Happy Users
  </div>
</div>


          {/* Heading */}
          <h1
  className="
    hero-title
    mx-auto
    max-w-[598px]
    text-center
    font-semibold
    text-[64px]
    leading-[110%]
    tracking-[-0.03em]
    text-[#23262F]
    mb-4
    whitespace-nowrap
    
  "
>
  {content?.hero?.title}
</h1>


          {/* Description */}
          <p
  className="
    hero-subtitle
    mx-auto
    max-w-[520px]
    text-center
    font-medium
    text-[18px]
    leading-[160%]
    tracking-[-0.012em]
    text-[#777E90]
    mb-8
  "
>
  {content?.hero?.subtitle}
</p>


          {/* Store buttons */}
          <div className="flex items-center justify-center gap-4">

  {/* App Store button */}
  <button
    className="
      flex
      items-center
      gap-[10.62px]
      h-[55.76px]
      px-[31.86px]
      py-[10.62px]
      bg-white
      border
      border-[#00000008]
      rounded-[94.27px]
      font-bold
      text-[18px]
      leading-[34.52px]
      tracking-[0]
      text-[#23262F]
      text-center
    "
  >
    <Image
      src="/images/vector (2).png"
      alt="Apple"
      width={22}
      height={22}
    />
    Download
  </button>

  {/* Play Store button */}
  <button
    className="
      flex
      items-center
      gap-[10.62px]
      h-[55.76px]
      px-[31.86px]
      py-[10.62px]
      bg-white
      border
      border-[#00000008]
      rounded-[94.27px]
      font-bold
      text-[18px]
      leading-[34.52px]
      tracking-[0]
      text-[#23262F]
      text-center
    "
  >
    <Image
      src="/images/logo (2).png"
      alt="Playstore"
      width={22}
      height={22}
    />
    Download
  </button>

</div>


        </div>
      </div>

      {/* Bottom subtle background glow */}
<div className="pointer-events-none absolute inset-x-0 bottom-0 z-0">

  {/* Purple glow */}
  <div
    className="absolute left-1/2 -translate-x-1/2 bottom-[-220px] w-[900px] h-[320px]"
    style={{
      background: "#B3AAFF",
      filter: "blur(226.4px)",
      opacity: 0.45,
    }}
  />

  {/* Blue glow */}
  <div
    className="absolute left-1/2 -translate-x-1/2 bottom-[-260px] w-[1000px] h-[360px]"
    style={{
      background: "#BFDEFF",
      filter: "blur(276.4px)",
      opacity: 0.45,
    }}
  />

</div>



    </section>
  );
}
