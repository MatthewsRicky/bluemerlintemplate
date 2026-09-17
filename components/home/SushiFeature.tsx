import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function SushiFeature() {
  return (
    <section className="overflow-hidden bg-[#082f49] text-[#f6f1e8]">
      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-2">
        <Reveal y={40} className="relative min-h-[600px] lg:min-h-[760px]">
          <Image
            src="/images/blue-marlin-sushi.jpg"
            alt="Sushi platter at Blue Marlin Beach Restaurant"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#082f49]/45 to-transparent" />

          <div className="absolute bottom-8 left-6 sm:bottom-10 sm:left-10 lg:bottom-12 lg:left-12">
            <p className="text-[9px] uppercase tracking-[0.28em] text-[#d8c3a5]">
              Sushi Bar
            </p>

            <p className="mt-3 font-display text-3xl sm:text-4xl">
              Fresh from the sea.
            </p>
          </div>
        </Reveal>

        <div className="flex items-center px-6 py-20 sm:px-10 sm:py-24 lg:px-20 lg:py-28">
          <Reveal y={30} className="max-w-xl">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#b99a62]">
              The Sushi Bar
            </p>

            <h2 className="mt-5 font-display text-5xl leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl">
              A different
              <br />
              side of the ocean.
            </h2>

            <p className="mt-8 text-sm leading-8 text-white/65 sm:text-base sm:leading-9">
              From carefully prepared rolls to sashimi and chef's selections,
              Blue Marlin brings a fresh sushi experience to the shores of Diani
              Beach.
            </p>

            <div className="mt-10 border-t border-white/15 pt-7">
              <div className="flex flex-wrap gap-x-8 gap-y-3 text-[9px] uppercase tracking-[0.2em] text-white/45">
                <span>Sushi Rolls</span>
                <span>Sashimi</span>
                <span>Nigiri</span>
                <span>Chef's Specials</span>
              </div>
            </div>

            <Link
              href="/menu#sushi"
              className="group mt-10 inline-flex items-center gap-4 border border-[#d8c3a5] px-6 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#f6f1e8] transition-colors hover:bg-[#d8c3a5] hover:text-[#082f49]"
            >
              <span>Explore Sushi</span>
              <span className="h-px w-7 bg-[#d8c3a5] transition-all duration-500 group-hover:w-12 group-hover:bg-[#082f49]" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
