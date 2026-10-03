"use client";

import Image from "next/image";
import { useBooking } from "../booking/BookingContext";

export const OfferCard = ({ offer, featured = false }) => {
  const { openBooking } = useBooking();

  return (
    <article
      className={`group relative isolate flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[var(--surface-2)] ${
        featured ? "lg:col-span-2 lg:row-span-1" : ""
      }`}
    >
      <div
        className={`relative w-full overflow-hidden ${
          featured ? "aspect-16/10 lg:aspect-21/9" : "aspect-4/3"
        }`}
      >
        <Image
          src={offer.image}
          alt={offer.title}
          fill
          loading="lazy"
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
          {offer.availability}
        </span>
        <h3 className="mt-3 font-display text-2xl md:text-3xl">
          {offer.title}
        </h3>
        <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-[var(--foreground)]/65 md:text-base">
          {offer.description}
        </p>
        <div className="mt-6 flex items-center gap-6">
          <button
            type="button"
            onClick={openBooking}
            aria-haspopup="dialog"
            className="text-sm font-medium tracking-wide text-[var(--gold)] transition-colors hover:text-[var(--gold-600)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold)]"
          >
            Reserve Your Table
          </button>
        </div>
      </div>
    </article>
  );
};
