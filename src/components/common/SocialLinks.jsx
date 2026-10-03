import { restaurantInfo } from "../../data/restaurantData";

const icons = {
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5H16.7V4.6c-.3 0-1.3-.1-2.45-.1-2.43 0-4.1 1.48-4.1 4.2v2.2H7.4V14h2.85v8h3.25Z" />
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M16.5 3c.3 2.1 1.5 3.5 3.6 3.8v2.6c-1.3.13-2.53-.3-3.75-1.05v5.9c0 3.4-2.4 5.75-5.55 5.75A5.4 5.4 0 0 1 5.5 14.7c0-3.2 2.5-5.5 5.8-5.3v2.7c-.4-.1-.78-.15-1.15-.1-1.35.2-2.25 1.2-2.25 2.6 0 1.5 1.15 2.65 2.65 2.65 1.55 0 2.75-1.15 2.75-2.9V3h3.2Z" />
    </svg>
  ),
};

export const SocialLinks = ({ className = "" }) => (
  <ul className={`flex items-center gap-3 ${className}`}>
    {Object.entries(icons).map(([key, icon]) => (
      <li key={key}>
        <a
          href={restaurantInfo.social[key]}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`LUMIÈRE on ${key.charAt(0).toUpperCase()}${key.slice(1)}`}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[var(--foreground)]/60 transition-all duration-300 hover:border-[var(--gold)]/50 hover:text-[var(--gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]"
        >
          {icon}
        </a>
      </li>
    ))}
  </ul>
);
