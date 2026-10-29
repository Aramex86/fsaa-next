## 0.3.0 — 2026-10-21
## [29.10.2026] — drift-check v4.6: единый источник истины (eslint-plugin-fsaa)

- `eslint-plugin-fsaa@0.1.1` в devDeps; `fsaa/recommended` вшит в eslint.config.mjs → `pnpm lint` гоняет те же правила, что и drift-check.
- `scripts/check-agents-md.mjs` **v4.6**: код-проверки (no-ui-fetch, boundary-imports, ui-location-содержимое) делегированы правилам плагина внутри drift-check; скрипт остался точкой входа контракта (маркеры AGENTS.md, двухсторонняя привязка, команды, lockfile, script-policy, file-paths). Внутренние grep-сканы удалены — одна реализация правил (npm-пакет), ноль дрейфа между lint и CI-drift.
- `@typescript-eslint/parser` стал явным devDep (раньше приходил транзитивно).
- Верификация: clean (test/typecheck/lint/drift green), негатив 5/5 инжекций ловится через плагин, инжекции откатны.

### Changed

- Package manager contract: pnpm (single lockfile rule) — `package-lock.json` removed, `pnpm-lock.yaml` canonical, `"packageManager"` pinned

### Added

- drift-check v4.3: `single-lockfile` rule (11 contract rules total)
