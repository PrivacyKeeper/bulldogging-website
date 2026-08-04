import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SchemaMarkup from "./components/SchemaMarkup";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Bulldogging.pro - #1 Steer Wrestling App | Hazers, Mount Money & Community",
  description:
    "The everything app for steer wrestling. Find a hazer at the rodeo you entered, find a horse to get on, settle the credit and the mount money on a ledger you both trust, and connect with the whole bulldogging community. Built for amateur, jackpot and college steer wrestlers.",
  keywords:
    "steer wrestling, bulldogging, steer wrestling app, bulldogging app, hazer, hazing, mount money, bulldogging horse, steer wrestling rules, legal fall, steer wrestling times, jackpot bulldogging, NHSRA steer wrestling, NIRA steer wrestling, amateur rodeo, steer wrestling training, rodeo injury tracking",
  authors: [{ name: "Bulldogging.pro" }],
  creator: "Bulldogging.pro",
  publisher: "Bulldogging.pro",
  metadataBase: new URL("https://www.bulldogging.pro"),
  alternates: {
    canonical: "https://www.bulldogging.pro",
  },
  openGraph: {
    title: "Bulldogging.pro - #1 Steer Wrestling App",
    description:
      "You cannot do this alone. Hazer coordination, mount money, steer history, and the whole steer wrestling community in one app.",
    url: "https://www.bulldogging.pro",
    siteName: "Bulldogging.pro",
    type: "website",
    images: [
      {
        url: "https://www.bulldogging.pro/logo.png",
        width: 1200,
        height: 630,
        alt: "Bulldogging.pro",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bulldogging.pro - #1 Steer Wrestling App",
    description:
      "You cannot do this alone. Hazers, horses, mount money, and the whole bulldogging community.",
    images: ["https://www.bulldogging.pro/logo.png"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable + " antialiased"}>
        <SchemaMarkup />
        {children}
      </body>
    </html>
  );
}
