"use client";

import { useEffect, useRef, useState } from "react";

type MenuCategoryNavProps = {
  categories: string[];
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function MenuCategoryNav({ categories }: MenuCategoryNavProps) {
  const [activeCategory, setActiveCategory] = useState(
    categories[0] ? slugify(categories[0]) : "",
  );

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = categories
      .map((category) => document.getElementById(slugify(category)))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top),
          );

        const currentSection = visibleSections[0];

        if (!currentSection) {
          return;
        }

        setActiveCategory(currentSection.target.id);
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [categories]);

  useEffect(() => {
    const activeLink = navRef.current?.querySelector(
      `[data-category="${activeCategory}"]`,
    );

    if (!activeLink) {
      return;
    }

    activeLink.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeCategory]);

  return (
    <div className="sticky top-26 z-40 border-y border-[#082f49]/10 bg-[#f6f1e8]/95 backdrop-blur-md">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div
          ref={navRef}
          className="w-full overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex w-max min-w-full py-4">
            {categories.map((category) => {
              const slug = slugify(category);
              const active = activeCategory === slug;

              return (
                <a
                  key={category}
                  href={`#${slug}`}
                  data-category={slug}
                  onClick={() => setActiveCategory(slug)}
                  className={`shrink-0 border-r border-[#082f49]/10 px-5 py-1 text-[9px] font-medium uppercase tracking-[0.18em] transition-colors first:pl-0 last:border-r-0 sm:px-6 ${
                    active
                      ? "text-[#082f49]"
                      : "text-[#1d2529]/45 hover:text-[#082f49]"
                  }`}
                >
                  {category}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
