import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function StoryPreview() {
  return (
    <section
      id="discover"
      className="overflow-hidden bg-[#f6f1e8] py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        {/* Intro */}
        <Reveal>
          <div className="mb-16 grid gap-8 lg:mb-24 lg:grid-cols-[1fr_2fr] lg:items-end">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#b99a62]">
                Since 2008
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl font-display text-5xl leading-[0.9] tracking-tight text-[#082f49] sm:text-6xl lg:text-8xl">
                A taste of Diani,
                <br />
                served by the sea.
              </h2>
            </div>
          </div>
        </Reveal>

        {/* Editorial layout */}
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          {/* Image */}
          <Reveal y={40}>
            <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/images/blue-marlin-story.jpg"
                alt="Blue Marlin Beach Restaurant by the ocean in Diani Beach"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#082f49]/20 to-transparent" />
            </div>
          </Reveal>

          {/* Copy */}
          <Reveal delay={0.12} y={40}>
            <div className="flex h-full flex-col justify-between lg:py-6">
              <div className="max-w-lg">
                <p className="text-base leading-8 text-[#1d2529]/70 sm:text-lg sm:leading-9">
                  Since 2008, Blue Marlin has been welcoming guests to the
                  shores of Diani Beach for fresh seafood, sushi and relaxed
                  dining beside the Indian Ocean.
                </p>

                <p className="mt-6 text-base leading-8 text-[#1d2529]/70 sm:text-lg sm:leading-9">
                  From long lunches in the sea breeze to evenings shared over
                  dinner, the experience is rooted in the setting that makes
                  Diani special.
                </p>
              </div>

              <div className="mt-12">
                <div className="mb-8 h-px w-full bg-[#082f49]/15" />

                <div className="flex items-end justify-between gap-6">
                  <div>
                    <p className="font-display text-5xl leading-none text-[#082f49] sm:text-6xl">
                      2008
                    </p>

                    <p className="mt-2 text-[9px] uppercase tracking-[0.24em] text-[#1d2529]/45">
                      Our beginning
                    </p>
                  </div>

                  <Link
                    href="/about"
                    className="group inline-flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#082f49]"
                  >
                    <span>Our Story</span>

                    <span className="h-px w-8 bg-[#b99a62] transition-all duration-500 group-hover:w-14" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
