"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/services/auto-detailing", label: "Auto Detailing" },
  { href: "/services/pressure-washing", label: "Pressure Washing" },
  { href: "/services/home-cleaning", label: "Home Cleaning" },
  { href: "/services/window-washing", label: "Window Washing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0D0F14]/95 backdrop-blur-md border-b border-[#2A2D38]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-serif text-lg font-bold text-[#E8E4DC] tracking-wide">Reclaimed</span>
          <span className="text-[#B8966A] text-[0.65rem] tracking-[0.18em] uppercase font-sans font-medium">Group</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-sans transition-colors duration-200 ${
                pathname === href
                  ? "text-[#B8966A]"
                  : "text-[#9A9590] hover:text-[#E8E4DC]"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+13347774444"
            className="text-sm text-[#9A9590] hover:text-[#E8E4DC] transition-colors font-sans"
          >
            (334) 777-4444
          </a>
          <Link
            href="/contact"
            className="bg-[#B8966A] hover:bg-[#D4AF89] text-[#0D0F14] text-sm font-sans font-semibold px-5 py-2 rounded transition-colors"
          >
            Get a Quote
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`block w-6 h-0.5 bg-[#E8E4DC] transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#E8E4DC] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#E8E4DC] transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#141720] border-b border-[#2A2D38] px-6 py-6 flex flex-col gap-4"
          >
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-base font-sans py-1 border-b border-[#2A2D38] last:border-0 ${
                  pathname === href ? "text-[#B8966A]" : "text-[#E8E4DC]"
                }`}
              >
                {label}
              </Link>
            ))}
            <a
              href="tel:+13347774444"
              className="mt-2 text-center bg-[#B8966A] text-[#0D0F14] font-semibold py-3 rounded font-sans"
            >
              Call (334) 777-4444
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
