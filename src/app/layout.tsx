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
  title: "Gitonga Mukunji — MP, Manyatta Constituency",
  description:
    "Track every promise. Every project. Every voice. The official civic engagement site for Gitonga Mukunji, Member of Parliament for Manyatta Constituency, Embu County.",
  openGraph: {
    title: "Gitonga Mukunji — Manyatta Constituency",
    description:
      "Track every promise. Every project. Every voice.",
    type: "website",
    locale: "en_KE",
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
      <body className="min-h-dvh flex flex-col bg-cream-light text-charcoal font-body antialiased">
        {children}
      </body>
    </html>
  );
}
