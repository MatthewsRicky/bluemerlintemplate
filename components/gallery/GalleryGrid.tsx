import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { galleryImages } from "@/data/gallery";

export default function GalleryGrid() {
  const [feature, second, third, fourth, fifth] = galleryImages;

  return (
    <section className="overflow-hidden bg-[#f6f1e8] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="space-y-20 sm:space-y-28 lg:space-y-36">
          {/* Feature */}
          {feature && (
            <Reveal y={40}>
              <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr] lg:items-end lg:gap-10">
                <figure className="group relative aspect-[4/3] overflow-hidden bg-[#fffdf9] lg:aspect-[16/10]">
                  <Image
                    src={feature.src}
                    alt={feature.alt}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 70vw"
                  />
                </figure>

                <div className="max-w-xs pb-2 lg:pb-8">
                  <p className="text-[9px] uppercase tracking-[0.24em] text-[#b99a62]">
                    {feature.label}
                  </p>

                  <p className="mt-4 font-display text-3xl leading-none text-[#082f49] sm:text-4xl">
                    From the kitchen
                  </p>

                  <p className="mt-4 text-xs leading-6 text-[#1d2529]/50">
                    A closer look at the food and atmosphere that define the
                    Blue Marlin experience.
                  </p>
                </div>
              </div>
            </Reveal>
          )}

          {/* Offset pair */}
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-16">
            {second && (
              <Reveal y={35} className="lg:col-span-5 lg:col-start-2">
                <figure className="group relative aspect-[4/5] overflow-hidden bg-[#fffdf9]">
                  <Image
                    src={second.src}
                    alt={second.alt}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                </figure>

                <p className="mt-4 text-[9px] uppercase tracking-[0.24em] text-[#1d2529]/40">
                  {second.label}
                </p>
              </Reveal>
            )}

            {third && (
              <Reveal
                y={45}
                delay={0.1}
                className="lg:col-span-6 lg:col-start-7 lg:mt-28"
              >
                <figure className="group relative aspect-[5/4] overflow-hidden bg-[#fffdf9]">
                  <Image
                    src={third.src}
                    alt={third.alt}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </figure>

                <p className="mt-4 text-[9px] uppercase tracking-[0.24em] text-[#1d2529]/40">
                  {third.label}
                </p>
              </Reveal>
            )}
          </div>

          {/* Full-width breathing space */}
          {fourth && (
            <Reveal y={40}>
              <div className="grid lg:grid-cols-[0.3fr_1fr_0.3fr]">
                <div />

                <figure className="group relative aspect-[16/8] overflow-hidden bg-[#fffdf9]">
                  <Image
                    src={fourth.src}
                    alt={fourth.alt}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 70vw"
                  />
                </figure>

                <div />
              </div>

              <p className="mx-auto mt-4 max-w-[70%] text-[9px] uppercase tracking-[0.24em] text-[#1d2529]/40 lg:max-w-[40%]">
                {fourth.label}
              </p>
            </Reveal>
          )}

          {/* Final image */}
          {fifth && (
            <Reveal y={40}>
              <div className="grid lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <figure className="group relative aspect-[5/4] overflow-hidden bg-[#fffdf9]">
                    <Image
                      src={fifth.src}
                      alt={fifth.alt}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                  </figure>
                </div>

                <div className="flex items-end px-0 py-8 lg:col-span-4 lg:col-start-9 lg:pb-5">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.24em] text-[#b99a62]">
                      {fifth.label}
                    </p>

                    <p className="mt-4 font-display text-3xl leading-none text-[#082f49] sm:text-4xl">
                      Diani Beach.
                    </p>

                    <p className="mt-4 max-w-xs text-xs leading-6 text-[#1d2529]/50">
                      Food, sea air and the easy rhythm of the Kenyan coast.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          )}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-24 border-t border-[#082f49]/15 pt-6 sm:mt-32">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[9px] uppercase tracking-[0.2em] text-[#1d2529]/40">
                Blue Marlin Beach Restaurant
              </p>

              <p className="text-[9px] uppercase tracking-[0.2em] text-[#1d2529]/40">
                Diani Beach · Kenya
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
