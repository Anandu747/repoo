"use client"
import Image from "next/image";
import { popupHover,fadeUp } from "@/app/animations/gsap";
import { useEffect } from "react";

export default function LogoStrip() {

  useEffect(()=> {
   popupHover('.logo-card')
   fadeUp('.logo-card')
  },[])
  return (
    <section
      className="
        w-full
        bg-[#FCFCFD]
        py-[48px]
        px-[80px]
        min-h-[176px]
      "
    >
      <div
        className="
          mx-auto
          max-w-[1280px]
          h-[80px]
          flex
          items-center
          justify-between
        "
      >
        <div className="logo-card opacity-70 grayscale">
          <Image src="/images/Logo (3).png" alt="Logoipsum" width={202} height={40} />
        </div>

        <div className="logo-card opacity-70 grayscale">
          <Image src="/images/Logo (4).png" alt="Logoipsum" width={166} height={40} />
        </div>

        <div className="logo-card opacity-70 grayscale">
          <Image src="/images/Logo (5).png" alt="Logoipsum" width={164} height={40} />
        </div>

        <div className="logo-card opacity-70 grayscale">
          <Image src="/images/Logo (6).png" alt="Logoipsum" width={166} height={40} />
        </div>

        <div className="logo-card opacity-70 grayscale">
          <Image src="/images/Logo (7).png" alt="Logoipsum" width={202} height={40} />
        </div>
      </div>
    </section>
  );
}
