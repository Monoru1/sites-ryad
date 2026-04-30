import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Latinum Quest — Révision Latin 4e HL',
  description: 'Plateforme interactive premium pour réviser le programme de latin de 4e humanité littéraire.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
