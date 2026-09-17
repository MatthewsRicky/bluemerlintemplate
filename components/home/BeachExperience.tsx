import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function BeachExperience() {
  return (
    <section className="relative overflow-hidden bg-[#f6f1e8] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          <Reveal y={35}>
            <div className="max-w-xl">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#b99a62]">
                The setting
              </p>

              <h2 className="mt-5 font-display text-5xl leading-[0.9] tracking-tight text-[#082f49] sm:text-6xl lg:text-7xl">
                Come for the
                <br />
                food. Stay for
                <br />
                the view.
              </h2>

              <p className="mt-8 text-sm leading-8 text-[#1d2529]/65 sm:text-base sm:leading-9">
                Set directly on the shores of Diani Beach, Blue Marlin brings
                together fresh food, sea air and an easy coastal atmosphere.
                Whether it is breakfast, lunch, dinner or drinks by the ocean,
                the setting is part of the experience.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-6 border-t border-[#082f49]/15 pt-7">
                <div>
                  <p className="font-display text-4xl text-[#082f49]">2008</p>
                  <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-[#1d2529]/45">
                    Serving Diani
                  </p>
                </div>

                <div>
                  <p className="font-display text-4xl text-[#082f49]">Ocean</p>
                  <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-[#1d2529]/45">
                    Beachfront setting
                  </p>
                </div>
              </div>

              <Link
                href="/experience"
                className="group mt-10 inline-flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#082f49]"
              >
                <span>Discover the experience</span>
                <span className="h-px w-8 bg-[#b99a62] transition-all duration-500 group-hover:w-14" />
              </Link>
            </div>
          </Reveal>

          <Reveal y={45} delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/images/blue-marlin-beach.jpg"
                alt="Blue Marlin Beach Restaurant overlooking Diani Beach"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#082f49]/25 to-transparent" />

              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/70">
                  Diani Beach · Kenya
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
