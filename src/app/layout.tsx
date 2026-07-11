import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
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
      className={`${playfair.variable} scroll-smooth`}
    >
      <body className="min-h-dvh flex flex-col bg-pearl text-charcoal font-serif antialiased">
        {children}
      </body>
    </html>
  );
}
