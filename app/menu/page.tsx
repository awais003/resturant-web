import type { Metadata } from "next";
import { MenuPage } from "../../src/views/Menu";

export const metadata: Metadata = {
  title: "Menu | LUMIÈRE Fine Dining",
  description:
    "Explore the seasonal menu at LUMIÈRE — starters, mains, vegetarian dishes, desserts, and drinks.",
};

export default function Page() {
  return <MenuPage />;
}
