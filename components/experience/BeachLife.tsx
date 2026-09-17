import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function BeachLife() {
  return (
    <section className="overflow-hidden bg-[#fffdf9]">
      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-2">
        <div className="order-2 flex items-center px-6 py-20 sm:px-10 sm:py-24 lg:order-1 lg:px-20 lg:py-28">
          <Reveal y={35} className="max-w-xl">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#b99a62]">
              By the water
            </p>

            <h2 className="mt-5 font-display text-5xl leading-[0.9] tracking-tight text-[#082f49] sm:text-6xl lg:text-7xl">
              The beach is
              <br />
              part of the table.
            </h2>

            <p className="mt-8 text-sm leading-8 text-[#1d2529]/65 sm:text-base sm:leading-9">
              Blue Marlin sits directly beside the Indian Ocean, making the
              coastline an essential part of the experience. Come for the food,
              linger for the breeze and let the afternoon unfold.
            </p>

            <div className="mt-10 border-t border-[#082f49]/15 pt-7">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="font-display text-3xl text-[#082f49]">Diani</p>
                  <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-[#1d2529]/45">
                    South Coast
                  </p>
                </div>

                <div>
                  <p className="font-display text-3xl text-[#082f49]">
                    Indian Ocean
                  </p>
                  <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-[#1d2529]/45">
                    Beachfront
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="group mt-10 inline-flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#082f49]"
            >
              <span>Find us</span>
              <span className="h-px w-8 bg-[#b99a62] transition-all duration-500 group-hover:w-14" />
            </Link>
          </Reveal>
        </div>

        <Reveal
          y={40}
          className="relative order-1 min-h-[600px] lg:order-2 lg:min-h-[760px]"
        >
          <Image
            src="/images/blue-marlin-beach.jpg"
            alt="Diani Beach beside Blue Marlin Beach Restaurant"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#082f49]/25 to-transparent" />

          <div className="absolute bottom-8 left-6 sm:bottom-10 sm:left-10 lg:bottom-12 lg:left-12">
            <p className="text-[9px] uppercase tracking-[0.28em] text-white/75">
              Diani Beach · Kenya
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
