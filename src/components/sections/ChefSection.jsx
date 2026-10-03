"use client";

import Image from "next/image";
import { Reveal } from "../common/Reveal";

const CHEF_IMAGE =
  "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const ChefSection = () => (
  <section
    id="chef"
    className="border-y border-white/5 bg-[var(--surface)] py-20 md:py-28 lg:py-32 scroll-mt-24"
  >
    <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-5 lg:gap-16">
      <Reveal className="lg:col-span-3">
        <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
          Meet the Chef
        </span>
        <h2 className="mt-5 font-display text-3xl leading-tight text-balance md:text-4xl lg:text-5xl">
          Chef Daniel Laurent
        </h2>
        <span className="mt-6 block h-px w-24 bg-[var(--gold)]/50" />
        <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-[var(--foreground)]/70 md:text-lg">
          Driven by seasonality and simplicity, Chef Daniel creates dishes that
          respect the ingredient while pushing familiar flavors somewhere
          unexpected.
        </p>
        <div className="mt-10">
          <span className="font-display text-4xl text-[var(--gold)] md:text-5xl">
            15+
          </span>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--foreground)]/55">
            Years of culinary experience
          </p>
        </div>
      </Reveal>

      <Reveal delay={120} className="lg:col-span-2">
        <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl">
          <Image
            src={CHEF_IMAGE}
            alt="Chef Daniel Laurent plating a seasonal dish"
            fill
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
      </Reveal>
    </div>
  </section>
);
