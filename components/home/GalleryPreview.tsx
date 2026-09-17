import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { galleryImages } from "@/data/gallery";

export default function GalleryPreview() {
  return (
    <section className="overflow-hidden bg-[#fffdf9] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <Reveal>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="A glimpse"
              title="The Blue Marlin experience."
              description="A few moments from the table, the kitchen and the beach."
            />

            <Link
              href="/gallery"
              className="group inline-flex w-fit items-center gap-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#082f49]"
            >
              <span>View gallery</span>
              <span className="h-px w-8 bg-[#b99a62] transition-all duration-500 group-hover:w-14" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-16 grid auto-rows-[220px] grid-cols-2 gap-3 sm:auto-rows-[260px] sm:gap-4 lg:grid-cols-4 lg:auto-rows-[220px]">
          {galleryImages.map((image, index) => (
            <Reveal
              key={image.id}
              delay={index * 0.06}
              y={30}
              className={image.className}
            >
              <Link
                href="/gallery"
                className="group relative block h-full overflow-hidden bg-[#f6f1e8]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 50vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#082f49]/55 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                {image.label && (
                  <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5">
                    <p className="text-[9px] uppercase tracking-[0.22em] text-white/80">
                      {image.label}
                    </p>
                  </div>
                )}
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
