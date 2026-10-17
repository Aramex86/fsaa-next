import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

/* app/layout.tsx — FSAA app layer: global providers/config live here.
   Root layout = composition of providers; no business logic. */

export const metadata: Metadata = {
  title: 'FSAA starter — Projects/Orders example',
  description:
    'Feature-Sliced Atomic Architecture boilerplate: Next.js App Router, layers, ESLint-enforced boundaries.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: '16px 24px', borderBottom: '1px solid #e2e8f0', display: 'flex', gap: 24 }}>
          <strong>FSAA starter</strong>
          <nav style={{ display: 'flex', gap: 16 }}>
            <Link href="/projects">Projects</Link>
            <Link href="/orders">Orders</Link>
          </nav>
          <a
            href="https://github.com/Aramex86/fsaa"
            style={{ marginLeft: 'auto', color: '#64748b' }}
          >
            methodology ↗
          </a>
        </header>
        <main style={{ padding: 24, maxWidth: 860 }}>{children}</main>
      </body>
    </html>
  );
}