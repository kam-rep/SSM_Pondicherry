import type { Metadata } from "next";
import { business } from "@/config/business";
import { seo } from "@/config/seo";
import "./globals.css";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: [...seo.keywords],

  metadataBase: new URL(seo.url),

  openGraph: {
    type: seo.openGraph.type,
    title: seo.openGraph.title,
    description: seo.openGraph.description,
    images: [
      {
        url: seo.openGraph.image,
        alt: business.name,
      },
    ],
  },

  twitter: {
    card: seo.twitter.card,
    title: seo.twitter.title,
    description: seo.twitter.description,
    images: [seo.twitter.image],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={seo.locale === "en_IN" ? "en-IN" : "en"}>
      <body>{children}</body>
    </html>
  );
}