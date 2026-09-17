import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function ReservationDetails() {
  return (
    <section className="overflow-hidden bg-[#f6f1e8] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <Reveal y={30}>
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#b99a62]">
                Make a reservation
              </p>

              <h2 className="mt-5 font-display text-5xl leading-[0.9] text-[#082f49] sm:text-6xl">
                Let's save
                <br />
                you a seat.
              </h2>

              <p className="mt-7 max-w-md text-sm leading-8 text-[#1d2529]/60 sm:text-base sm:leading-9">
                For table reservations, special occasions or larger groups,
                contact our team and we'll be happy to assist.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} y={30}>
            <div className="border-t border-[#082f49]/15">
              <div className="flex flex-col gap-8 border-b border-[#082f49]/15 py-8 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.25em] text-[#b99a62]">
                    Call us
                  </p>
                  <p className="mt-3 font-display text-3xl text-[#082f49]">
                    +254 712 559117
                  </p>
                </div>

                <a
                  href="tel:+254712559117"
                  className="inline-flex w-fit border border-[#082f49] px-5 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#082f49] transition-colors hover:bg-[#082f49] hover:text-[#f6f1e8]"
                >
                  Call restaurant
                </a>
              </div>

              <div className="flex flex-col gap-8 border-b border-[#082f49]/15 py-8 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.25em] text-[#b99a62]">
                    Email
                  </p>
                  <p className="mt-3 break-all font-display text-2xl text-[#082f49] sm:text-3xl">
                    reservations@bluemarlinbeachhotel.com
                  </p>
                </div>

                <a
                  href="mailto:reservations@bluemarlinbeachhotel.com"
                  className="inline-flex w-fit shrink-0 border border-[#082f49] px-5 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#082f49] transition-colors hover:bg-[#082f49] hover:text-[#f6f1e8]"
                >
                  Send email
                </a>
              </div>

              <div className="py-8">
                <p className="text-[9px] uppercase tracking-[0.25em] text-[#b99a62]">
                  Location
                </p>

                <p className="mt-3 font-display text-3xl text-[#082f49]">
                  Diani Beach Road
                </p>

                <p className="mt-2 text-sm text-[#1d2529]/50">
                  Diani Beach, Kenya
                </p>

                <Link
                  href="/contact"
                  className="group mt-6 inline-flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#082f49]"
                >
                  <span>Find us</span>
                  <span className="h-px w-8 bg-[#b99a62] transition-all duration-500 group-hover:w-14" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
