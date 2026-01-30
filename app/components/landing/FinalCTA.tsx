"use client"
import Image from "next/image";
import { fadeUp, popupHover } from "@/app/animations/gsap";
import { useEffect } from "react";

export default function FinalCTA() {

    useEffect(() => {
        
        fadeUp('.cta-title')
        popupHover('.cta-card')
    
      }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#FCFCFD] "
    style={{
    minHeight: "727.7635498046875px",
    paddingTop: "200px",
    paddingRight: "40px",
    paddingBottom: "200px",
    paddingLeft: "40px",
    opacity: 1,
  }}
    
    >

      {/* Rings background */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[1249px]
          h-[1249px]
          bg-center
          bg-no-repeat
          bg-contain
          pointer-events-none
          z-0
        "
        style={{
          backgroundImage:
            "url('/images/Collaboration Background Shape (1).png')",
        }}
      />

      {/* Floating icon placeholders */}
      <div className="absolute inset-0 z-10 pointer-events-none">

        {/* Top Left */}
        <div
  className="absolute"
  style={{
    top: "165.59px", // pulled closer to center
    left: "199px",
    opacity: 1,
  }}
>
  <div
    className="flex items-center justify-center bg-white"
    style={{
      width: "100px",
      height: "100px",
      borderRadius: "16px",
      transform: "rotate(-12.78deg)",
      boxShadow: "0px 1px 2px rgba(0,0,0,0.08)",
      transformOrigin: "center",
      willChange: "transform",
    }}
  >
    <div style={{ transform: "rotate(12.78deg)" }}>
      <Image
        src="/images/Icon Four.png"
        alt="icon"
        width={44}
        height={44}
      />
    </div>
  </div>
</div>



        {/* Top Right */}
       <div
  className="absolute"
  style={{
    top: "146.59px",
    left: "1133px",
  }}
>
  {/* Card (ROTATED RIGHT) */}
  <div
    className="
      w-[100px]
      h-[100px]
      rounded-[16px]
      bg-white
      shadow-sm
      flex
      items-center
      justify-center
    "
    style={{
      transform: "rotate(5.35deg)", // flipped direction
    }}
  >
    {/* Icon (COUNTER-ROTATED) */}
    <div style={{ transform: "rotate(-5.35deg)" }}>
      <Image
        src="/images/Icon Two.png"
        alt="icon"
        width={44}
        height={44}
      />
    </div>
  </div>
</div>



        {/* Bottom Left */}
        <div
  className="absolute"
  style={{
    top: "446.59px",
    left: "223px",
    opacity: 1,
  }}
>
  {/* Card */}
  <div
    className="flex items-center justify-center bg-white"
    style={{
      width: "100px",
      height: "100px",
      borderRadius: "16px",
      transform: "rotate(16.11deg)", // ✅ exact Figma angle
      boxShadow: "0px 1px 2px rgba(0,0,0,0.08)",
      transformOrigin: "center",
      willChange: "transform",
    }}
  >
    {/* Icon (counter-rotated) */}
    <div
      style={{
        transform: "rotate(16.11deg)", // opposite rotation
      }}
    >
      <Image
        src="/images/Vector (4).png"
        alt="icon"
        width={28}
        height={28}
      />
    </div>
  </div>
</div>


        {/* Bottom Right */}
        <div
  className="absolute"
  style={{
    top: "470.59px",
    left: "1113px",
    opacity: 1,
  }}
>
  {/* Card */}
  <div
    className="cta-card flex items-center justify-center bg-white"
    style={{
      width: "100px",
      height: "100px",
      borderRadius: "16px",
      transform: "rotate(-13.76deg)", // exact Figma angle
      boxShadow: "0px 1px 2px rgba(0,0,0,0.08)",
      transformOrigin: "center",
      willChange: "transform",
    }}
  >
    {/* Icon (counter-rotated) */}
    <div
      style={{
        transform: "rotate(-13.76deg)",
      }}
    >
      <Image
        src="/images/Vector (3).png"
        alt="icon"
        width={28}
        height={28}
      />
    </div>
  </div>
</div>



      </div>

      {/* Content */}
      <div className="relative z-20 max-w-[720px] mx-auto text-center px-6">

        <p className="cta-title text-[12px] tracking-[0.12em] text-[#777E90] mb-4">
          SPECIAL LAUNCH OFFER
        </p>

        <h2 className="cta-title text-[48px] leading-[120%] font-semibold text-[#23262F] mb-6">
          Your journey to better <br /> health starts now
        </h2>

        <p className="cta-title text-[16px] leading-[160%] text-[#777E90] mb-10">
          Get 50% off your first 3 months when you start your trial today!
        </p>

        <div className="flex items-center justify-center gap-4">
          <button className="flex items-center gap-2 h-[56px] px-[32px] rounded-full bg-white border border-[#00000008] font-semibold text-[#23262F]">
            <Image src="/images/Vector (2).png" alt="Apple" width={18} height={18} />
            Download
          </button>

          <button className="flex items-center gap-2 h-[56px] px-[32px] rounded-full bg-white border border-[#00000008] font-semibold text-[#23262F]">
            <Image src="/images/logo (2).png" alt="Playstore" width={18} height={18} />
            Download
          </button>
        </div>
      </div>
    </section>
  );
}
