import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const HOTEL_URL = "https://bluemerlinhoteltemplate.vercel.app/";

export default function StayHero() {
  return (
    <section className="relative min-h-[78vh] overflow-hidden bg-[#082f49]">
      <div className="absolute inset-0">
        <Image
          src="/images/stay/rooms-hero.avif"
          alt="Blue Marlin Beach Hotel beside the Indian Ocean in Diani Beach"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#082f49]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#082f49]/85 via-[#082f49]/20 to-transparent" />
      </div>

      <div className="relative z-10 flex min-h-[78vh] items-end">
        <div className="mx-auto w-full max-w-[1400px] px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
          <Reveal>
            <div className="max-w-3xl">
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-[#d8c3a5]">
                Stay at Blue Marlin
              </p>

              <h1 className="font-display text-6xl leading-[0.88] tracking-tight text-[#fffdf9] sm:text-7xl lg:text-9xl">
                Stay by the
                <br />
                Indian Ocean.
              </h1>

              <p className="mt-7 max-w-xl text-sm leading-7 text-[#fffdf9]/75 sm:text-base">
                Make your Blue Marlin experience last a little longer with a
                beachfront stay at our hotel in Diani Beach.
              </p>

              <div className="mt-9">
                <Link
                  href={HOTEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#f6f1e8] px-7 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#082f49] transition-colors hover:bg-[#d8c3a5]"
                >
                  Explore the Hotel
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
