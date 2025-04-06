import { Analytics } from "@vercel/analytics/react";
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = { title: 'My IndieProfile',
description: 'Personal portfolio of Hito.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
  <link rel="icon" href="/webicon/favicon.ico" sizes="any" />
  <link rel="icon" href="/webicon/favicon.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="/webicon/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/webicon/favicon-16x16.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/webicon/favicon-32x32.png" />
</head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

