import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function ReservationCTA() {
  return (
    <section className="relative overflow-hidden bg-[#082f49] text-white">
      <div className="relative min-h-[620px]">
        <Image
          src="/images/blue-marlin-beach.jpg"
          alt="Blue Marlin Beach Restaurant overlooking the Indian Ocean"
          fill
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-[#082f49]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#082f49]/85 via-[#082f49]/35 to-[#082f49]/45" />

        <div className="relative z-10 flex min-h-[620px] items-center justify-center px-5 py-24 text-center sm:px-8">
          <Reveal y={30} className="max-w-3xl">
            <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-[#d8c3a5]">
              Your table by the ocean
            </p>

            <h2 className="mt-6 font-display text-6xl leading-[0.85] tracking-tight sm:text-7xl lg:text-8xl">
              Make a meal
              <br />
              of the moment.
            </h2>

            <p className="mx-auto mt-8 max-w-xl text-sm leading-8 text-white/70 sm:text-base sm:leading-9">
              Join us at Blue Marlin Beach Restaurant for fresh seafood, sushi
              and relaxed dining on Diani Beach.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/reservations"
                className="bg-[#f6f1e8] px-7 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#082f49] transition-colors hover:bg-[#d8c3a5]"
              >
                Book a Table
              </Link>

              <Link
                href="/contact"
                className="border border-white/50 bg-white/5 px-7 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-colors hover:border-[#d8c3a5] hover:bg-[#d8c3a5] hover:text-[#082f49]"
              >
                Find Us
              </Link>
            </div>

            <div className="mx-auto mt-12 flex max-w-xl flex-col items-center gap-3 border-t border-white/15 pt-6 text-[9px] uppercase tracking-[0.2em] text-white/45 sm:flex-row sm:justify-center sm:gap-8">
              <span>Diani Beach Road</span>
              <span className="hidden h-1 w-1 rounded-full bg-[#b99a62] sm:block" />
              <span>+254 712 559117</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
