import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans, Geist_Mono } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['400', '500', '600', '700']
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '700']
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  weight: ['400']
});

export const metadata: Metadata = {
  title: 'Léna Marchetti — Photographie Éditoriale Paris',
  description:
    "Photographie éditoriale et portrait de luxe à Paris. Léna Marchetti façonne des images à l'esthétique précise, silencieuse et intensément contemporaine."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${cormorant.variable} ${dmSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
