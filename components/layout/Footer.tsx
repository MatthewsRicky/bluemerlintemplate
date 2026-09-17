import Link from "next/link";
import { navigationItems } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-[#082f49] text-[#f6f1e8]">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-4xl sm:text-5xl">Blue Marlin</p>

            <p className="mt-2 text-[10px] uppercase tracking-[0.28em] text-white/50">
              Beach Restaurant
            </p>

            <p className="mt-7 max-w-sm text-sm leading-7 text-white/65">
              Beachfront dining, fresh seafood and relaxed coastal experiences
              in Diani Beach, Kenya.
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#d8c3a5]">
              Explore
            </p>

            <div className="mt-5 flex flex-col gap-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit text-sm text-white/65 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#d8c3a5]">
              Visit
            </p>

            <div className="mt-5 space-y-3 text-sm leading-6 text-white/65">
              <p>
                Diani Beach Road
                <br />
                Diani Beach, Kenya
              </p>

              <a
                href="tel:+254712559117"
                className="block transition-colors hover:text-white"
              >
                +254 712 559117
              </a>

              <a
                href="mailto:reservations@bluemarlinbeachhotel.com"
                className="block break-words transition-colors hover:text-white"
              >
                reservations@bluemarlinbeachhotel.com
              </a>
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#d8c3a5]">
              Reservations
            </p>

            <p className="mt-5 text-sm leading-7 text-white/65">
              Planning a meal by the Indian Ocean?
            </p>

            <Link
              href="/reservations"
              className="mt-6 inline-flex border border-[#d8c3a5] px-5 py-3 text-[10px] uppercase tracking-[0.2em] transition-colors hover:bg-[#d8c3a5] hover:text-[#082f49]"
            >
              Book a Table
            </Link>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-6">
          <p className="text-[10px] uppercase tracking-[0.16em] text-white/35">
            © {new Date().getFullYear()} Blue Marlin Beach Restaurant
          </p>
        </div>
      </div>
    </footer>
  );
}
