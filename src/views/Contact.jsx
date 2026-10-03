"use client";

import { restaurantInfo } from "../data/restaurantData";
import { ContactForm } from "../components/sections/ContactForm";
import { SectionHeading } from "../components/common/SectionHeading";
import { SocialLinks } from "../components/common/SocialLinks";
import { Button } from "../components/common/Button";

const mapQuery = encodeURIComponent(restaurantInfo.address);

export const ContactPage = () => (
  <>
    <section className="border-b border-white/5 bg-[var(--surface)] pb-16 pt-32 md:pb-20 md:pt-40">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Get in Touch"
          title={`Visit ${restaurantInfo.name}`}
          subtitle="We would love to welcome you. Reach out for reservations, private events, or any questions."
          align="left"
        />
      </div>
    </section>

    <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="font-display text-2xl md:text-3xl">Send a Message</h2>
          <p className="mt-3 text-sm text-[var(--foreground)]/60">
            Fill out the form and a member of our team will respond shortly.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="grid gap-8 sm:grid-cols-2">
            <InfoBlock title="Address">
              <p className="text-[var(--foreground)]/75">
                {restaurantInfo.address}
              </p>
              <Button
                as="a"
                href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="mt-4 w-full sm:w-auto"
              >
                Get Directions
                <span aria-hidden="true">↗</span>
              </Button>
            </InfoBlock>

            <InfoBlock title="Contact">
              <a
                href={`tel:${restaurantInfo.phone.replace(/[^+\d]/g, "")}`}
                className="block text-[var(--foreground)]/75 transition-colors hover:text-[var(--gold)]"
              >
                {restaurantInfo.phone}
              </a>
              <a
                href={`mailto:${restaurantInfo.email}`}
                className="mt-1 block text-[var(--foreground)]/75 transition-colors hover:text-[var(--gold)]"
              >
                {restaurantInfo.email}
              </a>
              <div className="mt-4">
                <SocialLinks />
              </div>
            </InfoBlock>
          </div>

          <InfoBlock title="Opening Hours">
            <dl className="mt-1 divide-y divide-white/10 border-y border-white/10">
              {[
                ["Monday — Thursday", restaurantInfo.hours.monThu],
                ["Friday — Saturday", restaurantInfo.hours.friSat],
                ["Sunday", restaurantInfo.hours.sun],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-4 py-3 text-sm"
                >
                  <dt className="text-[var(--foreground)]/60">{label}</dt>
                  <dd className="text-[var(--foreground)]/85">{value}</dd>
                </div>
              ))}
            </dl>
          </InfoBlock>

          <div className="overflow-hidden rounded-xl border border-white/10">
            <iframe
              title={`Map showing ${restaurantInfo.name} location`}
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full grayscale-[0.4] contrast-[1.1]"
            />
          </div>
        </div>
      </div>
    </div>
  </>
);

const InfoBlock = ({ title, children }) => (
  <div>
    <h3 className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
      {title}
    </h3>
    <div className="mt-3">{children}</div>
  </div>
);
