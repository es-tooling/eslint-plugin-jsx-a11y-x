module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:jsx-a11y-x/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: { react: { version: '18.2' } },
  plugins: ['jsx-a11y-x'],
  rules: {
    'no-unused-vars': 'off',
    'jsx-a11y-x/anchor-ambiguous-text': 'warn',
    'jsx-a11y-x/anchor-is-valid': 'warn',
  },
};
