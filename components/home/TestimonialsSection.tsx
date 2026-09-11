"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Marcus T.",
    location: "Montgomery, AL",
    text: "Got my truck detailed before a road trip. These guys were thorough — inside and out. Looked showroom fresh. Will be a repeat customer.",
    stars: 5,
  },
  {
    name: "Denise W.",
    location: "Prattville, AL",
    text: "They pressure washed my driveway and back patio. I was amazed at the difference. Responsive, on time, and priced fairly.",
    stars: 5,
  },
  {
    name: "James H.",
    location: "Pike Road, AL",
    text: "Had the windows done inside and out. No streaks, no residue — just clean glass. Super professional and easy to book.",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#B8966A]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-[#0D0F14] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-[#B8966A] text-xs font-sans font-medium tracking-[0.25em] uppercase">Reviews</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#E8E4DC] mt-3">
            What Montgomery Is Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ name, location, text, stars }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-[#141720] border border-[#2A2D38] rounded-xl p-7"
            >
              <Stars count={stars} />
              <p className="text-[#9A9590] text-sm font-sans leading-relaxed mt-4 mb-5 italic">
                &ldquo;{text}&rdquo;
              </p>
              <div>
                <div className="text-[#E8E4DC] font-sans font-semibold text-sm">{name}</div>
                <div className="text-[#9A9590] font-sans text-xs mt-0.5">{location}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-[#9A9590] text-sm font-sans">
            More reviews coming soon — we&apos;re just getting started.
          </p>
        </div>
      </div>
    </section>
  );
}
