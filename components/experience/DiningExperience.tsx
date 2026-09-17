import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function DiningExperience() {
  return (
    <section className="overflow-hidden bg-[#f6f1e8] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="At the table"
            title="From breakfast to dinner."
            description="A menu designed for different moments of the day, from relaxed mornings to evenings beside the ocean."
          />
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          <Reveal y={35}>
            <article className="group">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/blue-marlin-fish.jpg"
                  alt="Seafood dish at Blue Marlin Beach Restaurant"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="pt-6">
                <p className="text-[9px] uppercase tracking-[0.25em] text-[#b99a62]">
                  Morning
                </p>
                <h3 className="mt-3 font-display text-3xl text-[#082f49]">
                  Slow mornings
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#1d2529]/60">
                  Start the day with breakfast and the sound of the ocean close
                  by.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal y={35} delay={0.08}>
            <article className="group md:mt-12">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/blue-marlin-seafood-salad.avif"
                  alt="Fresh seafood salad at Blue Marlin Beach Restaurant"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="pt-6">
                <p className="text-[9px] uppercase tracking-[0.25em] text-[#b99a62]">
                  Afternoon
                </p>
                <h3 className="mt-3 font-display text-3xl text-[#082f49]">
                  Long lunches
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#1d2529]/60">
                  Fresh seafood, chilled drinks and plenty of time to enjoy the
                  beach.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal y={35} delay={0.16}>
            <article className="group">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/blue-marlin-sushi.jpg"
                  alt="Sushi platter at Blue Marlin Beach Restaurant"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="pt-6">
                <p className="text-[9px] uppercase tracking-[0.25em] text-[#b99a62]">
                  Evening
                </p>
                <h3 className="mt-3 font-display text-3xl text-[#082f49]">
                  Dinner by the sea
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#1d2529]/60">
                  Settle in for seafood, sushi and an evening shaped by the
                  Indian Ocean.
                </p>
              </div>
            </article>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-14">
            <Link
              href="/menu"
              className="group inline-flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#082f49]"
            >
              <span>Explore the menu</span>
              <span className="h-px w-8 bg-[#b99a62] transition-all duration-500 group-hover:w-14" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
