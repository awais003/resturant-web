"use client";

import Image from "next/image";
import { Reveal } from "../common/Reveal";
import { Button } from "../common/Button";
import { restaurantInfo } from "../../data/restaurantData";

const STORY_IMAGE =
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const StorySection = () => (
  <section id="story" className="relative bg-[var(--background)] py-20 md:py-28 lg:py-32">
    <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
      <Reveal className="relative order-2 lg:order-1">
        <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl">
          <Image
            src={STORY_IMAGE}
            alt="Warm dining room at LUMIÈRE with ambient lighting"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="absolute -bottom-4 -right-4 -z-10 h-40 w-40 border border-[var(--gold)]/30 md:h-56 md:w-56" />
      </Reveal>

      <div className="order-1 lg:order-2">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
            Our Story
          </span>
          <h2 className="mt-5 font-display text-4xl leading-[1.08] text-balance md:text-5xl lg:text-6xl">
            More than a meal.
            <br />
            A moment to remember.
          </h2>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-[var(--foreground)]/70 md:text-lg">
            {restaurantInfo.name} brings together seasonal ingredients,
            thoughtful technique, and a warm dining atmosphere to create
            experiences worth returning to.
          </p>
          <div className="mt-8">
            <Button as="a" href="#chef" variant="secondary">
              Discover Our Story
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {restaurantInfo.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-3xl text-[var(--gold)] md:text-4xl">
                  {stat.number}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.15em] text-[var(--foreground)]/55">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </div>
  </section>
);
