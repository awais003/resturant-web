"use client";

import Image from "next/image";
import { Reveal } from "../common/Reveal";
import { Button } from "../common/Button";
import { useBooking } from "../booking/BookingContext";

const CTA_IMAGE =
  "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const ReservationCta = () => {
  const { openBooking } = useBooking();

  return (
    <section id="reserve" className="relative isolate overflow-hidden">
      <Image
        src={CTA_IMAGE}
        alt="Beautifully set dining table at LUMIÈRE"
        fill
        loading="lazy"
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 mx-auto flex min-h-[60vh] w-full max-w-4xl flex-col items-center justify-center px-5 py-24 text-center md:min-h-[70vh] md:px-8">
        <Reveal className="flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.35em] text-[var(--gold)]">
            Reservations
          </span>
          <h2 className="mt-5 font-display text-4xl leading-tight text-balance md:text-5xl lg:text-6xl">
            Your table is waiting.
          </h2>
          <p className="mt-6 max-w-xl text-pretty text-base text-white/75 md:text-lg">
            Join us for an evening of exceptional food, thoughtful service, and
            memorable moments.
          </p>
          <Button
            onClick={openBooking}
            className="mt-9 px-9"
            aria-haspopup="dialog"
          >
            Book a Table
          </Button>
        </Reveal>
      </div>
    </section>
  );
};
