"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { menuCategories, menuItems } from "../../data/menuData";
import { SectionHeading } from "../common/SectionHeading";
import { Reveal } from "../common/Reveal";
import { MenuItem } from "./MenuItem";

export const MenuPreview = () => {
  const [active, setActive] = useState(menuCategories[0].id);

  const filtered = useMemo(
    () => menuItems.filter((item) => item.category === active),
    [active]
  );

  return (
    <section
      id="menu"
      className="relative border-y border-white/5 bg-[var(--surface)] py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="The Menu"
            title="Taste the Season"
            subtitle="Our menu evolves with the seasons, celebrating the finest ingredients at their peak."
          />
        </Reveal>

        <Reveal delay={100}>
          <div
            role="tablist"
            aria-label="Menu categories"
            className="mt-12 flex flex-wrap items-center justify-center gap-2 md:gap-3"
          >
            {menuCategories.map((cat) => {
              const isActive = active === cat.id;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(cat.id)}
                  className={`rounded-full border px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)] ${
                    isActive
                      ? "border-[var(--gold)] bg-[var(--gold)] text-[#0b0b0b]"
                      : "border-white/15 text-[var(--foreground)]/70 hover:border-white/40 hover:text-[var(--foreground)]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-x-14 gap-y-10 lg:grid-cols-2">
          {filtered.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/menu"
            className="group inline-flex items-center gap-2 border-b border-[var(--gold)]/40 pb-1 text-sm font-medium tracking-wide text-[var(--gold)] transition-colors hover:border-[var(--gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold)]"
          >
            View Full Menu
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
