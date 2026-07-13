import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AEGIS II — Institutional-Grade Autonomous Business OS',
  description: 'Request access to AEGIS II, the next-generation autonomous business operating system for institutional-grade operations.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
