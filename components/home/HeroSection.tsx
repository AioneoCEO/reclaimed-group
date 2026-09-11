"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D0F14]">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1C2030_0%,_#0D0F14_65%)]" />

      {/* Bronze accent glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#B8966A]/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="inline-block text-[#B8966A] text-xs font-sans font-medium tracking-[0.25em] uppercase border border-[#B8966A]/30 px-4 py-1.5 rounded-full">
            Montgomery, Alabama
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl font-bold text-[#E8E4DC] leading-[1.1] mb-6"
        >
          Your Property.{" "}
          <em className="text-[#B8966A] not-italic">Our Standard.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-[#9A9590] text-lg md:text-xl font-sans leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Auto detailing, pressure washing, home cleaning, and window washing —
          done with the care your property deserves. Serving Montgomery and surrounding areas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="bg-[#B8966A] hover:bg-[#D4AF89] text-[#0D0F14] font-sans font-semibold px-8 py-4 rounded text-base transition-colors"
          >
            Get a Free Quote
          </Link>
          <a
            href="tel:+13347774444"
            className="border border-[#2A2D38] hover:border-[#B8966A] text-[#E8E4DC] hover:text-[#B8966A] font-sans font-medium px-8 py-4 rounded text-base transition-colors"
          >
            Call (334) 777-4444
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { num: "4", label: "Services" },
            { num: "5★", label: "Avg. Rating" },
            { num: "100%", label: "Satisfaction Goal" },
            { num: "MTG", label: "Local & Proud" },
          ].map(({ num, label }) => (
            <div key={label} className="border border-[#2A2D38] rounded-lg p-4 bg-[#141720]/60">
              <div className="font-serif text-2xl font-bold text-[#B8966A]">{num}</div>
              <div className="text-[#9A9590] text-xs font-sans mt-1 tracking-wide">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#9A9590]"
      >
        <span className="text-xs font-sans tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#9A9590] to-transparent"
        />
      </motion.div>
    </section>
  );
}
