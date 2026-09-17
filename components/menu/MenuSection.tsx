import type { MenuItem } from "@/data/menu";
import Reveal from "@/components/ui/Reveal";
import MenuItemRow from "./MenuItemRow";

type MenuSectionProps = {
  category: string;
  items: MenuItem[];
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function MenuSection({ category, items }: MenuSectionProps) {
  if (!items.length) {
    return null;
  }

  return (
    <section
      id={slugify(category)}
      className="scroll-mt-20 border-t border-[#082f49]/15 py-16 sm:py-20 lg:py-24"
    >
      <div className="grid gap-10 lg:grid-cols-[0.35fr_1fr] lg:gap-16">
        <Reveal y={25}>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#b99a62]">
              Menu
            </p>

            <h2 className="mt-4 font-display text-4xl leading-none text-[#082f49] sm:text-5xl">
              {category}
            </h2>

            <p className="mt-4 max-w-xs text-xs leading-6 text-[#1d2529]/45">
              {items.length} {items.length === 1 ? "selection" : "selections"}
            </p>
          </div>
        </Reveal>

        <div>
          {items.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.025} y={20}>
              <MenuItemRow item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
