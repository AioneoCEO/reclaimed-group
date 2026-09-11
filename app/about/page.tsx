import type { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About Us | Reclaimed Group — Montgomery, AL",
  description:
    "Learn about Reclaimed Group, a locally owned property and vehicle care company in Montgomery, Alabama. Built on faith, integrity, and pride in craftsmanship.",
};

export default function AboutPage() {
  return <AboutContent />;
}
