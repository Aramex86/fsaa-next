# AGENTS.md — FSAA machine contract (fsaa-next)

## Who you are

You are a coding agent working on an FSAA Next.js 15 App Router app. You follow this contract.
Every rule below carries a check marker and is verified by CI. If CI is red, fix the code OR the rule — never bypass the check.

## Commands

<!--check: cmd-npm-install -->  `npm install` — install dependencies
<!--check: cmd-npm-dev -->      `npm run dev`
<!--check: cmd-npm-lint -->     `npm run lint` — ESLint 9, zero errors allowed
<!--check: cmd-npm-typecheck --> `npm run typecheck` — tsc, zero errors
<!--check: cmd-npm-build -->    `npm run build` — must pass

## Layers and where UI goes

<!--check: ui-location -->

Layers (imports flow only downward, enforced by eslint.config.mjs):

- `app/` — ROUTES ONLY: app/<route>/page.tsx + layout.tsx. No business logic.
- `src/features/<feature>/` — scenarios: index.ts (public API), ui/ (feature components), config/ (columns)
- `src/entities/` — cross-feature data models
- `src/shared/` — ui primitives (src/shared/ui), config, libs
  New scenario UI → src/features/<feature>/ui/, never app/. Route files stay thin (compose feature exports).

## Import boundaries

<!--check: boundary-imports -->

Enforced by eslint.config.mjs: no upward imports, features never import features, no cycles. Verified by npm run lint on every PR.

## Data

<!--check: no-ui-fetch -->

src/features/**/ui/**, src/shared/ui/** and app/** pages must NOT call fetch/axios directly. Data access belongs to feature logic (index.ts / entity API).

## Files

<!--check: file-paths -->

- app/layout.tsx — root shell
- app/page.tsx — home
- eslint.config.mjs — boundaries (do not relax)

## Git & PR

<!--check: pr-flow -->

Never commit to main. Branches feat/<topic>, fix/<topic>. PR needs green lint+typecheck+drift-check.

## Do NOT touch

package-lock.json by hand, next-env.d.ts, .github/workflows/\* without explicit task.
