/* eslint global-require: 0 */

import fs from 'fs';
import path from 'path';

import plugin from '../src';

const rules = fs
  .readdirSync(path.resolve(__dirname, '../src/rules/'))
  .map(f => path.basename(f, '.js'));

test('all rule files should be exported by the plugin', () => {
  rules.forEach(ruleName => {
    expect(plugin.rules[ruleName]).toBe(
      require(path.join('../src/rules', ruleName)),
    );
  });
});

test('configurations', () => {
  expect(plugin.configs.recommended).not.toBe(undefined);
});

test('schemas', () => {
  rules.forEach(ruleName => {
    const rule = require(path.join('../src/rules', ruleName));
    const schema = rule.meta && rule.meta.schema && rule.meta.schema[0];
    const { type } = schema;

    expect(type).toBe('object');
  });
});

test('plugin referentially equal to prevent flat config issues', () => {
  const keys = Object.keys(plugin.flatConfigs);
  for (let i = 0; i < keys.length; i += 1) {
    const config = plugin.flatConfigs[keys[i]];
    expect(plugin).toBe(config.plugins['jsx-a11y-x']);
  }
});
