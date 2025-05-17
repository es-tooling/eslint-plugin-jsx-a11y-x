module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:import-x/recommended',
    'plugin:ft-flow/recommended',
    'prettier',
  ],
  ignorePatterns: ['lib/', 'reports/', 'examples/'],
  parser: '@babel/eslint-parser',
  plugins: ['ft-flow'],
  rules: {
    'max-len': 'off',
    'no-template-curly-in-string': 'off',
    'import-x/no-extraneous-dependencies': 'error',
  },
  settings: {
    'import-x/resolver': 'typescript',
  },
  overrides: [
    {
      files: ['src/rules/*'],
      extends: ['plugin:eslint-plugin/rules-recommended'],
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
      extends: ['plugin:eslint-plugin/tests-recommended'],
    },
    {
      files: ['__tests__/**/*'],
      env: {
        jest: true,
      },
    },
  ],
};
