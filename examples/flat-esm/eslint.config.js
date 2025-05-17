import globals from 'globals';
import js from '@eslint/js';
import jsxA11yX from 'eslint-plugin-jsx-a11y-x';

export default [
  js.configs.recommended,
  jsxA11yX.flatConfigs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
    ignores: ['dist', 'eslint.config.js'],
    rules: {
      'no-unused-vars': 'off',
      'jsx-a11y-x/anchor-ambiguous-text': 'warn',
      'jsx-a11y-x/anchor-is-valid': 'warn',
    },
  },
];
