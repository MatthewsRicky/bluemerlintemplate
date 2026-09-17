import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { galleryImages } from "@/data/gallery";

export default function GalleryGrid() {
  return (
    <section className="overflow-hidden bg-[#f6f1e8] py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {galleryImages.map((image, index) => {
            const layouts = [
              "lg:col-span-7 lg:row-span-2",
              "lg:col-span-5",
              "lg:col-span-5",
              "lg:col-span-4",
              "lg:col-span-8",
            ];

            return (
              <Reveal
                key={image.id}
                delay={index * 0.06}
                y={30}
                className={layouts[index % layouts.length]}
              >
                <article className="group relative aspect-[4/5] overflow-hidden bg-[#fffdf9] sm:aspect-[5/4] lg:h-full lg:min-h-[320px]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 60vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#082f49]/65 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

                  {image.label && (
                    <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">
                      <p className="text-[9px] uppercase tracking-[0.24em] text-white/80">
                        {image.label}
                      </p>
                    </div>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 border-t border-[#082f49]/15 pt-6">
            <p className="max-w-xl text-xs leading-6 text-[#1d2529]/45">
              A selection of moments from Blue Marlin Beach Restaurant, Diani
              Beach.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
