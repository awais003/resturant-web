import { Hero } from "../src/components/sections/Hero";
import { StorySection } from "../src/components/sections/StorySection";
import { MenuPreview } from "../src/components/menu/MenuPreview";
import { SignatureDish } from "../src/components/sections/SignatureDish";
import { OffersSection } from "../src/components/offers/OffersSection";
import { Gallery } from "../src/components/gallery/Gallery";
import { ChefSection } from "../src/components/sections/ChefSection";
import { Testimonials } from "../src/components/testimonials/Testimonials";
import { ReservationCta } from "../src/components/sections/ReservationCta";
import { ContactSection } from "../src/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StorySection />
      <MenuPreview />
      <SignatureDish />
      <OffersSection />
      <Gallery />
      <ChefSection />
      <Testimonials />
      <ReservationCta />
      <ContactSection />
    </>
  );
}
