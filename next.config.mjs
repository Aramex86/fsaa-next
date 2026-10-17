/**
 * FSAA boilerplate — Next.js App Router configuration.
 *
 * Static export by default ("fsaa init --template next" target shape).
 * Remove `output: 'export'` for server features (ISR, server actions).
 * FSAA layers live in src/ — the app/ folder only holds thin route files.
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true }
};

export default nextConfig;