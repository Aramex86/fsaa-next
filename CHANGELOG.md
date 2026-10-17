# Changelog — fsaa-react (Next.js template)

All notable changes. Format: Keep a Changelog; versioning: SemVer.

## 0.1.0 — 2026-10-17

### Added
- FSAA layer structure: `src/app`, `src/pages` (Next.js App Router as pages layer), `src/features`, `src/entities`, `src/shared/ui` with path aliases (`@app/@pages/@features/@entities/@shared`)
- ESLint flat config enforcing layer boundaries: imports flow down only, features never import each other (the graduation guarantee), `import/no-cycle`
- Projects/Orders canonical example: generic `DataTable` molecule in shared, business columns in features, mocked entity data access
- Dark UI theme mirroring the FSAA docs site: topbar with tri-bar brand, status pills, chiplists, zebra tables
- Thin routes convention with documented mapping for layouts / loading / error / route groups / parallel slots
- CI: typecheck + lint on every PR and every push to main