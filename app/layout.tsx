import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"]
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"]
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono"
});

export const metadata: Metadata = {
  title: "Léna Marchetti — Photographie Éditoriale Paris",
  description:
    "Portfolio de Léna Marchetti, photographe éditoriale et portraitiste luxe à Paris. Direction visuelle, campagnes premium et portraits à forte présence."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${cormorant.variable} ${dmSans.variable} ${geistMono.variable} bg-noir text-ivory antialiased`}>
        {children}
      </body>
    </html>
  );
}
