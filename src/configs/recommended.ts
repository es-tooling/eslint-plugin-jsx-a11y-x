import type {ESLint, Linter} from 'eslint';

export const configFactory = (plugin: ESLint.Plugin): Linter.FlatConfig => ({
  plugins: {
    'jsx-a11y-x': plugin
  },

  rules: {}
});
