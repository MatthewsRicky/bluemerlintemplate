import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function AboutHero() {
  return (
    <section className="relative min-h-[75svh] overflow-hidden bg-[#082f49] text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/blue-marlin-story.jpg"
          alt="Blue Marlin Beach Restaurant in Diani Beach"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 bg-[#082f49]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#082f49]/90 via-[#082f49]/25 to-[#082f49]/35" />

      <div className="relative z-10 flex min-h-[75svh] items-end">
        <div className="mx-auto w-full max-w-[1600px] px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
          <div className="max-w-5xl">
            <Reveal y={20}>
              <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-[#d8c3a5] sm:text-xs">
                Our Story · Since 2008
              </p>
            </Reveal>

            <Reveal delay={0.1} y={30}>
              <h1 className="mt-5 max-w-4xl font-display text-6xl leading-[0.82] tracking-[-0.035em] sm:text-8xl lg:text-[9rem]">
                Rooted in
                <br />
                Diani.
              </h1>
            </Reveal>

            <Reveal delay={0.2} y={20}>
              <p className="mt-8 max-w-xl text-sm leading-8 text-white/70 sm:text-base sm:leading-9">
                A beachfront restaurant shaped by the sea, the people and the
                flavours of the Kenyan coast.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
