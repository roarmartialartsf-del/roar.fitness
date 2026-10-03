import type { Metadata, Viewport } from "next";
import { Big_Shoulders_Display, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";
import { site } from "@/content/site";

const display = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});
const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "ROAR MMA | MMA Gym & Martial Arts Academy in Lahore",
    template: "%s",
  },
  description:
    "ROAR Mixed Martial Arts — Lahore's combat sports club in Canal Gardens. Boxing, MMA, Muay Thai, Kickboxing, Wushu & self-defense with a federation-certified coach.",
  applicationName: site.shortName,
  keywords: ["MMA gym Lahore", "martial arts Lahore", "boxing classes Lahore", "Muay Thai Lahore", "Canal Gardens"],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: site.shortName,
    url: site.url,
    images: [{ url: "/images/roar-mma-mural-canal-gardens-lahore.jpg", width: 1200, height: 630, alt: site.name }],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0C0D10",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body id="top">
        <a href="#main" className="skip-link">Skip to content</a>
        <div className="grain" aria-hidden="true" />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyMobileBar />
      </body>
    </html>
  );
}
