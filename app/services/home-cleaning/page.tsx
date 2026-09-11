import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Home Cleaning in Montgomery, AL | Reclaimed Group",
  description:
    "Professional home cleaning in Montgomery, Alabama. Standard cleans, deep cleans, and move-in/move-out service. Reliable, thorough, and locally owned.",
};

export default function HomeCleaningPage() {
  return (
    <ServicePageLayout
      badge="Home Cleaning · Montgomery, AL"
      title="Home Cleaning"
      subtitle="Every room done right — not just done."
      description="We clean homes the way we'd want ours cleaned. Thorough, organized, and without shortcuts. Available for regular maintenance cleans or one-time deep service."
      packages={[
        {
          name: "Standard Clean",
          price: "From $100",
          features: [
            "Kitchen surface wipe-down",
            "Bathroom scrub & sanitize",
            "Vacuuming all rooms",
            "Mopping hard floors",
            "Trash removal",
            "Bed linen change (if provided)",
          ],
        },
        {
          name: "Deep Clean",
          price: "From $180",
          highlight: true,
          features: [
            "Everything in Standard Clean",
            "Inside oven & microwave",
            "Inside refrigerator",
            "Baseboards & door frames",
            "Window sills & blinds",
            "Cabinet exterior wipe-down",
            "Detailed bathroom grout cleaning",
          ],
        },
        {
          name: "Move-In / Move-Out",
          price: "From $220",
          features: [
            "Full deep clean of empty home",
            "Inside all cabinets & drawers",
            "All appliances inside and out",
            "Walls spot-cleaned",
            "Garage sweep-out",
            "Final walkthrough documentation",
          ],
        },
      ]}
      includes={[
        "All cleaning supplies included",
        "HEPA vacuum equipment",
        "Pet-safe products available",
        "Consistent same-cleaner policy (when possible)",
        "Background-checked cleaners",
        "Satisfaction guarantee",
      ]}
      faqs={[
        {
          q: "Do I need to provide cleaning supplies?",
          a: "No — we bring everything. If you have a preferred product for a specific surface, let us know and we're happy to use it.",
        },
        {
          q: "How long does a cleaning take?",
          a: "Standard cleans take 2–3 hours for average-size homes. Deep cleans and move-out cleans can take 4–6 hours depending on home size.",
        },
        {
          q: "Do I need to be home?",
          a: "You don't have to be, but we prefer to meet you at least the first time. Many clients give us a lockbox code for recurring service.",
        },
        {
          q: "Can I book recurring service?",
          a: "Yes. We offer weekly, bi-weekly, and monthly recurring appointments. Recurring clients get priority scheduling.",
        },
      ]}
    />
  );
}
