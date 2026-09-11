import type { Metadata } from "next";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact & Free Quote | Reclaimed Group — Montgomery, AL",
  description:
    "Request a free quote for auto detailing, pressure washing, home cleaning, or window washing in Montgomery, Alabama. We respond quickly.",
};

export default function ContactPage() {
  return <ContactContent />;
}
