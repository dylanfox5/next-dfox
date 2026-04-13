import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Dylan Fox — Freelance Web Developer",
    template: "%s | Dylan Fox",
  },
  description:
    "Dylan Fox is a freelance web developer based in Kansas City with 5+ years of experience building websites for small businesses and nonprofits using React, Next.js, and TypeScript.",
  openGraph: {
    title: "Dylan Fox — Freelance Web Developer",
    description:
      "Dylan Fox is a freelance web developer based in Kansas City with 5+ years of experience building websites for small businesses and nonprofits using React, Next.js, and TypeScript.",
    url: baseUrl,
    siteName: "Dylan Fox",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dylan Fox — Freelance Web Developer",
    description:
      "Dylan Fox is a freelance web developer based in Kansas City with 5+ years of experience building websites for small businesses and nonprofits using React, Next.js, and TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes: (string | undefined | null | false)[]): string =>
  classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
