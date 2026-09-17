import Reveal from "@/components/ui/Reveal";
import ReservationForm from "@/components/forms/ReservationForm";

export default function ReservationDetails() {
  return (
    <section className="overflow-hidden bg-[#f6f1e8] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <Reveal y={30}>
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#b99a62]">
                Make a reservation
              </p>

              <h2 className="mt-5 font-display text-5xl leading-[0.9] text-[#082f49] sm:text-6xl lg:text-7xl">
                Let's save
                <br />
                you a seat.
              </h2>

              <p className="mt-7 max-w-md text-sm leading-8 text-[#1d2529]/60 sm:text-base sm:leading-9">
                Tell us when you'd like to visit and we'll get back to you to
                confirm your table.
              </p>

              <div className="mt-10 border-t border-[#082f49]/15 pt-7">
                <p className="text-[9px] uppercase tracking-[0.25em] text-[#b99a62]">
                  Prefer to call?
                </p>

                <a
                  href="tel:+254712559117"
                  className="mt-3 block font-display text-2xl text-[#082f49] transition-opacity hover:opacity-60"
                >
                  +254 712 559117
                </a>

                <p className="mt-6 text-[9px] uppercase tracking-[0.25em] text-[#b99a62]">
                  Reservations
                </p>

                <a
                  href="mailto:reservations@bluemarlinbeachhotel.com"
                  className="mt-3 block break-all text-sm leading-6 text-[#082f49] transition-opacity hover:opacity-60"
                >
                  reservations@bluemarlinbeachhotel.com
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} y={30}>
            <div className="bg-[#fffdf9] p-6 sm:p-8 lg:p-10">
              <ReservationForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
