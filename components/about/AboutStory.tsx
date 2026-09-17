import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function AboutStory() {
  return (
    <section className="overflow-hidden bg-[#f6f1e8] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-24">
          <Reveal y={40}>
            <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/images/blue-marlin-beach.jpg"
                alt="The beach beside Blue Marlin Beach Restaurant"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} y={35}>
            <div className="max-w-2xl">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#b99a62]">
                A little about us
              </p>

              <h2 className="mt-5 font-display text-5xl leading-[0.9] tracking-tight text-[#082f49] sm:text-6xl lg:text-7xl">
                Where the
                <br />
                ocean meets
                <br />
                the table.
              </h2>

              <div className="mt-9 space-y-6 text-sm leading-8 text-[#1d2529]/65 sm:text-base sm:leading-9">
                <p>
                  Since 2008, Blue Marlin has been part of the Diani Beach
                  coastline, welcoming guests to enjoy food, conversation and
                  the rhythm of the Indian Ocean.
                </p>

                <p>
                  Our approach is relaxed and rooted in the setting around us.
                  Fresh seafood, sushi and coastal flavours come together in a
                  space where the beach is never far from the table.
                </p>

                <p>
                  Whether joining us for breakfast, a long lunch, dinner or
                  drinks by the ocean, the experience is about taking your time
                  and enjoying the moment.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-8 border-t border-[#082f49]/15 pt-7 sm:grid-cols-3">
                <div>
                  <p className="font-display text-4xl text-[#082f49] sm:text-5xl">
                    2008
                  </p>
                  <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-[#1d2529]/45">
                    Established
                  </p>
                </div>

                <div>
                  <p className="font-display text-4xl text-[#082f49] sm:text-5xl">
                    Diani
                  </p>
                  <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-[#1d2529]/45">
                    Kenya
                  </p>
                </div>

                <div className="hidden sm:block">
                  <p className="font-display text-4xl text-[#082f49] sm:text-5xl">
                    Ocean
                  </p>
                  <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-[#1d2529]/45">
                    Beachfront
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
