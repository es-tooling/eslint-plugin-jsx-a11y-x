const eslintjs = require('@eslint/js');
const { defineConfig } = require('eslint/config');
const globals = require('globals');
const eslintPlugin = require('eslint-plugin-eslint-plugin');
const importPlugin = require('eslint-plugin-import-x');
const flowPlugin = require('eslint-plugin-ft-flow');
const { FlatCompat } = require('@eslint/eslintrc');
const babelParser = require('@babel/eslint-parser');
const prettierConfig = require('eslint-config-prettier');

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = defineConfig([
  {
    ignores: ['lib', 'reports', 'examples'],
  },
  {
    files: [
      'src/**/*.js',
      'scripts/**/*.js',
      '__tests__/**/*.js',
      '__mocks__/**/*.js',
    ],
    plugins: {
      eslint: eslintjs,
      'eslint-plugin': eslintPlugin,
      'ft-flow': flowPlugin,
      'import-x': importPlugin.flatConfigs.recommended.plugins['import-x'],
    },
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parser: babelParser,
    },
    extends: [
      eslintjs.configs.recommended,
      importPlugin.flatConfigs.recommended,
    ],
    rules: {
      ...prettierConfig.rules,
      'no-template-curly-in-string': 'off',
      'import-x/no-extraneous-dependencies': 'error',
    },
    settings: {
      'import-x/resolver': 'typescript',
    },
  },
  ...compat.config(flowPlugin.configs.recommended).map(config => ({
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
    extends: [eslintPlugin.configs['flat/rules-recommended']],
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
    extends: [eslintPlugin.configs['flat/tests-recommended']],
  },
  {
    files: ['__tests__/**/*'],
    languageOptions: {
      globals: {
        jest: true,
      },
    },
  },
]);
