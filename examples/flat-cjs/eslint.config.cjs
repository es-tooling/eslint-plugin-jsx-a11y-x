const globals = require('globals');
const js = require('@eslint/js');
const jsxA11yX = require('eslint-plugin-jsx-a11y-x');

module.exports = [
  js.configs.recommended,
  jsxA11yX.flatConfigs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
    ignores: ['dist', 'eslint.config.cjs'],
    rules: {
      'no-unused-vars': 'off',
      'jsx-a11y-x/anchor-ambiguous-text': 'warn',
      'jsx-a11y-x/anchor-is-valid': 'warn',
    },
  },
];
