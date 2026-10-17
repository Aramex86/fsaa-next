'use strict';

/**
 * FSAA — ESLint flat config (ESLint 9): layer boundaries as lint errors.
 *
 * Layers: shared <- entities <- features <- (Next.js app routes) <- app
 * Enforced mechanically (lint, not review):
 *   1. Imports flow only downward (no upward imports).
 *   2. Features never import each other — code moves between features
 *      ONLY via entities (data) or shared (UI), i.e. via graduation.
 *   3. No circular imports (import/no-cycle).
 */

import { FlatCompat } from '@eslint/eslintrc';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import importPlugin from 'eslint-plugin-import';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const upwardMessage = 'FSAA upward import: use only layers BELOW your own.';
const appMessage = 'FSAA: nothing imports from app/ — it is the top layer.';

/* Banned import groups per layer (beyond the universal app/ ban) */
const sharedRules = {
  'no-restricted-imports': [
    'error',
    {
      patterns: [
        { group: ['**/app/**', 'app/**'], message: appMessage },
        { group: ['@features/*', 'src/features/**'], message: upwardMessage },
        { group: ['@pages/*'], message: upwardMessage },
      ],
    },
  ],
};

const entitiesRules = {
  'no-restricted-imports': [
    'error',
    {
      patterns: [
        { group: ['**/app/**', 'app/**'], message: appMessage },
        { group: ['@features/*', '@pages/*', 'src/features/**'], message: upwardMessage },
      ],
    },
  ],
};

const featuresRules = {
  /* THE graduation guarantee: a feature cannot reach another feature.
     Shared code moves via @entities (data) or @shared (UI) exclusively. */
  'no-restricted-imports': [
    'error',
    {
      patterns: [
        { group: ['**/app/**', 'app/**'], message: appMessage },
        { group: ['@features/*', '@pages/*', 'src/features/**', 'src/pages/**'], message: 'FSAA: features do not import each other — move code via @entities (data) or @shared (UI), or graduate it.' },
      ],
    },
  ],
};

const config = [
  ...compat.extends('next/core-web-vitals'),
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    plugins: { import: importPlugin },
    settings: {
      'import/resolver': {
        typescript: { alwaysTryTypes: true, project: [path.join(__dirname, 'tsconfig.json')] },
      },
    },
    rules: {
      'import/no-cycle': ['error', { maxDepth: '∞' }],
    },
  },
  {
    files: ['src/shared/**/*.{ts,tsx}'],
    ignores: ['**/index.ts'],
    rules: sharedRules,
  },
  {
    files: ['src/entities/**/*.{ts,tsx}'],
    ignores: ['**/index.ts'],
    rules: entitiesRules,
  },
  {
    files: ['src/features/**/*.{ts,tsx}'],
    ignores: ['**/index.ts'],
    rules: featuresRules,
  },
  {
    /* Next.js route files are pages+app layer composition roots */
    files: ['app/**/page.tsx', 'app/**/layout.tsx'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [{ group: ['**/app/**', 'app/**'], message: appMessage }],
        },
      ],
    },
  },
];

export default config;