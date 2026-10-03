<div align="center">

# LUMIÈRE

### An unforgettable dining experience

A premium, production-quality fine-dining restaurant website built with Next.js and React.

[Live preview](#) · [Report an issue](https://github.com/awais003/resturant-web/issues)

</div>

---

## About the project

**LUMIÈRE** is a fictional high-end restaurant brand website designed to feel like a real,
immersive fine-dining experience — elegant, modern, and editorial rather than a generic
template. It is a single premium landing page with smooth in-page navigation, plus dedicated
pages for the full menu, offers, and contact.

Visitors can discover the restaurant, browse a seasonal menu, explore special offers and
events, book a table through a validated reservation modal, view the gallery, and reach the
restaurant via the contact section — all comfortably on mobile, tablet, and desktop.

The design uses a sophisticated dark and warm palette (deep charcoal background, warm ivory
text, muted gold accents) with Playfair Display for headings and Inter for body/UI text.

---

## Features

- **Cinematic hero** with a full-viewport image, subtle parallax scale, staged text entrance, and scroll indicator
- **Quick booking bar** with date, time, and guests — stacks cleanly on mobile
- **Restaurant story** section with an editorial asymmetric layout and key statistics
- **Featured menu preview** with Starters / Main Course / Desserts / Drinks category tabs
- **Signature dish** full-bleed feature with price and reserve CTA
- **Special offers & events** with hover effects and availability details
- **Editorial masonry gallery** with an accessible lightbox (keyboard navigation, Escape to close)
- **Chef spotlight** and **guest testimonials** (swipeable carousel on mobile)
- **Reservation modal** with front-end validation, loading state, and success confirmation
- **Contact section** with address, hours, social links, embedded map, and a validated contact form
- **Dedicated pages**: full menu with category navigation, offers, and contact
- Fully **responsive** (320px through large desktop) with no horizontal overflow
- **Accessible**: semantic HTML, labelled forms, keyboard navigation, visible focus states, ARIA where needed
- **Performance-minded**: lazy-loaded below-the-fold images, GPU-friendly transitions, `prefers-reduced-motion` support
- **SEO basics**: page titles, meta descriptions, semantic headings, image alt text, and Open Graph metadata

---

## Tech stack

| Area | Technology |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| UI library | [React 19](https://react.dev) |
| Language | JavaScript (JSX) with TypeScript tooling |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) + global CSS design tokens |
| Fonts | `next/font` (Playfair Display + Inter) |
| Routing | Next.js App Router |
| Icons | Inline SVG (no icon dependency) |
| Linting | ESLint (`eslint-config-next`) |

No heavy UI or animation libraries were added — animations use CSS transitions and
`IntersectionObserver` for reveal effects.

---

## Getting started

### Prerequisites

- Node.js 18.18+ (Node 20+ recommended)
- npm (or pnpm / yarn / bun)

### Installation

```bash
git clone https://github.com/awais003/resturant-web.git
cd resturant-web
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & run for production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## Pages & routes

| Route | Description |
| --- | --- |
| `/` | Premium landing page with all sections |
| `/menu` | Full seasonal menu with category navigation |
| `/offers` | All current offers and events |
| `/contact` | Contact details, hours, map, and contact form |

---

## Project structure

```
app/                        # Next.js App Router routes
  layout.tsx                # Root layout, fonts, metadata, header/footer
  page.tsx                  # Home (landing) page
  menu/page.tsx             # Full menu page
  offers/page.tsx           # Offers page
  contact/page.tsx          # Contact page
  globals.css               # Design tokens, base styles, animations

src/
  components/
    layout/                 # Header, MobileMenu, Footer
    common/                 # Button, SectionHeading, Reveal, SocialLinks, ImageWithFallback
    booking/                # BookingBar, BookingModal, BookingContext
    menu/                   # MenuPreview, MenuCategory, MenuItem
    offers/                 # OfferCard, OffersSection
    gallery/                # Gallery, Lightbox
    testimonials/           # Testimonials
    sections/               # Hero, Story, SignatureDish, Chef, ReservationCta, Contact
  views/                    # Page-level compositions (Menu, Offers, Contact)
  data/                     # Content data (menu, offers, testimonials, gallery, restaurant)
  hooks/                    # useScrollPosition, useModal
```

---

## Customizing content

All content is data-driven so the brand can be updated without touching component markup:

- `src/data/restaurantData.js` — name, tagline, address, phone, email, hours, socials, stats
- `src/data/menuData.js` — menu categories, full menu sections, and dishes
- `src/data/offersData.js` — offers and events
- `src/data/testimonialsData.js` — guest testimonials
- `src/data/galleryData.js` — gallery images

Photos currently use Unsplash URLs (allowlisted in `next.config.ts`). Replace them with your own
photography and update `images.remotePatterns` if you use another host.

---

## Reservations & contact form

The booking modal and contact form are **front-end only**. Submissions are validated and
stored in `localStorage` (`lumiere-reservations` and `lumiere-messages`) to simulate a
successful submission, then a success state is shown.

The code is structured so a real backend/API can be connected easily:

- `src/components/booking/BookingModal.jsx` — replace the simulated submission in `handleSubmit`
- `src/components/sections/ContactForm.jsx` — replace the storage logic with an API call

---

## Accessibility & performance

- Semantic landmarks, a single `h1` per page, and logical heading order
- All form fields have labels; errors are announced via `role="alert"`
- Modals and the lightbox trap focus context, close with `Escape`, and lock background scroll
- Visible focus styles throughout; `alt` text on all meaningful images
- Below-the-fold images are lazy-loaded; transitions use `transform`/`opacity`
- Full `prefers-reduced-motion` support

---

## Deployment

The project deploys cleanly to [Vercel](https://vercel.com/new) (or any Node host supporting
Next.js). Push the repository and import it into Vercel — no extra configuration required.

---

## License

This project is provided for portfolio and demonstration purposes. See the repository for
details. All imagery is sourced from [Unsplash](https://unsplash.com).

---

## Author

**Awais** — [@awais003](https://github.com/awais003)
