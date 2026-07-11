import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gitonga Mukunji — Manyatta Constituency",
  description:
    "The official website of Gitonga Mukunji, Member of Parliament for Manyatta Constituency, Embu County. Track the record, follow the work, raise your voice.",
  openGraph: {
    title: "Gitonga Mukunji — Manyatta Constituency",
    description: "Track the record. Follow the work. Raise your voice.",
    type: "website",
    locale: "en_KE",
    siteName: "Gitonga Mukunji",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-dvh flex flex-col bg-night text-warm-white font-body antialiased selection:bg-gold/30 selection:text-warm-white">
        {children}
      </body>
    </html>
  );
}
