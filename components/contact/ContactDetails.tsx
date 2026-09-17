import Reveal from "@/components/ui/Reveal";

export default function ContactDetails() {
  return (
    <section className="overflow-hidden bg-[#f6f1e8] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <Reveal y={30}>
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#b99a62]">
                Get in touch
              </p>

              <h2 className="mt-5 font-display text-5xl leading-[0.9] text-[#082f49] sm:text-6xl lg:text-7xl">
                We'd love
                <br />
                to hear
                <br />
                from you.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1} y={30}>
            <div className="border-t border-[#082f49]/15">
              <div className="grid gap-10 border-b border-[#082f49]/15 py-9 sm:grid-cols-2">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.25em] text-[#b99a62]">
                    Address
                  </p>

                  <p className="mt-4 text-sm leading-7 text-[#1d2529]/65">
                    Diani Beach Road
                    <br />
                    Diani Beach, Kenya
                  </p>
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.25em] text-[#b99a62]">
                    Phone
                  </p>

                  <a
                    href="tel:+254712559117"
                    className="mt-4 block font-display text-2xl text-[#082f49] transition-opacity hover:opacity-60"
                  >
                    +254 712 559117
                  </a>
                </div>
              </div>

              <div className="grid gap-10 border-b border-[#082f49]/15 py-9 sm:grid-cols-2">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.25em] text-[#b99a62]">
                    Reservations
                  </p>

                  <a
                    href="mailto:reservations@bluemarlinbeachhotel.com"
                    className="mt-4 block break-all text-sm leading-7 text-[#082f49] transition-opacity hover:opacity-60"
                  >
                    reservations@bluemarlinbeachhotel.com
                  </a>
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.25em] text-[#b99a62]">
                    Hours
                  </p>

                  <p className="mt-4 text-sm leading-7 text-[#1d2529]/65">
                    Please contact the restaurant
                    <br />
                    for current opening hours.
                  </p>
                </div>
              </div>

              <div className="py-9">
                <p className="text-[9px] uppercase tracking-[0.25em] text-[#b99a62]">
                  Enquiries
                </p>

                <p className="mt-4 max-w-xl text-sm leading-7 text-[#1d2529]/60">
                  For general enquiries, special occasions, group bookings or
                  other requests, use the enquiry form below.
                </p>

                <div className="mt-7 h-px bg-[#082f49]/10" />

                <p className="mt-6 text-[9px] uppercase tracking-[0.18em] text-[#1d2529]/40">
                  Enquiry form coming next
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
