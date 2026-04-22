import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CRISOFI — ORO',
  description: "A concentrated golden goat's milk soak, born from the warmth of the Mediterranean.",
  openGraph: {
    title: 'CRISOFI — ORO',
    description: "A concentrated golden goat's milk soak, born from the warmth of the Mediterranean.",
    siteName: 'CRISOFI',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garant:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Cinzel:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
