"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    href: "/services/auto-detailing",
    icon: "🚗",
    title: "Auto Detailing",
    desc: "Interior deep cleans, exterior washes, paint correction, and ceramic coatings. We treat your vehicle like it's our own.",
    tags: ["Interior Detail", "Full Detail", "Ceramic Coat"],
  },
  {
    href: "/services/pressure-washing",
    icon: "💧",
    title: "Pressure Washing",
    desc: "Driveways, patios, decks, fences, and siding restored to life. Soft-wash and high-pressure options available.",
    tags: ["Driveway", "Deck & Patio", "Siding"],
  },
  {
    href: "/services/home-cleaning",
    icon: "🏠",
    title: "Home Cleaning",
    desc: "Standard cleans, deep cleans, and move-in/move-out service. Every room, every corner — done right.",
    tags: ["Standard Clean", "Deep Clean", "Move-Out"],
  },
  {
    href: "/services/window-washing",
    icon: "🪟",
    title: "Window Washing",
    desc: "Crystal-clear results inside and out. Residential and light commercial window cleaning for homes that shine.",
    tags: ["Interior + Exterior", "Residential", "Screen Clean"],
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#0D0F14] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-[#B8966A] text-xs font-sans font-medium tracking-[0.25em] uppercase">What We Do</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#E8E4DC] mt-3">
            Four Services. One Standard.
          </h2>
          <p className="text-[#9A9590] font-sans mt-4 max-w-xl mx-auto leading-relaxed">
            Whether it's your car, your driveway, your home, or your windows — we bring the same level of care to every job.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ href, icon, title, desc, tags }, i) => (
            <motion.div
              key={href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={href}
                className="group block h-full bg-[#141720] border border-[#2A2D38] hover:border-[#B8966A]/50 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="font-serif text-xl font-semibold text-[#E8E4DC] mb-2">{title}</h3>
                <p className="text-[#9A9590] text-sm font-sans leading-relaxed mb-5">{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="text-xs font-sans text-[#B8966A] border border-[#B8966A]/30 px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-5 text-[#B8966A] text-sm font-sans font-medium group-hover:underline">
                  Learn more →
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
