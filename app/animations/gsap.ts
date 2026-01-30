import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const fadeUp = (el: string) => {
  gsap.from(el, {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: el,
      start: "top 80%"
    }
  });
};

export const popupHover = (el: string) => {
  const elements = document.querySelectorAll(el);

  elements.forEach((card) => {
    gsap.set(card, {
      transformOrigin: "center center",
      willChange: "transform",
    });

    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        scale: 1.05,
        y: -14,
        boxShadow: "0px 30px 60px rgba(0, 0, 0, 0.15)",
        duration: 0.4,
        ease: "power3.out",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        scale: 1,
        y: 0,
        boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
        duration: 0.35,
        ease: "power3.out",
      });
    });
  });
};
