import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Window Washing in Montgomery, AL | Reclaimed Group",
  description:
    "Professional window washing in Montgomery, Alabama. Interior and exterior residential window cleaning. Streak-free results. Book your appointment today.",
};

export default function WindowWashingPage() {
  return (
    <ServicePageLayout
      badge="Window Washing · Montgomery, AL"
      title="Window Washing"
      subtitle="Crystal clear, every pane."
      description="Dirty windows are one of the most overlooked things that affect how your home looks and feels. We'll have every pane spotless — inside, outside, and the screens too."
      packages={[
        {
          name: "Exterior Only",
          price: "From $80",
          features: [
            "All accessible exterior windows",
            "Screen removal & rinse",
            "Sill & track wipe-down",
            "Streak-free solution",
          ],
        },
        {
          name: "Interior + Exterior",
          price: "From $140",
          highlight: true,
          features: [
            "All exterior windows",
            "All interior windows",
            "Screen removal, cleaning & reinstall",
            "Full sill & track detail",
            "Streak-free guarantee",
            "All glass types",
          ],
        },
        {
          name: "Commercial Lite",
          price: "Call for Quote",
          features: [
            "Small storefronts & offices",
            "Interior + exterior glass",
            "Entry door glass",
            "Lobby partitions",
            "Scheduled maintenance plans",
          ],
        },
      ]}
      includes={[
        "Streak-free professional solution",
        "Screen removal and reinstall",
        "Sill and track cleaning",
        "Microfiber squeegee technique",
        "No damage to seals or frames",
        "Post-clean walk-around",
      ]}
      faqs={[
        {
          q: "Will there be streaks?",
          a: "No. We use professional-grade squeegees and solutions specifically formulated for streak-free glass. We do a walkthrough after to confirm.",
        },
        {
          q: "Do you clean screens?",
          a: "Yes — screens are removed, rinsed and cleaned, then reinstalled as part of any interior + exterior package.",
        },
        {
          q: "How often should windows be cleaned?",
          a: "Most homeowners benefit from cleaning 2–4 times per year. If your home is near trees or a road, more often is better.",
        },
        {
          q: "Can you reach second-story windows?",
          a: "Yes. We have equipment for two-story residential homes. For higher applications, contact us to discuss options.",
        },
      ]}
    />
  );
}
