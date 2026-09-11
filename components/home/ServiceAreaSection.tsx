"use client";
import { motion } from "framer-motion";

const areas = [
  "Montgomery", "Prattville", "Millbrook",
  "Pike Road", "Wetumpka", "Elmore County",
  "Autauga County", "Surrounding Areas",
];

export default function ServiceAreaSection() {
  return (
    <section className="bg-[#141720] border-y border-[#2A2D38] py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="text-[#B8966A] text-xs font-sans font-medium tracking-[0.25em] uppercase">Where We Work</span>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#E8E4DC] mt-3 mb-4">
          Proudly Serving the River Region
        </h2>
        <p className="text-[#9A9590] font-sans text-sm max-w-xl mx-auto mb-10">
          Based in Montgomery, Alabama — available across the surrounding communities. Not sure if we cover your area? Give us a call.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {areas.map((area, i) => (
            <motion.span
              key={area}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="bg-[#1C2030] border border-[#2A2D38] text-[#E8E4DC] font-sans text-sm px-5 py-2.5 rounded-full"
            >
              {area}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
