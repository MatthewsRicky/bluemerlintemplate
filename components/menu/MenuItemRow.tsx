import type { MenuItem } from "@/data/menu";

type MenuItemRowProps = {
  item: MenuItem;
};

export default function MenuItemRow({ item }: MenuItemRowProps) {
  return (
    <article className="border-b border-[#082f49]/10 py-7 last:border-b-0 sm:py-8">
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0 max-w-3xl">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <h3 className="font-display text-2xl leading-none text-[#082f49] sm:text-3xl">
              {item.name}
            </h3>

            {item.featured && (
              <span className="border border-[#b99a62]/50 px-2 py-1 text-[7px] font-medium uppercase tracking-[0.18em] text-[#b99a62]">
                Featured
              </span>
            )}
          </div>

          {item.description && (
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#1d2529]/55">
              {item.description}
            </p>
          )}

          {item.served && (
            <p className="mt-3 text-[9px] uppercase tracking-[0.16em] text-[#1d2529]/40">
              {item.served}
            </p>
          )}

          {item.dietary && item.dietary.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {item.dietary.map((label) => (
                <span
                  key={label}
                  className="text-[8px] uppercase tracking-[0.16em] text-[#b99a62]"
                >
                  {label}
                </span>
              ))}
            </div>
          )}
        </div>

        <p className="shrink-0 text-sm font-medium tracking-wide text-[#082f49] sm:text-base">
          KES {item.price.toLocaleString("en-KE")}
        </p>
      </div>
    </article>
  );
}
