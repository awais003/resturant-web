import type { Metadata } from "next";
import { ContactPage } from "../../src/views/Contact";

export const metadata: Metadata = {
  title: "Contact & Location | LUMIÈRE",
  description:
    "Find LUMIÈRE, view opening hours, and get in touch for reservations and events.",
};

export default function Page() {
  return <ContactPage />;
}
