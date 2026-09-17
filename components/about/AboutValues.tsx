import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const values = [
  {
    number: "01",
    title: "Fresh from the sea",
    description:
      "Seafood sits at the heart of our menu, with dishes inspired by the waters and flavours of the Kenyan coast.",
  },
  {
    number: "02",
    title: "The coast on the plate",
    description:
      "Local ingredients, familiar coastal flavours and international influences come together across the menu.",
  },
  {
    number: "03",
    title: "Time by the ocean",
    description:
      "Good food is only part of the experience. The sea, the breeze and the relaxed pace of Diani are part of every visit.",
  },
];

export default function AboutValues() {
  return (
    <section className="overflow-hidden bg-[#fffdf9] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="What defines us"
            title="Simple things, done with intention."
            description="The experience begins with the setting, but it is carried by the food, the people and the atmosphere."
          />
        </Reveal>

        <div className="mt-16 grid border-t border-[#082f49]/15 lg:grid-cols-3">
          {values.map((value, index) => (
            <Reveal
              key={value.number}
              delay={index * 0.08}
              y={30}
              className="border-b border-[#082f49]/15 lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <article className="px-0 py-8 sm:py-10 lg:px-10 lg:py-12 lg:first:pl-0">
                <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#b99a62]">
                  {value.number}
                </p>

                <h3 className="mt-7 font-display text-3xl leading-none text-[#082f49] sm:text-4xl">
                  {value.title}
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-7 text-[#1d2529]/60">
                  {value.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
