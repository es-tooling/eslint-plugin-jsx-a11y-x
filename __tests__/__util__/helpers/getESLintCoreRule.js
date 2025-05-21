import { version } from 'eslint/package.json';
import semver from 'semver';

const isESLintV8 = semver.major(version) >= 8;

const getESLintCoreRule = ruleId =>
  isESLintV8
    ? require('eslint/use-at-your-own-risk').builtinRules.get(ruleId)
    : require(`eslint/lib/rules/${ruleId}`);

export default getESLintCoreRule;
