## 0.2.0 — 2026-10-21

### Added

- `AGENTS.md` machine contract: npm command contracts, FSAA layer placement rules, import boundaries, PR-flow rule — every rule carries a `<!--check: id-->` marker verified by CI
- `scripts/check-agents-md.mjs` (v4.2) — AGENTS.md drift-check: two-way binding (marker ⇄ check), real import-boundary scan (upward + cross-slice), UI fetch-free scan, colored per-rule report with timings (plain output in CI)
- CI workflow `agents-md-drift-check` (`.github/workflows/agents-md.yml`): runs the drift-check on every PR and push

### Changed

- Repository renamed `fsaa-react` → `fsaa-next` (old URL redirects)
