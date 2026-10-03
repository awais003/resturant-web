import type { Metadata } from "next";
import { OffersPage } from "../../src/views/Offers";

export const metadata: Metadata = {
  title: "Offers & Events | LUMIÈRE",
  description:
    "Discover seasonal tasting menus, wine evenings, and family gatherings at LUMIÈRE.",
};

export default function Page() {
  return <OffersPage />;
}
