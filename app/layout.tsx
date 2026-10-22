import DiscoveryModal from "@/components/ui/DiscoveryModal";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nivarantechnologies.com"),
  title: "Nivaran Technologies | AI-First Product Engineering",
  description:
    "Nivaran Technologies is a Mumbai-based product studio building AI-driven software, web and mobile apps for safety, finance, impact and everyday life.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Nivaran Technologies",
    description: "AI-first Product Engineering & Technology Consulting",
    url: "https://nivarantechnologies.com",
    siteName: "Nivaran Technologies",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Nivaran Technologies" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nivaran Technologies",
    description: "AI-first Product Engineering & Technology Consulting",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Navbar />

        <main>{children}</main>

        <Footer />

        <DiscoveryModal />

      </body>
    </html>
  );
}
