import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@shared/config/site';
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
        <header className="topbar">
          <Link href="/" className="brand">
            <svg viewBox="0 0 26 26" aria-hidden>
              <rect x="3" y="3" width="20" height="5" rx="1.5" fill="#7ab8ff" />
              <rect x="3" y="10.5" width="20" height="5" rx="1.5" fill="#43e0bd" />
              <rect x="3" y="18" width="20" height="5" rx="1.5" fill="#e0c96a" />
            </svg>
            <span>
              <b>{SITE.name} starter</b>
              <small>Next.js App Router template</small>
            </span>
          </Link>
          <div className="top-spacer" />
          <div style={{ display: 'flex', gap: 8 }}>
            <span className="pill live">FSAA layers enforced</span>
            <a
              href="https://github.com/Aramex86/fsaa"
              target="_blank"
              rel="noreferrer"
              className="pill hide-sm"
            >
              methodology ↗
            </a>
          </div>
        </header>
        <div className="page">{children}</div>
      </body>
    </html>
  );
}