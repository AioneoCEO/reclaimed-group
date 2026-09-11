import Link from "next/link";

const services = [
  { href: "/services/auto-detailing", label: "Auto Detailing" },
  { href: "/services/pressure-washing", label: "Pressure Washing" },
  { href: "/services/home-cleaning", label: "Home Cleaning" },
  { href: "/services/window-washing", label: "Window Washing" },
];

const areas = ["Montgomery, AL", "Prattville, AL", "Millbrook, AL", "Pike Road, AL", "Wetumpka, AL"];

export default function Footer() {
  return (
    <footer className="bg-[#141720] border-t border-[#2A2D38] mt-0">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="font-serif text-xl font-bold text-[#E8E4DC]">Reclaimed Group</div>
            <div className="text-[#B8966A] text-xs tracking-[0.18em] uppercase font-sans mt-0.5 mb-4">Montgomery, AL</div>
            <p className="text-[#9A9590] text-sm font-sans leading-relaxed">
              Property and vehicle care done with craftsmanship, integrity, and pride.
            </p>
            <a
              href="tel:+13347774444"
              className="mt-5 inline-block text-[#B8966A] font-sans text-sm hover:text-[#D4AF89] transition-colors"
            >
              (334) 777-4444
            </a>
          </div>

          <div>
            <h4 className="text-[#E8E4DC] font-sans font-semibold text-sm mb-4 tracking-wider uppercase">Services</h4>
            <ul className="space-y-2.5">
              {services.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-[#9A9590] hover:text-[#E8E4DC] text-sm font-sans transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#E8E4DC] font-sans font-semibold text-sm mb-4 tracking-wider uppercase">Service Areas</h4>
            <ul className="space-y-2.5">
              {areas.map((area) => (
                <li key={area} className="text-[#9A9590] text-sm font-sans">{area}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#E8E4DC] font-sans font-semibold text-sm mb-4 tracking-wider uppercase">Company</h4>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-[#9A9590] hover:text-[#E8E4DC] text-sm font-sans transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-[#9A9590] hover:text-[#E8E4DC] text-sm font-sans transition-colors">Contact / Quote</Link></li>
            </ul>
            <div className="mt-6">
              <p className="text-[#9A9590] text-xs font-sans leading-relaxed">
                hello@reclaimedgroup.com
              </p>
              <p className="text-[#9A9590] text-xs font-sans mt-1">Montgomery, AL 36117</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#2A2D38] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#9A9590] text-xs font-sans">
            &copy; {new Date().getFullYear()} Reclaimed Group LLC. All rights reserved.
          </p>
          <p className="text-[#B8966A] text-xs font-sans tracking-[0.1em]">Restored. Refined. Reclaimed.</p>
        </div>
      </div>
    </footer>
  );
}
