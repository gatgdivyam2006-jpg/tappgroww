import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://tapgrow.in"),
  title: "TapGrow | NFC Digital Profiles",
  description:
    "TapGrow creates NFC-enabled products that instantly connect people, businesses, and opportunities through smart digital profiles.",
  keywords: [
    "TapGrow",
    "NFC business card",
    "digital profile",
    "Tap Card",
    "smart visiting card",
    "QR profile"
  ],
  openGraph: {
    title: "TapGrow | Your Identity. One Tap Away.",
    description:
      "Share your profile, portfolio, business, reviews and contact information instantly with TapGrow NFC products.",
    type: "website",
    images: ["/images/tapgrow-product-suite.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "TapGrow | Your Identity. One Tap Away.",
    description:
      "Premium NFC products for smart digital profiles, reviews, portfolios and contact sharing."
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <GoogleTagManager gtmId="GTM-WPRBBPTG" />
        {children}
      </body>
    </html>
  );
}
