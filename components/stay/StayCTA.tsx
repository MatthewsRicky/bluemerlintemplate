import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const HOTEL_URL = "https://bluemerlinhoteltemplate.vercel.app/";

export default function StayCTA() {
  return (
    <section className="bg-[#082f49] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#b99a62]">
            Your Diani escape
          </p>

          <h2 className="mt-5 font-display text-5xl leading-[0.9] tracking-tight text-[#fffdf9] sm:text-6xl lg:text-8xl">
            Stay a little longer.
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#fffdf9]/65 sm:text-base">
            Turn dinner by the ocean into a complete coastal escape. Discover
            Blue Marlin Beach Hotel and find your place to stay in Diani.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href={HOTEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#f6f1e8] px-7 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#082f49] transition-colors hover:bg-[#d8c3a5]"
            >
              Visit the Hotel
            </Link>

            <Link
              href="/"
              className="border border-[#fffdf9]/20 px-7 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#fffdf9] transition-colors hover:border-[#fffdf9]/40 hover:bg-[#fffdf9]/10"
            >
              Back to Restaurant
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
