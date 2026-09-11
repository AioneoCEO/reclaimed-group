"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  "Auto Detailing",
  "Pressure Washing",
  "Home Cleaning",
  "Window Washing",
  "Multiple Services",
  "Not Sure Yet",
];

export default function ContactContent() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="pt-16 bg-[#0D0F14] min-h-screen">
      {/* Header */}
      <section className="py-24 border-b border-[#2A2D38]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-[#B8966A] text-xs font-sans font-medium tracking-[0.25em] uppercase">Get in Touch</span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#E8E4DC] mt-4 mb-4">
              Request a Free Quote
            </h1>
            <p className="text-[#9A9590] font-sans text-lg leading-relaxed">
              Fill out the form below and we&apos;ll get back to you within 24 hours. Or call us directly — we prefer talking to real people.
            </p>
            <a
              href="tel:+13347774444"
              className="mt-6 inline-block text-[#B8966A] font-sans text-xl font-semibold hover:text-[#D4AF89] transition-colors"
            >
              (334) 777-4444
            </a>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            {status === "sent" ? (
              <div className="bg-[#141720] border border-[#B8966A]/40 rounded-xl p-10 text-center">
                <div className="text-[#B8966A] text-4xl mb-4">✓</div>
                <h2 className="font-serif text-2xl font-bold text-[#E8E4DC] mb-3">Message Received</h2>
                <p className="text-[#9A9590] font-sans">
                  We&apos;ll get back to you within 24 hours. If it&apos;s urgent, call us directly at{" "}
                  <a href="tel:+13347774444" className="text-[#B8966A]">(334) 777-4444</a>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#141720] border border-[#2A2D38] rounded-xl p-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#9A9590] text-xs font-sans font-medium mb-2 tracking-wide uppercase">First Name *</label>
                    <input
                      name="first_name"
                      type="text"
                      required
                      className="w-full bg-[#1C2030] border border-[#2A2D38] focus:border-[#B8966A] rounded-lg px-4 py-3 text-[#E8E4DC] font-sans text-sm outline-none transition-colors"
                      placeholder="Ray"
                    />
                  </div>
                  <div>
                    <label className="block text-[#9A9590] text-xs font-sans font-medium mb-2 tracking-wide uppercase">Last Name *</label>
                    <input
                      name="last_name"
                      type="text"
                      required
                      className="w-full bg-[#1C2030] border border-[#2A2D38] focus:border-[#B8966A] rounded-lg px-4 py-3 text-[#E8E4DC] font-sans text-sm outline-none transition-colors"
                      placeholder="Compton"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#9A9590] text-xs font-sans font-medium mb-2 tracking-wide uppercase">Email *</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full bg-[#1C2030] border border-[#2A2D38] focus:border-[#B8966A] rounded-lg px-4 py-3 text-[#E8E4DC] font-sans text-sm outline-none transition-colors"
                    placeholder="you@email.com"
                  />
                </div>

                <div>
                  <label className="block text-[#9A9590] text-xs font-sans font-medium mb-2 tracking-wide uppercase">Phone</label>
                  <input
                    name="phone"
                    type="tel"
                    className="w-full bg-[#1C2030] border border-[#2A2D38] focus:border-[#B8966A] rounded-lg px-4 py-3 text-[#E8E4DC] font-sans text-sm outline-none transition-colors"
                    placeholder="(334) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-[#9A9590] text-xs font-sans font-medium mb-2 tracking-wide uppercase">Service Needed *</label>
                  <select
                    name="service"
                    required
                    className="w-full bg-[#1C2030] border border-[#2A2D38] focus:border-[#B8966A] rounded-lg px-4 py-3 text-[#E8E4DC] font-sans text-sm outline-none transition-colors appearance-none"
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[#9A9590] text-xs font-sans font-medium mb-2 tracking-wide uppercase">Tell Us More</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full bg-[#1C2030] border border-[#2A2D38] focus:border-[#B8966A] rounded-lg px-4 py-3 text-[#E8E4DC] font-sans text-sm outline-none transition-colors resize-none"
                    placeholder="Describe your vehicle, property, or what you need. The more detail the better."
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm font-sans">
                    Something went wrong. Please try again or call us at (334) 777-4444.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-[#B8966A] hover:bg-[#D4AF89] disabled:opacity-60 text-[#0D0F14] font-sans font-semibold py-4 rounded-lg transition-colors"
                >
                  {status === "sending" ? "Sending..." : "Send My Request"}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-[#141720] border border-[#2A2D38] rounded-xl p-6">
              <h3 className="font-serif text-lg font-semibold text-[#E8E4DC] mb-4">Contact Info</h3>
              <div className="space-y-3 text-sm font-sans">
                <div>
                  <div className="text-[#B8966A] text-xs uppercase tracking-wider mb-1">Phone</div>
                  <a href="tel:+13347774444" className="text-[#E8E4DC] hover:text-[#B8966A] transition-colors">(334) 777-4444</a>
                </div>
                <div>
                  <div className="text-[#B8966A] text-xs uppercase tracking-wider mb-1">Email</div>
                  <a href="mailto:hello@reclaimedgroup.com" className="text-[#E8E4DC] hover:text-[#B8966A] transition-colors">hello@reclaimedgroup.com</a>
                </div>
                <div>
                  <div className="text-[#B8966A] text-xs uppercase tracking-wider mb-1">Location</div>
                  <span className="text-[#9A9590]">Montgomery, AL 36117</span>
                </div>
              </div>
            </div>

            <div className="bg-[#141720] border border-[#2A2D38] rounded-xl p-6">
              <h3 className="font-serif text-base font-semibold text-[#E8E4DC] mb-3">Hours</h3>
              <div className="space-y-1.5 text-sm font-sans text-[#9A9590]">
                <div className="flex justify-between"><span>Monday – Friday</span><span>8am – 6pm</span></div>
                <div className="flex justify-between"><span>Saturday</span><span>8am – 4pm</span></div>
                <div className="flex justify-between"><span>Sunday</span><span>Closed</span></div>
              </div>
            </div>

            <div className="bg-[#141720] border border-[#2A2D38] rounded-xl p-6">
              <h3 className="font-serif text-base font-semibold text-[#E8E4DC] mb-2">Service Areas</h3>
              <p className="text-[#9A9590] text-sm font-sans leading-relaxed">
                Montgomery, Prattville, Millbrook, Pike Road, Wetumpka, and surrounding River Region communities.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
