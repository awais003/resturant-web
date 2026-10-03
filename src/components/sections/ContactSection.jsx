"use client";

import { restaurantInfo } from "../../data/restaurantData";
import { SectionHeading } from "../common/SectionHeading";
import { Reveal } from "../common/Reveal";
import { Button } from "../common/Button";
import { SocialLinks } from "../common/SocialLinks";

const mapQuery = encodeURIComponent(restaurantInfo.address);

export const ContactSection = () => (
  <section
    id="contact"
    className="border-t border-white/5 bg-[var(--background)] py-20 md:py-28 lg:py-32"
  >
    <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
      <Reveal>
        <SectionHeading eyebrow="Visit" title={`Visit ${restaurantInfo.name}`} />
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-3 lg:gap-12">
        <Reveal className="flex flex-col gap-8">
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
              Address
            </h3>
            <p className="mt-3 text-[var(--foreground)]/75">
              {restaurantInfo.address}
            </p>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
              Contact
            </h3>
            <a
              href={`tel:${restaurantInfo.phone.replace(/[^+\d]/g, "")}`}
              className="mt-3 block text-[var(--foreground)]/75 transition-colors hover:text-[var(--gold)]"
            >
              {restaurantInfo.phone}
            </a>
            <a
              href={`mailto:${restaurantInfo.email}`}
              className="mt-1 block text-[var(--foreground)]/75 transition-colors hover:text-[var(--gold)]"
            >
              {restaurantInfo.email}
            </a>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
              Follow
            </h3>
            <div className="mt-3">
              <SocialLinks />
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h3 className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
            Opening Hours
          </h3>
          <dl className="mt-4 divide-y divide-white/10 border-y border-white/10">
            <HoursRow label="Monday — Thursday" value={restaurantInfo.hours.monThu} />
            <HoursRow label="Friday — Saturday" value={restaurantInfo.hours.friSat} />
            <HoursRow label="Sunday" value={restaurantInfo.hours.sun} />
          </dl>
          <Button
            as="a"
            href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            className="mt-8"
          >
            Get Directions
            <span aria-hidden="true">↗</span>
          </Button>
        </Reveal>

        <Reveal delay={200}>
          <div className="h-full min-h-[260px] overflow-hidden rounded-xl border border-white/10">
            <iframe
              title={`Map showing ${restaurantInfo.name} location`}
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[260px] w-full grayscale-[0.4] contrast-[1.1]"
            />
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

const HoursRow = ({ label, value }) => (
  <div className="flex items-center justify-between gap-4 py-3 text-sm">
    <dt className="text-[var(--foreground)]/60">{label}</dt>
    <dd className="text-[var(--foreground)]/85">{value}</dd>
  </div>
);
