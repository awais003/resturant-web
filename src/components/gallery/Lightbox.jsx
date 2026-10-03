"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";

export const Lightbox = ({ images, index, onClose, onNavigate }) => {
  const closeRef = useRef(null);

  const next = useCallback(
    () => onNavigate((index + 1) % images.length),
    [index, images.length, onNavigate]
  );
  const prev = useCallback(
    () => onNavigate((index - 1 + images.length) % images.length),
    [index, images.length, onNavigate]
  );

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", handleKey);
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = original;
    };
  }, [onClose, next, prev]);

  const current = images[index];
  if (!current) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery viewer"
      className="fixed inset-0 z-[110] flex items-center justify-center bg-black/95 animate-[fadeIn_250ms_ease-out]"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close gallery"
        ref={closeRef}
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-2xl text-white/80 transition-colors hover:border-white/40 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)] md:right-8 md:top-8"
      >
        <span aria-hidden="true">×</span>
      </button>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous image"
        className="absolute left-2 z-10 flex h-12 w-12 items-center justify-center rounded-full text-3xl text-white/70 transition-colors hover:text-[var(--gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)] md:left-6"
      >
        <span aria-hidden="true">‹</span>
      </button>

      <figure className="relative mx-4 flex max-h-[86vh] w-full max-w-5xl flex-col items-center md:mx-16">
        <div className="relative h-[70vh] w-full">
          <Image
            key={current.id}
            src={current.src}
            alt={current.alt}
            fill
            sizes="90vw"
            className="object-contain animate-[fadeIn_300ms_ease-out]"
          />
        </div>
        <figcaption className="mt-4 text-center text-sm text-white/60">
          {current.alt}
          <span className="ml-2 text-white/30">
            {index + 1} / {images.length}
          </span>
        </figcaption>
      </figure>

      <button
        type="button"
        onClick={next}
        aria-label="Next image"
        className="absolute right-2 z-10 flex h-12 w-12 items-center justify-center rounded-full text-3xl text-white/70 transition-colors hover:text-[var(--gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)] md:right-6"
      >
        <span aria-hidden="true">›</span>
      </button>
    </div>
  );
};
