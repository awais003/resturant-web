"use client";

import { offersData } from "../../data/offersData";
import { SectionHeading } from "../common/SectionHeading";
import { Reveal } from "../common/Reveal";
import { OfferCard } from "./OfferCard";

export const OffersSection = () => (
  <section id="offers" className="bg-[var(--background)] py-20 md:py-28 lg:py-32">
    <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="Offers & Events"
          title="Something Special"
          subtitle="Seasonal menus, curated wine evenings, and warm gatherings — moments made to be shared."
        />
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {offersData.map((offer, i) => (
          <Reveal key={offer.id} delay={i * 80} className="h-full">
            <OfferCard offer={offer} featured={i === 0} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
