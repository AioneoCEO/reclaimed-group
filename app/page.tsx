import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhySection from "@/components/home/WhySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ServiceAreaSection from "@/components/home/ServiceAreaSection";
import CtaSection from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Reclaimed Group | Auto Detailing, Pressure Washing & Home Services — Montgomery, AL",
  description:
    "Montgomery, AL's trusted property and vehicle care company. Auto detailing, pressure washing, home cleaning, and window washing. Call for a free quote today.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhySection />
      <TestimonialsSection />
      <ServiceAreaSection />
      <CtaSection />
    </>
  );
}
