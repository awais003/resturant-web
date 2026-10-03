"use client";

import Image from "next/image";
import { Reveal } from "../common/Reveal";
import { useBooking } from "../booking/BookingContext";

const SIGNATURE_IMAGE =
  "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const SignatureDish = () => {
  const { openBooking } = useBooking();

  return (
    <section className="relative isolate overflow-hidden bg-[var(--background)]">
      <div className="relative min-h-[70vh] w-full md:min-h-[80vh]">
        <Image
          src={SIGNATURE_IMAGE}
          alt="Charcoal-grilled dry-aged ribeye served with roasted garlic"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />

        <div className="relative z-10 mx-auto flex min-h-[70vh] w-full max-w-7xl items-center px-5 py-24 md:min-h-[80vh] md:px-8">
          <Reveal className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.35em] text-[var(--gold)]">
              The Signature
            </span>
            <h2 className="mt-5 font-display text-4xl leading-tight text-balance md:text-5xl lg:text-6xl">
              Charcoal-Grilled Ribeye
            </h2>
            <span className="mt-6 block h-px w-28 bg-[var(--gold)]/60" />
            <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-white/75 md:text-lg">
              28-day dry-aged beef, roasted garlic, rosemary jus.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <span className="font-display text-3xl text-[var(--gold)]">
                $52
              </span>
              <button
                type="button"
                onClick={openBooking}
                aria-haspopup="dialog"
                className="group inline-flex items-center gap-2 border-b border-white/30 pb-1 text-sm font-medium tracking-wide text-white transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold)]"
              >
                Reserve Your Table
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
