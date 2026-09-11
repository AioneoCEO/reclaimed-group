"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="bg-[#0D0F14] py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-12 h-0.5 bg-[#B8966A] mx-auto mb-8" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#E8E4DC] leading-tight">
            Ready to Get Started?
          </h2>
          <p className="text-[#9A9590] font-sans mt-5 leading-relaxed text-lg">
            Request a free quote online or call us directly. We respond fast and are happy to walk you through your options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="/contact"
              className="bg-[#B8966A] hover:bg-[#D4AF89] text-[#0D0F14] font-sans font-semibold px-10 py-4 rounded text-base transition-colors"
            >
              Request a Free Quote
            </Link>
            <a
              href="tel:+13347774444"
              className="border border-[#2A2D38] hover:border-[#B8966A] text-[#E8E4DC] font-sans font-medium px-10 py-4 rounded text-base transition-colors"
            >
              (334) 777-4444
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
