"use client";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: "✦",
    title: "Craftsmanship First",
    desc: "We don't rush jobs to stack numbers. Every vehicle, surface, and room gets our full attention until it's done right.",
  },
  {
    icon: "◈",
    title: "Locally Owned",
    desc: "We're Montgomery people serving Montgomery families. We care about this community because we live in it.",
  },
  {
    icon: "⬡",
    title: "Honest Pricing",
    desc: "No bait-and-switch. No hidden fees. You get a clear quote before we start, and we stand behind the number.",
  },
  {
    icon: "✝",
    title: "Faith-Driven Values",
    desc: "Our work ethic is shaped by principles that go beyond business. Integrity, respect, and doing right by people.",
  },
];

export default function WhySection() {
  return (
    <section className="bg-[#141720] py-24 border-y border-[#2A2D38]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#B8966A] text-xs font-sans font-medium tracking-[0.25em] uppercase">Why Reclaimed</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#E8E4DC] mt-3 leading-tight">
              The Difference Is in the Details
            </h2>
            <p className="text-[#9A9590] font-sans mt-5 leading-relaxed">
              We started Reclaimed Group because we believed Montgomery deserved a service company that actually took pride in what it did. Not the cheapest — the best.
            </p>
            <p className="text-[#9A9590] font-sans mt-3 leading-relaxed">
              Every job we take on reflects our name. Reclaimed — restored to what it should be.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map(({ icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#1C2030] border border-[#2A2D38] rounded-xl p-5"
              >
                <div className="text-[#B8966A] text-xl mb-3">{icon}</div>
                <h3 className="font-serif text-base font-semibold text-[#E8E4DC] mb-1.5">{title}</h3>
                <p className="text-[#9A9590] text-sm font-sans leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
