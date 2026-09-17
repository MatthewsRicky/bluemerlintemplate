import Image from "next/image";
import Link from "next/link";
import { featuredDishes } from "@/data/menu";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const dishImages: Record<string, string> = {
  "seafood-salad": "/images/blue-marlin-seafood-salad.avif",
  "swahili-fish": "/images/blue-marlin-fish.jpg",
  "sesame-crusted-yellow-fin-tuna": "/images/blue-marlin-tuna.avif",
  "king-prawns-tempura": "/images/blue-marlin-prawns.jpg",
  "sushi-selection": "/images/blue-marlin-sushi.avif",
};

export default function SignatureDishes() {


  return (
    <section className="overflow-hidden bg-[#fffdf9] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="From the kitchen"
              title="A taste of the coast."
              description="Fresh seafood, sushi and dishes inspired by the flavours of the Kenyan coast."
            />

            <Link
              href="/menu"
              className="group inline-flex w-fit items-center gap-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#082f49]"
            >
              <span>View full menu</span>
              <span className="h-px w-8 bg-[#b99a62] transition-all duration-500 group-hover:w-14" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {featuredDishes.slice(0, 4).map((dish, index) => (
            <Reveal key={dish.id} delay={index * 0.08} y={35}>
              <article className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#f6f1e8]">
                  {dishImages[dish.id] ? (
                    <Image
                      src={dishImages[dish.id]}
                      alt={dish.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <span className="font-display text-2xl text-[#082f49]/30">
                        Blue Marlin
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#082f49]/55 via-transparent to-transparent opacity-70" />

                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <p className="text-[9px] uppercase tracking-[0.22em] text-[#d8c3a5]">
                      {dish.category}
                    </p>

                    <h3 className="mt-2 font-display text-3xl leading-none">
                      {dish.name}
                    </h3>
                  </div>
                </div>

                <div className="pt-5">
                  <div className="flex items-start justify-between gap-4">
                    <p className="max-w-xs text-sm leading-6 text-[#1d2529]/60">
                      {dish.description}
                    </p>

                    <span className="shrink-0 text-[10px] font-medium uppercase tracking-[0.12em] text-[#082f49]">
                      {dish.price}
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
