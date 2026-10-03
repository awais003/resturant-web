"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "../common/Button";
import { BookingBar } from "../booking/BookingBar";
import { useBooking } from "../booking/BookingContext";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const Hero = () => {
  const { openBooking } = useBooking();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Elegant fine dining table setting at LUMIÈRE restaurant"
          fill
          priority
          sizes="100vw"
          className={`object-cover transition-transform duration-[8000ms] ease-out ${
            mounted ? "scale-105" : "scale-100"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-[var(--background)]" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-5 pb-28 pt-32 text-center md:px-8">
        <span
          className={`text-xs uppercase tracking-[0.4em] text-[var(--gold)] transition-all duration-700 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          EST. 2018 · FINE DINING
        </span>
        <h1
          className={`mt-6 max-w-4xl font-display text-4xl leading-[1.05] text-balance sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl transition-all duration-700 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: "120ms" }}
        >
          An unforgettable dining experience.
        </h1>
        <p
          className={`mt-6 max-w-xl text-pretty text-base text-white/75 md:text-lg transition-all duration-700 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: "240ms" }}
        >
          Seasonal ingredients, thoughtful cooking, and warm hospitality come
          together around one table.
        </p>

        <div
          className={`mt-9 flex flex-col gap-3 sm:flex-row transition-all duration-700 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: "360ms" }}
        >
          <Button onClick={openBooking} className="px-8" aria-haspopup="dialog">
            Book a Table
          </Button>
          <Button as="a" href="#menu" variant="secondary" className="px-8">
            Explore Menu
          </Button>
        </div>

        <div
          className={`mt-12 w-full max-w-3xl transition-all duration-700 md:mt-16 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: "480ms" }}
        >
          <BookingBar />
        </div>
      </div>

      <a
        href="#story"
        aria-label="Scroll to story section"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 transition-colors hover:text-[var(--gold)] md:flex"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.3em]">Scroll</span>
        <span className="relative block h-10 w-px overflow-hidden bg-white/20">
          <span className="absolute inset-x-0 top-0 h-4 animate-bounce bg-[var(--gold)]" />
        </span>
      </a>
    </section>
  );
};
