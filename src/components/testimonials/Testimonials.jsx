"use client";

import { testimonialsData } from "../../data/testimonialsData";
import { SectionHeading } from "../common/SectionHeading";
import { Reveal } from "../common/Reveal";

const Stars = ({ count }) => (
  <div
    className="flex gap-1 text-[var(--gold)]"
    role="img"
    aria-label={`${count} out of 5 stars`}
  >
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} aria-hidden="true">
        ★
      </span>
    ))}
  </div>
);

export const Testimonials = () => (
  <section className="bg-[var(--background)] py-20 md:py-28 lg:py-32">
    <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="Guest Experiences"
          title="What Our Guests Say"
        />
      </Reveal>

      <div className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 hide-scrollbar md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0">
        {testimonialsData.map((t) => (
          <figure
            key={t.id}
            className="flex min-w-[85%] snap-center flex-col gap-5 rounded-xl border border-white/10 bg-[var(--surface)] p-7 sm:min-w-[60%] md:min-w-0"
          >
            <Stars count={t.rating} />
            <blockquote className="flex-1">
              <p className="text-pretty font-display text-lg leading-relaxed text-[var(--foreground)]/90 md:text-xl">
                “{t.quote}”
              </p>
            </blockquote>
            <figcaption className="text-sm uppercase tracking-[0.2em] text-[var(--foreground)]/50">
              — {t.author}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
