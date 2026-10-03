"use client";

import { offersData } from "../data/offersData";
import { OfferCard } from "../components/offers/OfferCard";
import { SectionHeading } from "../components/common/SectionHeading";

export const OffersPage = () => (
  <>
    <section className="border-b border-white/5 bg-[var(--surface)] pb-16 pt-32 md:pb-20 md:pt-40">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Offers & Events"
          title="Something Special"
          subtitle="Seasonal menus, curated wine evenings, and warm gatherings — moments made to be shared."
          align="left"
        />
      </div>
    </section>

    <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
      <div className="grid gap-6 lg:grid-cols-2">
        {offersData.map((offer, i) => (
          <OfferCard key={offer.id} offer={offer} featured={i === 0} />
        ))}
      </div>
    </div>
  </>
);
