import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "../src/components/Providers";
import { Header } from "../src/components/layout/Header";
import { Footer } from "../src/components/layout/Footer";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "LUMIÈRE | Fine Dining Restaurant",
  description:
    "Experience seasonal cuisine, exceptional hospitality, and unforgettable dining at LUMIÈRE.",
  openGraph: {
    title: "LUMIÈRE | Fine Dining Restaurant",
    description:
      "Seasonal ingredients, thoughtful cooking, and warm hospitality come together at LUMIÈRE.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
