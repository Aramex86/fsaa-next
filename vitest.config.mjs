import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';

/* vitest aliases = tsconfig paths of this template.
   Without it, tests that import any @-aliased module (e.g. a feature component
   importing @shared/ui) fail with "Cannot find package". The Vite template
   gets this for free from vite.config.ts; the Next template has no Vite config,
   so it pins its own here. Keep both in sync with tsconfig.json. */

export default defineConfig({
  // test files render JSX at runtime (column render() fns) — automatic runtime
  // keeps them standalone without @vitejs/plugin-react (Next compiles app code itself)
  esbuild: { jsx: 'automatic' },
  resolve: {
    alias: {
      '@app': resolve('./app'),
      '@pages': resolve('./src/pages'),
      '@features': resolve('./src/features'),
      '@entities': resolve('./src/entities'),
      '@shared': resolve('./src/shared'),
    },
  },
  test: {
    environment: 'node',
  },
});