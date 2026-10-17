import Link from 'next/link';

/* app/page.tsx —thin route: import → render. This IS the FSAA pages layer
   (the App Router itself); business scenarios live in features. */

export default function Home() {
  return (
    <section>
      <h1>FSAA — Feature-Sliced Atomic Architecture</h1>
      <p>FSD + Atomic Design with the missing decision rules: <em>where does UI go?</em></p>
      <ul>
        <li>
          <Link href="/projects">Projects overview</Link> — feature owns business columns
        </li>
        <li>
          <Link href="/orders">Orders overview</Link> — second feature, same molecules, zero coupling
        </li>
      </ul>
      <p style={{ color: '#64748b' }}>
        Try violating a layer: import <code>@features/*</code> from another feature and run{' '}
        <code>npm run lint</code> — red.
      </p>
    </section>
  );
}