import Image from "next/image";
import Hero from "./components/landing/Hero";
import LogoStrip from "./components/landing/LogoStrip";
import FeatureSection from "./components/landing/FeatureSection";
import Testimonials from "./components/landing/Testimonials";
import FAQ from "./components/landing/FAQ";
import FinalCTA from "./components/landing/FinalCTA";


export default function Home() {
  
  return (
    <>
    <Hero/>
    <LogoStrip/>
    <FeatureSection/>
    <Testimonials/>
    <FAQ/>
    <FinalCTA/>
    </>
  );
}
