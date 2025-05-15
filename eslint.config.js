const {configs: eslintConfigs} = require('@eslint/js');
const pluginPlugin = require('eslint-plugin-eslint-plugin');

module.exports = [
  {
    ...eslintConfigs.recommended,
    files: ['src/**/*.js'],
  },
  {
    ...pluginPlugin.configs['rules-recommended'],
    files: ['src/rules/*'],
  },
  {
    ...pluginPlugin.configs['tests-recommended'],
    files: ['__tests__/**/*'],
  },
  {
    rules: {
      "eslint-plugin/require-meta-docs-description": ["error", { "pattern": "^(Enforce|Require|Disallow)" }],
      "eslint-plugin/require-meta-docs-url": [
        "error",
        { "pattern": "https://github.com/es-tooling/eslint-plugin-jsx-a11y-x/tree/HEAD/docs/rules/{{name}}.md" },
      ],
      "eslint-plugin/require-meta-type": "off",
    }
  }
];
