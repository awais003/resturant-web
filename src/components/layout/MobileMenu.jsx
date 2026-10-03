"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "../common/Button";
import { restaurantInfo } from "../../data/restaurantData";
import { navLinks } from "./Header";

export const MobileMenu = ({ open, onClose, onBook }) => {
  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKey);
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = original;
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[90] lg:hidden ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col justify-between border-l border-white/10 bg-[var(--surface)] p-6 transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between">
            <span className="font-display text-xl tracking-[0.28em]">
              LUMIÈRE
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[var(--foreground)]/70 transition-colors hover:border-white/30 hover:text-[var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <nav aria-label="Mobile" className="mt-12 flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={onClose}
                className="border-b border-white/5 py-4 font-display text-2xl text-[var(--foreground)]/90 transition-colors hover:text-[var(--gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]"
                style={{ transitionDelay: `${i * 20}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <Button onClick={onBook} className="w-full">
            Book a Table
          </Button>
          <div className="text-sm text-[var(--foreground)]/60">
            <p>{restaurantInfo.address}</p>
            <a
              href={`tel:${restaurantInfo.phone.replace(/[^+\d]/g, "")}`}
              className="mt-1 inline-block transition-colors hover:text-[var(--gold)]"
            >
              {restaurantInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
