import type { Metadata } from "next";
import Link from "next/link";

import MenuHero from "@/components/menu/MenuHero";
import MenuCategoryNav from "@/components/menu/MenuCategoryNav";
import MenuSection from "@/components/menu/MenuSection";
import Reveal from "@/components/ui/Reveal";

import { menuCategories, menuItems } from "@/data/menu";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore the Blue Marlin Beach Restaurant menu, featuring fresh seafood, sushi, coastal dishes, pizzas, pasta, desserts and drinks in Diani Beach, Kenya.",
};

export default function MenuPage() {
  return (
    <main>
      <MenuHero />

      <MenuCategoryNav categories={menuCategories} />

      <section className="overflow-hidden bg-[#f6f1e8]">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="py-16 sm:py-20 lg:py-24">
            <Reveal>
              <div className="max-w-2xl">
                <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#b99a62]">
                  Blue Marlin
                </p>

                <h2 className="mt-4 font-display text-4xl leading-[0.9] text-[#082f49] sm:text-5xl lg:text-6xl">
                  Food made for
                  <br />
                  the coast.
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-8 text-[#1d2529]/60 sm:text-base sm:leading-9">
                  Explore our selection of seafood, sushi, coastal favourites
                  and relaxed dining classics. Menu availability may vary
                  depending on the day's fresh ingredients.
                </p>
              </div>
            </Reveal>

            <div className="mt-8 border-t border-[#082f49]/15 pt-5">
              <p className="text-[9px] uppercase tracking-[0.2em] text-[#1d2529]/40">
                Prices shown in Kenyan Shillings
              </p>
            </div>
          </div>

          <div className="pb-20 sm:pb-28 lg:pb-32">
            {menuCategories.map((category) => {
              const items = menuItems.filter(
                (item) => item.category === category,
              );

              return (
                <MenuSection key={category} category={category} items={items} />
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#082f49] px-5 py-20 text-center text-[#f6f1e8] sm:px-8 sm:py-28">
        <Reveal y={30} className="mx-auto max-w-2xl">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#d8c3a5]">
            By the Indian Ocean
          </p>

          <h2 className="mt-5 font-display text-5xl leading-[0.88] sm:text-6xl lg:text-7xl">
            Ready for a table
            <br />
            by the sea?
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-sm leading-8 text-white/60">
            Join us in Diani Beach for fresh food, ocean air and an easy coastal
            atmosphere.
          </p>

          <Link
            href="/reservations"
            className="mt-9 inline-flex bg-[#f6f1e8] px-7 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#082f49] transition-colors hover:bg-[#d8c3a5]"
          >
            Book a Table
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
