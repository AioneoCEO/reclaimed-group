import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Reclaimed Group | Auto Detailing, Pressure Washing & Home Services — Montgomery, AL",
    template: "%s | Reclaimed Group",
  },
  description:
    "Montgomery, AL's trusted property and vehicle care company. Auto detailing, pressure washing, home cleaning, and window washing done with craftsmanship and integrity.",
  keywords: ["auto detailing Montgomery AL", "pressure washing Montgomery", "home cleaning Montgomery Alabama", "window washing Montgomery AL", "Reclaimed Group"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Reclaimed Group",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
