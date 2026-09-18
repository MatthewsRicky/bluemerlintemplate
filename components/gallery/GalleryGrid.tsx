import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { galleryImages } from "@/data/gallery";

export default function GalleryGrid() {
  const [feature, firstGrid, secondGrid, thirdGrid, finalFeature] =
    galleryImages;

  return (
    <section className="overflow-hidden bg-[#f6f1e8] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="space-y-24 sm:space-y-32 lg:space-y-40">
          {/* Feature — opening */}
          {feature && (
            <Reveal y={35}>
              <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-end lg:gap-12">
                <figure className="group">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#fffdf9]">
                    <Image
                      src={feature.src}
                      alt={feature.alt}
                      fill
                      priority
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 70vw"
                    />
                  </div>
                </figure>

                <div className="max-w-sm pb-1 lg:pb-5">
                  <p className="text-[9px] uppercase tracking-[0.24em] text-[#b99a62]">
                    {feature.label}
                  </p>

                  <h2 className="mt-5 font-display text-4xl leading-[0.95] text-[#082f49] sm:text-5xl">
                    From the
                    <br />
                    kitchen.
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-[#1d2529]/60">
                    A closer look at the food, ingredients and atmosphere that
                    define the Blue Marlin experience.
                  </p>
                </div>
              </div>
            </Reveal>
          )}

          {/* Symmetrical gallery grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {[firstGrid, secondGrid, thirdGrid]
              .filter(Boolean)
              .map((image, index) => (
                <Reveal key={image.id} delay={index * 0.06} y={25}>
                  <figure className="group">
                    <div className="relative aspect-[4/5] overflow-hidden bg-[#fffdf9]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    {image.label && (
                      <figcaption className="mt-4 border-b border-[#082f49]/10 pb-4 text-[9px] uppercase tracking-[0.22em] text-[#1d2529]/45">
                        {image.label}
                      </figcaption>
                    )}
                  </figure>
                </Reveal>
              ))}
          </div>

          {/* Feature — closing */}
          {finalFeature && (
            <Reveal y={35}>
              <div className="grid gap-8 lg:grid-cols-[0.6fr_1.4fr] lg:items-end lg:gap-12">
                <div className="order-2 max-w-sm lg:order-1 lg:pb-5">
                  <p className="text-[9px] uppercase tracking-[0.24em] text-[#b99a62]">
                    {finalFeature.label}
                  </p>

                  <h2 className="mt-5 font-display text-4xl leading-[0.95] text-[#082f49] sm:text-5xl">
                    Diani
                    <br />
                    Beach.
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-[#1d2529]/60">
                    Food, sea air and the easy rhythm of the Kenyan coast. Take
                    your time and enjoy the setting as much as the meal.
                  </p>
                </div>

                <figure className="order-1 group lg:order-2">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#fffdf9]">
                    <Image
                      src={finalFeature.src}
                      alt={finalFeature.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 70vw"
                    />
                  </div>
                </figure>
              </div>
            </Reveal>
          )}

          {/* Closing line */}
          <Reveal delay={0.1}>
            <div className="border-t border-[#082f49]/15 pt-6">
              <div className="flex flex-col gap-3 text-[9px] uppercase tracking-[0.2em] text-[#1d2529]/40 sm:flex-row sm:items-center sm:justify-between">
                <span>Blue Marlin Beach Restaurant</span>
                <span>Diani Beach · Kenya</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
