import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function ExperienceCTA() {
  return (
    <section className="relative overflow-hidden bg-[#082f49] text-white">
      <div className="relative min-h-[560px]">
        <Image
          src="/images/blue-marlin-beach.jpg"
          alt="Sunset at Blue Marlin Beach Restaurant"
          fill
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-[#082f49]/60" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#082f49]/90 via-[#082f49]/40 to-[#082f49]/50" />

        <div className="relative z-10 flex min-h-[560px] items-center justify-center px-5 py-20 text-center sm:px-8">
          <Reveal y={30} className="max-w-3xl">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#d8c3a5]">
              Your table awaits
            </p>

            <h2 className="mt-5 font-display text-5xl leading-[0.88] tracking-tight sm:text-6xl lg:text-8xl">
              Come experience
              <br />
              Blue Marlin.
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-white/65 sm:text-base">
              Fresh food, ocean air and the unmistakable rhythm of Diani Beach.
            </p>

            <Link
              href="/reservations"
              className="mt-9 inline-flex bg-[#f6f1e8] px-7 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#082f49] transition-colors hover:bg-[#d8c3a5]"
            >
              Book a Table
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
