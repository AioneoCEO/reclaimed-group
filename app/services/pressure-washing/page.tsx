import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Pressure Washing in Montgomery, AL | Reclaimed Group",
  description:
    "Professional pressure washing in Montgomery, Alabama. Driveways, patios, decks, fences, and siding. Soft-wash and high-pressure available. Free quotes.",
};

export default function PressureWashingPage() {
  return (
    <ServicePageLayout
      badge="Pressure Washing · Montgomery, AL"
      title="Pressure Washing"
      subtitle="Restore your property's curb appeal."
      description="Algae, mold, oil stains, and years of grime don't stand a chance. We use the right pressure and the right chemistry for every surface — safe, thorough, and effective."
      packages={[
        {
          name: "Driveway or Walkway",
          price: "From $75",
          features: [
            "Standard single-car driveway",
            "Pre-treatment for oil/grease stains",
            "High-pressure rinse",
            "Edge detail",
          ],
        },
        {
          name: "Deck or Patio",
          price: "From $120",
          highlight: true,
          features: [
            "Wood or composite deck cleaning",
            "Mold & mildew pre-treatment",
            "Low or high pressure per surface",
            "Furniture moved if accessible",
            "Post-clean inspection",
          ],
        },
        {
          name: "House Exterior",
          price: "From $200",
          features: [
            "Siding soft-wash treatment",
            "Fascia & soffit cleaning",
            "Window ledge clean-down",
            "Safe detergent rinse",
            "Gutter exterior flush",
          ],
        },
      ]}
      includes={[
        "Surface-appropriate pressure settings",
        "Eco-friendly detergents available",
        "Mold & mildew pre-treatment",
        "On-time arrival or we call you",
        "Post-service walkthrough",
        "No damage guarantee on surfaces",
      ]}
      faqs={[
        {
          q: "Can you clean my wood deck without damaging it?",
          a: "Yes. We use lower pressure and appropriate detergents for wood surfaces to clean thoroughly without splintering or gouging the grain.",
        },
        {
          q: "Will you move outdoor furniture?",
          a: "We can move lightweight furniture that is accessible. Large or heavy pieces we'll work around.",
        },
        {
          q: "How long does the clean last?",
          a: "Driveways and concrete typically stay cleaner for 12–18 months. Decks and wood surfaces vary with weather and foot traffic.",
        },
        {
          q: "Do I need to be home during the service?",
          a: "Not necessarily for exterior surfaces. We'll confirm access requirements before your appointment.",
        },
      ]}
    />
  );
}
