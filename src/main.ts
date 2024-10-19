import type {Rule, ESLint} from 'eslint';
import {configFactory as configRecommended} from './configs/recommended.js';
import {config as configLegacyRecommended} from './configs/legacy-recommended.js';

export const rules: Record<string, Rule.RuleModule> = {};

const plugin: ESLint.Plugin = {rules};

export const configs: ESLint.Plugin['configs'] = {
  recommended: configLegacyRecommended,
  'flat/recommended': configRecommended(plugin)
};
