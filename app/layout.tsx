import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AEGIS II — Institutional Intelligence Platform',
  description: 'AEGIS II delivers sovereign, auditable intelligence infrastructure for institutions that demand operational certainty. Request access to the platform.',
  openGraph: {
    title: 'AEGIS II — Institutional Intelligence Platform',
    description: 'AEGIS II delivers sovereign, auditable intelligence infrastructure for institutions that demand operational certainty.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
