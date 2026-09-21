import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const HOTEL_URL = "https://bluemerlinhoteltemplate.vercel.app/";

const stayHighlights = [
  {
    title: "Rooms & Suites",
    description:
      "Choose from comfortable sea-view rooms and spacious suites designed for couples, families and longer coastal stays.",
    image: "/images/stay/beach-suite.avif",
  },
  {
    title: "Life by the Sea",
    description:
      "Wake up close to Diani Beach and spend your days swimming, walking, exploring or simply enjoying the Indian Ocean.",
    image: "/images/stay/family-suite.avif",
  },
  {
    title: "More to Explore",
    description:
      "Combine your stay with water adventures, coastal excursions, wellness and relaxed beachfront dining.",
    image: "/images/stay/sea-view-superior.avif",
  },
];

export default function StayExperience() {
  return (
    <section className="bg-[#f6f1e8] py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#b99a62]">
                Beyond dinner
              </p>

              <h2 className="mt-4 max-w-xl font-display text-5xl leading-[0.92] tracking-tight text-[#082f49] sm:text-6xl lg:text-7xl">
                Wake up where the coast begins.
              </h2>
            </div>

            <div className="max-w-xl lg:pt-8">
              <p className="text-base leading-8 text-[#1d2529]/65">
                Blue Marlin is more than a place to dine. If you are planning a
                longer escape in Diani, the Blue Marlin Beach Hotel offers a
                relaxed beachfront base from which to enjoy the coast.
              </p>

              <p className="mt-5 text-base leading-8 text-[#1d2529]/65">
                Explore the rooms, discover the experiences and make your
                restaurant visit part of a complete South Coast stay.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-3 lg:mt-24">
          {stayHighlights.map((highlight, index) => (
            <Reveal key={highlight.title} delay={index * 0.08}>
              <article className="group">
                <Link
                  href={HOTEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#d8c3a5]">
                    <Image
                      src={highlight.image}
                      alt={highlight.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  <div className="pt-6">
                    <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#b99a62]">
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="mt-3 font-display text-3xl text-[#082f49]">
                      {highlight.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#1d2529]/60">
                      {highlight.description}
                    </p>

                    <span className="mt-5 inline-flex items-center text-[10px] font-medium uppercase tracking-[0.2em] text-[#082f49] transition-colors group-hover:text-[#b99a62]">
                      Explore the hotel
                      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
