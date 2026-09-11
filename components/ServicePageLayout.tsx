"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface Package {
  name: string;
  price: string;
  features: string[];
  highlight?: boolean;
}

interface ServicePageProps {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  packages: Package[];
  includes: string[];
  faqs: { q: string; a: string }[];
}

export default function ServicePageLayout({
  badge, title, subtitle, description, packages, includes, faqs,
}: ServicePageProps) {
  return (
    <div className="pt-16 bg-[#0D0F14] min-h-screen">
      {/* Hero */}
      <section className="py-24 border-b border-[#2A2D38]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block text-[#B8966A] text-xs font-sans font-medium tracking-[0.25em] uppercase border border-[#B8966A]/30 px-4 py-1.5 rounded-full mb-5">
              {badge}
            </span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#E8E4DC] leading-tight mb-4">
              {title}
            </h1>
            <p className="text-[#B8966A] font-serif text-xl italic mb-5">{subtitle}</p>
            <p className="text-[#9A9590] font-sans text-lg leading-relaxed max-w-2xl mx-auto">{description}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#B8966A] hover:bg-[#D4AF89] text-[#0D0F14] font-sans font-semibold px-8 py-4 rounded transition-colors">
                Get a Quote
              </Link>
              <a href="tel:+13347774444" className="border border-[#2A2D38] hover:border-[#B8966A] text-[#E8E4DC] font-sans px-8 py-4 rounded transition-colors">
                Call (334) 777-4444
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#E8E4DC]">Service Packages</h2>
            <p className="text-[#9A9590] font-sans mt-3 text-sm">Choose the level that fits your needs.</p>
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-${Math.min(packages.length, 3)} gap-6`}>
            {packages.map(({ name, price, features, highlight }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-xl p-7 border ${
                  highlight
                    ? "bg-[#1C2030] border-[#B8966A]/60 relative"
                    : "bg-[#141720] border-[#2A2D38]"
                }`}
              >
                {highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#B8966A] text-[#0D0F14] text-xs font-sans font-semibold px-3 py-1 rounded-full">Most Popular</span>
                  </div>
                )}
                <h3 className="font-serif text-xl font-semibold text-[#E8E4DC] mb-1">{name}</h3>
                <div className="text-[#B8966A] font-sans text-2xl font-bold mb-5">{price}</div>
                <ul className="space-y-2.5">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-[#9A9590] font-sans">
                      <span className="text-[#B8966A] mt-0.5 shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-6 block text-center py-2.5 rounded text-sm font-sans font-medium transition-colors ${
                    highlight
                      ? "bg-[#B8966A] hover:bg-[#D4AF89] text-[#0D0F14]"
                      : "border border-[#2A2D38] hover:border-[#B8966A] text-[#E8E4DC]"
                  }`}
                >
                  Book This Package
                </Link>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-[#9A9590] text-xs font-sans mt-6">
            Prices are starting points. Final quotes depend on vehicle/property size and condition.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-[#141720] border-y border-[#2A2D38] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold text-[#E8E4DC] mb-8 text-center">What&apos;s Always Included</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {includes.map((item) => (
              <div key={item} className="flex items-center gap-3 text-[#9A9590] text-sm font-sans">
                <span className="text-[#B8966A]">◆</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold text-[#E8E4DC] mb-10 text-center">Common Questions</h2>
          <div className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border-b border-[#2A2D38] pb-6">
                <h3 className="font-serif text-base font-semibold text-[#E8E4DC] mb-2">{q}</h3>
                <p className="text-[#9A9590] text-sm font-sans leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center border-t border-[#2A2D38]">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold text-[#E8E4DC] mb-4">Ready to Book?</h2>
          <p className="text-[#9A9590] font-sans mb-8">Get a free quote and we&apos;ll get you on the schedule.</p>
          <Link href="/contact" className="bg-[#B8966A] hover:bg-[#D4AF89] text-[#0D0F14] font-sans font-semibold px-10 py-4 rounded transition-colors">
            Request a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
