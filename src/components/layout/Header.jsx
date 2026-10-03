"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { useBooking } from "../booking/BookingContext";
import { Button } from "../common/Button";
import { MobileMenu } from "./MobileMenu";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Offers", href: "/offers" },
  { label: "About", href: "/#story" },
  { label: "Contact", href: "/contact" },
];

export const Header = () => {
  const { isScrolled } = useScrollPosition();
  const [menuOpen, setMenuOpen] = useState(false);
  const { openBooking } = useBooking();
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          isScrolled || !isHome
            ? "border-b border-white/10 bg-[var(--background)]/85 backdrop-blur-lg"
            : "border-b border-transparent bg-gradient-to-b from-black/50 to-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
          <Link
            href="/"
            className="font-display text-xl tracking-[0.28em] text-[var(--foreground)] transition-colors hover:text-[var(--gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold)] md:text-2xl"
            aria-label="LUMIÈRE home"
          >
            LUMIÈRE
          </Link>

          <nav
            aria-label="Primary"
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group relative text-sm font-medium tracking-wide text-[var(--foreground)]/80 transition-colors hover:text-[var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold)]"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-[var(--gold)] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              onClick={openBooking}
              className="hidden sm:inline-flex"
              aria-haspopup="dialog"
            >
              Book a Table
            </Button>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-white/15 text-[var(--foreground)] transition-colors hover:border-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)] lg:hidden"
            >
              <span className="block h-px w-5 bg-current" />
              <span className="block h-px w-5 bg-current" />
              <span className="block h-px w-3.5 bg-current" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onBook={() => {
          setMenuOpen(false);
          setTimeout(openBooking, 180);
        }}
      />
    </>
  );
};
