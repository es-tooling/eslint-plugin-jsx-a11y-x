import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import plugin from '../src/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const rules = fs
  .readdirSync(path.resolve(__dirname, '../src/rules/'))
  .map((f) => path.basename(f, '.js'));

test('all rule files should be exported by the plugin', async () => {
  for (const ruleName of rules) {
    const mod = await import(path.join('../src/rules', `${ruleName}.js`));
    expect(plugin.rules[ruleName]).toBe(mod.default);
  }
});

test('configurations', () => {
  expect(plugin.configs.recommended).not.toBe(undefined);
});

test('schemas', async () => {
  for (const ruleName of rules) {
    const mod = await import(path.join('../src/rules', `${ruleName}.js`));
    const rule = mod.default;
    const schema = rule.meta.schema[0];
    // Some rules don't have a schema.
    if (schema) {
      const { type } = schema;
      expect(type).toBe('object');
    }
  }
});

test('plugin referentially equal to prevent flat config issues', () => {
  const keys = Object.keys(plugin.flatConfigs);
  for (let i = 0; i < keys.length; i += 1) {
    const config = plugin.flatConfigs[keys[i]];
    expect(plugin).toBe(config.plugins['jsx-a11y-x']);
  }
});
