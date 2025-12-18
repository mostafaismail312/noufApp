import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import HowItWorks from "./../HowItWorks/HowItWorks";
import TrustedBy from "../TrustedBy/TrustedBy";
import Features from "../Features/Features";
import Benefits from "../Benefits/Benefits";
import Footer from "../footer/Footer";
import Pricing from "../Pricing/Pricing";
export default function () {
  return (
    <>
      <HeroSection />
      <TrustedBy />
      <Features />
      <HowItWorks />
      <Benefits />
      <Pricing />
    </>
  );
}
