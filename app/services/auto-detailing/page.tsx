import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Auto Detailing in Montgomery, AL | Reclaimed Group",
  description:
    "Professional auto detailing in Montgomery, Alabama. Interior deep cleans, full details, paint correction, and ceramic coatings. Book your detail today.",
};

export default function AutoDetailingPage() {
  return (
    <ServicePageLayout
      badge="Auto Detailing · Montgomery, AL"
      title="Auto Detailing"
      subtitle="We treat your vehicle like it's ours."
      description="From a quick interior refresh to a full paint correction and ceramic coat, we deliver professional-grade results that protect your investment and bring back the shine."
      packages={[
        {
          name: "Interior Detail",
          price: "From $100",
          features: [
            "Full vacuum of seats, carpet & trunk",
            "Dashboard, console & door panel wipe-down",
            "Glass cleaning (interior)",
            "Odor treatment",
            "Floor mat cleaning",
          ],
        },
        {
          name: "Full Detail",
          price: "From $175",
          highlight: true,
          features: [
            "Everything in Interior Detail",
            "Exterior hand wash & dry",
            "Wheel & tire cleaning & dressing",
            "Paint clay bar treatment",
            "One-step polish & wax",
            "Trim restoration",
          ],
        },
        {
          name: "Ceramic Coating",
          price: "From $400",
          features: [
            "Everything in Full Detail",
            "Paint correction (1–2 stage)",
            "Professional ceramic coating application",
            "Up to 3-year paint protection",
            "Hydrophobic finish",
            "Post-cure inspection",
          ],
        },
      ]}
      includes={[
        "Free pre-service walkthrough",
        "Eco-friendly cleaning products",
        "Microfiber-only paint contact",
        "On-time arrival or we contact you",
        "Post-service quality walkthrough",
        "Satisfaction guarantee",
      ]}
      faqs={[
        {
          q: "How long does a full detail take?",
          a: "A full detail typically takes 3–5 hours depending on vehicle size and condition. We let you know an estimated window when you book.",
        },
        {
          q: "Do you come to me or do I drop off?",
          a: "We offer mobile detailing — we come to your home or workplace. Contact us and we'll work out the location.",
        },
        {
          q: "How often should I get my car detailed?",
          a: "For most drivers, a full detail every 3–6 months keeps the vehicle in great condition. An interior-only clean can be done more frequently.",
        },
        {
          q: "Is ceramic coating worth it?",
          a: "If you plan to keep the vehicle long-term, absolutely. It dramatically reduces the time and effort needed for maintenance washes and protects the paint from UV, dirt, and minor scratches.",
        },
      ]}
    />
  );
}
