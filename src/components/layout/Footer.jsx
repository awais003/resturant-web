import Link from "next/link";
import { restaurantInfo } from "../../data/restaurantData";
import { SocialLinks } from "../common/SocialLinks";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[var(--surface)]">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Link
            href="/"
            className="font-display text-2xl tracking-[0.28em] text-[var(--foreground)] transition-colors hover:text-[var(--gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold)]"
          >
            LUMIÈRE
          </Link>
          <p className="mt-4 max-w-xs text-sm text-[var(--foreground)]/60">
            {restaurantInfo.tagline}.
          </p>
          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-3 text-sm">
          <h2 className="mb-1 text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
            Explore
          </h2>
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/menu">Menu</FooterLink>
          <FooterLink href="/offers">Offers</FooterLink>
          <FooterLink href="/#story">About</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
        </nav>

        <div className="flex flex-col gap-3 text-sm">
          <h2 className="mb-1 text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
            Visit
          </h2>
          <p className="text-[var(--foreground)]/60">{restaurantInfo.address}</p>
          <a
            href={`tel:${restaurantInfo.phone.replace(/[^+\d]/g, "")}`}
            className="text-[var(--foreground)]/60 transition-colors hover:text-[var(--gold)]"
          >
            {restaurantInfo.phone}
          </a>
          <a
            href={`mailto:${restaurantInfo.email}`}
            className="text-[var(--foreground)]/60 transition-colors hover:text-[var(--gold)]"
          >
            {restaurantInfo.email}
          </a>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <h2 className="mb-1 text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
            Hours
          </h2>
          <div className="text-[var(--foreground)]/60">
            <p>Monday — Thursday</p>
            <p className="mb-2 text-[var(--foreground)]/80">
              {restaurantInfo.hours.monThu}
            </p>
            <p>Friday — Saturday</p>
            <p className="mb-2 text-[var(--foreground)]/80">
              {restaurantInfo.hours.friSat}
            </p>
            <p>Sunday</p>
            <p className="text-[var(--foreground)]/80">
              {restaurantInfo.hours.sun}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-xs text-[var(--foreground)]/50 md:flex-row md:px-8">
          <p>© {year} LUMIÈRE. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="transition-colors hover:text-[var(--gold)]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:text-[var(--gold)]"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }) => (
  <Link
    href={href}
    className="text-[var(--foreground)]/60 transition-colors hover:text-[var(--gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]"
  >
    {children}
  </Link>
);
