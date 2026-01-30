"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { fadeUp, popupHover } from "@/app/animations/gsap";

export default function Testimonials() {

const [content, setContent] = useState<any>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
  if (content?.testimonials?.length) {
    fadeUp(".test-title");
    popupHover('.test-card')
  }
}, [content]);


  useEffect(() => {
    fetch("/api/content/get")
      .then((res) => res.json())
      .then(setContent)
      .catch(console.error);
  }, []);

  if (!content?.testimonials?.length) return null;

  const testimonial = content.testimonials[index];


  return (
    <section className="w-full bg-[#F4F5F6] py-[96px]">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        
        {/* Heading */}
        <h2 className="test-title text-[40px] leading-[120%] font-semibold text-[#23262F] mb-4">
          Our Users Feel the <br /> Transformation
        </h2>

        <p className="test-title text-[16px] leading-[160%] text-[#777E90] mb-[64px]">
          Real Stories from People Empowered by Personalized Wellness
        </p>

        {/* Testimonial wrapper */}
        <div className="
        relative
    w-[987px]
    mx-auto
    flex
    items-center
    justify-center
        ">
          
          {/* Left Arrow */}
          <button 
          onClick={() =>
              setIndex((prev) =>
                prev === 0 ? content.testimonials.length - 1 : prev - 1
              )
            }
            className="
              absolute
    left-[0]
    w-[62px]
    h-[62px]
    rounded-full
    border
    border-[#23262F]
    flex
    items-center
    justify-center
    text-[#777E90]
            "
          >
             <Image
                          src="/images/Vector 229.png"
                          alt="leftArrow"
                          width={10}
                          height={10}
                          priority
            />
          </button>

          {/* Testimonial Card */}
          <div
  className="
    test-title
    w-[760px]
    h-[342px]
    bg-white
    rounded-[24px]
    px-[127px]
    py-[41px]
    flex
    flex-col
    items-center
    justify-center
    gap-[10px]
  "
>
  {/* Testimonial text */}
  <p className="test-title text-[18px] leading-[160%] text-[#23262F] text-center">
    “{testimonial.text}”
  </p>

  {/* User */}
  <div
  className="
    w-[335.5px]
    h-[54px]
    flex
    items-center
    gap-4
    rounded-full
   mt-[25px]
  "
>
  {/* Avatar */}
  <div className="w-[48px] h-[48px] rounded-full bg-[#C49A7A]" />

  {/* Text */}
  <div className="flex flex-col justify-center text-left">
    <p className="text-[16px] font-semibold text-[#23262F] leading-tight">
      {testimonial.name}
    </p>
    <p className="text-[14px] text-[#777E90] leading-tight">
      {testimonial.role}
    </p>
  </div>
</div>

</div>



          {/* Right Arrow */}
          <button
          onClick={() =>
              setIndex((prev) =>
                prev === content.testimonials.length - 1 ? 0 : prev + 1
              )
            }
            className="
              absolute
    right-[0]
    w-[62px]
    h-[62px]
    rounded-full
    bg-[#3772FF]
    flex
    items-center
    justify-center
    text-white
            "
          >
            <Image
                          src="/images/Vector 229 (1).png"
                          alt="rightArrow"
                          width={10}
                          height={10}
                          priority
            />
          </button>
        </div>

        {/* Bottom user pills */}
        <div
  className="
    test-title
    w-[760px]
    h-[90px]
    mx-auto
    flex
    items-center
    justify-center
    gap-[20px]
    mt-[48px]
  "
>
  {[
    { name: "Ava L", sub: "5 Star Rated" },
    { name: "Namo Serlina", sub: "CEO Delego" },
    { name: "Namo Serlina", sub: "CEO Delego" },
  ].map((item, i) => (
    <div
      key={i}
      className="
        flex
        items-center
        gap-3
        bg-white
        px-4
        py-3
        rounded-[16px]
        border
        border-[#F1F1F1]
        w-[240px]
        h-[90px]
      "
    >
      <div className="w-[40px] h-[40px] rounded-full bg-[#C49A7A]" />
      <div className="text-left">
        <p className="text-[14px] font-semibold text-[#23262F]">
          {item.name}
        </p>
        <p className="text-[12px] text-[#777E90]">
          {item.sub}
        </p>
      </div>
    </div>
  ))}
</div>



      </div>
    </section>
  );
}
