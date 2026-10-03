"use client";

import { useMemo } from "react";
import { fullMenuSections, menuItems } from "../data/menuData";
import { MenuCategory } from "../components/menu/MenuCategory";
import { SectionHeading } from "../components/common/SectionHeading";
import { Button } from "../components/common/Button";
import { useBooking } from "../components/booking/BookingContext";

export const MenuPage = () => {
  const { openBooking } = useBooking();

  const grouped = useMemo(() => {
    const map = {};
    fullMenuSections.forEach((section) => {
      map[section.id] = menuItems.filter((item) => item.category === section.id);
    });
    return map;
  }, []);

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/5 bg-[var(--surface)] pb-16 pt-32 md:pb-20 md:pt-40">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Our Menu"
            title="Taste the Season"
            subtitle="Our menu evolves with the seasons, celebrating the finest ingredients at their peak. Prices are in USD."
            align="left"
          />
        </div>
      </section>

      <div className="mx-auto w-full max-w-7xl gap-16 px-5 py-16 md:px-8 md:py-20 lg:grid lg:grid-cols-[220px_1fr] lg:gap-20">
        <nav
          aria-label="Menu sections"
          className="top-28 mb-10 flex gap-3 overflow-x-auto pb-2 hide-scrollbar lg:sticky lg:mb-0 lg:h-fit lg:flex-col lg:gap-2 lg:overflow-visible"
        >
          {fullMenuSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="shrink-0 rounded-full border border-white/10 px-4 py-2 text-sm text-[var(--foreground)]/70 transition-colors hover:border-[var(--gold)]/50 hover:text-[var(--gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)] lg:rounded-none lg:border-0 lg:border-l-2 lg:px-4 lg:py-2"
            >
              {section.label}
            </a>
          ))}
          <div className="hidden pt-6 lg:block">
            <Button onClick={openBooking} className="w-full" aria-haspopup="dialog">
              Book a Table
            </Button>
          </div>
        </nav>

        <div className="flex flex-col gap-16 md:gap-20">
          {fullMenuSections.map((section) => (
            <MenuCategory
              key={section.id}
              section={section}
              items={grouped[section.id]}
            />
          ))}

          <div className="flex flex-col items-start gap-6 rounded-xl border border-white/10 bg-[var(--surface)] p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-display text-2xl md:text-3xl">
                Ready to dine with us?
              </h2>
              <p className="mt-2 text-sm text-[var(--foreground)]/60">
                Reserve your table and let us take care of the rest.
              </p>
            </div>
            <Button onClick={openBooking} aria-haspopup="dialog">
              Book a Table
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
