import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import eslintPlugin from 'eslint-plugin-eslint-plugin';
import importX from 'eslint-plugin-import-x';
import ftFlow from 'eslint-plugin-ft-flow';
import { FlatCompat } from '@eslint/eslintrc';
import babelParser from '@babel/eslint-parser';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default defineConfig([
  {
    ignores: ['.yarn', 'coverage', 'lib', 'reports', 'examples'],
  },
  {
    files: [
      'src/**/*.js',
      'scripts/**/*.js',
      '__tests__/**/*.js',
      '__mocks__/**/*.js',
    ],
    languageOptions: {
      globals: globals.node,
      parser: babelParser,
    },
    extends: [js.configs.recommended, importX.flatConfigs.recommended],
    rules: {
      'no-template-curly-in-string': 'off',
      'import-x/no-extraneous-dependencies': 'error',
    },
    settings: {
      'import-x/resolver-next': createTypeScriptImportResolver(),
    },
  },
  ...compat.config(ftFlow.configs.recommended).map((config) => ({
    ...config,
    files: [
      'src/**/*.js',
      'flow/*.js',
      '__mocks__/**/*.js',
      '__tests__/**/*.js',
    ],
  })),
  {
    files: ['src/rules/*'],
    extends: [eslintPlugin.configs.recommended],
    rules: {
      'eslint-plugin/require-meta-docs-description': [
        'error',
        {
          pattern: '^(Enforce|Require|Disallow)',
        },
      ],
      'eslint-plugin/require-meta-docs-url': [
        'error',
        {
          pattern:
            'https://github.com/es-tooling/eslint-plugin-jsx-a11y-x/tree/HEAD/docs/rules/{{name}}.md',
        },
      ],
      'eslint-plugin/require-meta-type': 'off',
      // disable temporarily
      'eslint-plugin/prefer-message-ids': 'off',
    },
  },
  {
    files: ['__tests__/src/rules/*.js'],
    extends: [eslintPlugin.configs.recommended],
  },
  {
    files: ['__tests__/**/*'],
    languageOptions: {
      globals: globals.jest,
    },
  },
]);
