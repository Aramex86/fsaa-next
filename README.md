# FSAA — Feature-Sliced Atomic Architecture (Next.js boilerplate)

**FSAA is FSD + Atomic Design with an answer to the question both leave open: *where does UI go?***

This is the official FSAA starter for **Next.js (App Router)**. Building a plain-React SPA (Vite) instead? Use the sibling template: [github.com/Aramex86/fsaa-vite](https://github.com/Aramex86/fsaa-vite) — same layers, same rules.

This is the official FSAA starter: [Next.js 15 App Router] + React 19 + TypeScript, with FSAA layers, path aliases and **ESLint-enforced layer boundaries** — the architecture cannot erode, because wrong imports fail lint, not code review.

> Methodology & decision rules: [github.com/Aramex86/fsaa](https://github.com/Aramex86/fsaa) · Live docs: [aramex86.github.io/fsaa](https://aramex86.github.io/fsaa/)

## Quick start

```bash
npm install
npm run dev       # http://localhost:3000 — Projects/Orders example inside
npm run lint      # layer boundaries enforced here
npm run typecheck
```

## Layer stack (imports flow only downward)

| Layer | Folder | Responsibility | Imports from |
|---|---|---|---|
| `app` | `src/app` + root `app/` routes | providers, global config | `pages` (via routes), `features`, `shared` |
| `pages` | `src/app/**/page.tsx` **(thin routes)** | composition only | `features`, `shared` |
| `features` | `src/features` | user scenarios **and** large page-level blocks | `entities`, `shared` |
| `entities` | `src/entities` | business models + data access | `shared` |
| `shared` | `src/shared` | design tokens, atoms/molecules, utilities | external libs |

**No `widgets` layer** — features double as page-level blocks. Route files stay thin:

```tsx
// app/projects/page.tsx — the FSAA "pages" layer IS the App Router
import { ProjectsOverview } from '@/features/projects-overview';

export default function ProjectsPage() {
  return <ProjectsOverview />;
}
```

Layouts, `loading.tsx` / `error.tsx`, route groups and parallel routes are **composition-layer concerns** — they belong to `app/`+routes, they never contain business logic; a slot references a feature, it does not implement one.

## The three decision rules (enforced)

1. **Graduation pattern** — feature-local UI lives flat in `features/<name>/ui/`. A component graduates to `shared/ui` only after a **second independent feature** needs it (trigger), the **boundary test** passes (describe it without mentioning users/orders), and the promotion **PR moves the import in the same changeset** — the old path dies mechanically, lint rejects cross-feature imports.
2. **Boundary test for shared** — *remove the component: can you still describe it without users/orders/projects?* Yes → `shared`. No → feature.
3. **Organisms are eliminated** — a large composition **is a feature**; `shared/ui` holds atoms and molecules only.

## The canonical example inside (Projects/Orders)

```
src/
  shared/ui/atoms/TableCell.tsx            # generic
  shared/ui/molecules/table/DataTable.tsx  # generic: columns, data, isLoading
  entities/project/                        # types + data access (mocked)
  features/projects-overview/
    config/projectColumns.tsx              # business columns from shared atoms
    ui/ProjectsOverview.tsx                # wires useProjects + columns + DataTable
  features/orders-overview/                # same pattern, second entity
```

The table stays generic in `shared`; business-specific columns live in features. Break the rule — copy `projectColumns` into the orders feature — and lint stops you: **features do not import each other**.

## What's included

- Path aliases `@app/@pages/@features/@entities/@shared` (tsconfig)
- `.eslintrc.js` with layered `no-restricted-imports` + `import/no-cycle` — the actual enforcement of the three rules
- Projects/Orders worked example with mocked data access
- Next.js App Router: FSAA page layer = the router itself, no `_app`/`_pages` prefixes

## Roadmap

| Phase | Focus | Status |
|---|---|---|
| 0 | Repo, honest README, CONTRIBUTING | ✅ [Aramex86/fsaa](https://github.com/Aramex86/fsaa) |
| 1 | Docs site | ✅ [aramex86.github.io/fsaa](https://aramex86.github.io/fsaa/) |
| 2 | **This boilerplate (Next.js)** + plain-React twin ([fsaa-vite](https://github.com/Aramex86/fsaa-vite)) | 🚧 this repo |
| 3 | Architecture import checker (standalone), CI action | — |
| 4 | Promotion, adoption feedback loop | — |

## Contributing

Placement questions are the most valuable contributions: open an issue in [the methodology repo](https://github.com/Aramex86/fsaa) with your case + boundary-test answer.

## License

MIT © Veaceslav Bezusco