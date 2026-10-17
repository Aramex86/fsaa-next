import Link from 'next/link';
import { ProjectsOverview } from '@features/projects-overview';

/* app/page.tsx — thin route: import → render. This IS the FSAA pages layer
   (the App Router itself); business scenarios live in features. */

export default function Home() {
  return (
    <section>
      <p className="crumb">Next.js App Router template</p>
      <h1>FSAA — Feature-Sliced Atomic Architecture</h1>
      <p className="pitch">
        FSD + Atomic Design with the missing decision rules:{' '}
        <strong>where does UI go?</strong>
      </p>
      <div className="chips">
        <span className="chip on">ESLint-enforced layers</span>
        <span className="chip">Projects/Orders example</span>
        <span className="chip">React 19</span>
      </div>
      <ul>
        <li>
          <Link href="/projects">Projects overview</Link> — feature owns business columns
        </li>
        <li>
          <Link href="/orders">Orders overview</Link> — second feature, same molecules, zero coupling
        </li>
      </ul>
      <p className="hint">
        Try violating a layer: import <code className="inline">@features/*</code> from another feature and
        run <code className="inline">npm run lint</code> — red.
      </p>
    </section>
  );
}