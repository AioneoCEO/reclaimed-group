"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const values = [
  {
    icon: "✦",
    title: "Craftsmanship",
    desc: "We take our time. The work is done right or it's not done — and we won't put our name on something we're not proud of.",
  },
  {
    icon: "◈",
    title: "Integrity",
    desc: "Honest quotes, no hidden fees, and straight communication. We treat your home and vehicle the way we'd treat our own.",
  },
  {
    icon: "✝",
    title: "Faith Over Shortcuts",
    desc: "Our values come from a faith that demands we treat every job — and every person — with care, dignity, and purpose.",
  },
  {
    icon: "⬡",
    title: "Community",
    desc: "Montgomery is home. We're not here to take money out of this community — we're here to build something in it.",
  },
];

export default function AboutContent() {
  return (
    <div className="pt-16 bg-[#0D0F14] min-h-screen">
      {/* Hero */}
      <section className="py-28 border-b border-[#2A2D38]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-[#B8966A] text-xs font-sans font-medium tracking-[0.25em] uppercase">Our Story</span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#E8E4DC] mt-4 mb-6 leading-tight">
              Built in Montgomery.<br />Built to Last.
            </h1>
            <p className="text-[#9A9590] font-sans text-lg leading-relaxed max-w-2xl mx-auto">
              Reclaimed Group started with a simple conviction: the people of Montgomery deserve a service company that actually takes pride in what it does.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-[#9A9590] font-sans text-base leading-relaxed"
          >
            <p>
              We didn&apos;t start Reclaimed Group because we saw a market gap. We started it because we believed in doing things right — and we saw too many people getting okay service when they deserved great service.
            </p>
            <p>
              The name says everything. <em className="text-[#E8E4DC]">Reclaimed</em> — taken back from neglect, from wear, from &ldquo;good enough.&rdquo; Restored to what it should be. That&apos;s what we do to your car, your driveway, your home, your windows. And it&apos;s what we want to do for the standard of service in this city.
            </p>
            <p>
              We&apos;re a locally owned company operating out of Montgomery, Alabama. Every person on our team lives here, works here, and cares about this community. When you hire us, you&apos;re not funding a corporate cleaning chain — you&apos;re investing in people who will show up for you again and again.
            </p>
            <p>
              Our work is shaped by faith — not in a preachy way, but in the practical sense. Faith that demands integrity. That demands we treat your property the way we&apos;d want ours treated. That doesn&apos;t allow us to cut corners when you&apos;re not looking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#141720] border-y border-[#2A2D38] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#E8E4DC]">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#1C2030] border border-[#2A2D38] rounded-xl p-6"
              >
                <div className="text-[#B8966A] text-2xl mb-4">{icon}</div>
                <h3 className="font-serif text-lg font-semibold text-[#E8E4DC] mb-2">{title}</h3>
                <p className="text-[#9A9590] text-sm font-sans leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community note */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="w-12 h-0.5 bg-[#B8966A] mx-auto mb-8" />
          <blockquote className="font-serif text-2xl md:text-3xl text-[#E8E4DC] italic leading-relaxed mb-6">
            &ldquo;We&apos;re not just building a business. We&apos;re building something that gives back to the community that holds us.&rdquo;
          </blockquote>
          <p className="text-[#9A9590] text-sm font-sans">
            Reclaimed Group is committed to community involvement and giving back to Montgomery — because that&apos;s what it means to be local.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-[#2A2D38] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold text-[#E8E4DC] mb-4">Work With Us</h2>
          <p className="text-[#9A9590] font-sans mb-8">Ready to experience the Reclaimed standard? Get in touch.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#B8966A] hover:bg-[#D4AF89] text-[#0D0F14] font-sans font-semibold px-8 py-4 rounded transition-colors">
              Get a Free Quote
            </Link>
            <Link href="/services/auto-detailing" className="border border-[#2A2D38] hover:border-[#B8966A] text-[#E8E4DC] font-sans px-8 py-4 rounded transition-colors">
              See Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
