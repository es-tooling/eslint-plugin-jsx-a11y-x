import { version as eslintVersion } from 'eslint/package.json';
import semver from 'semver';

const usingLegacy = semver.major(eslintVersion) < 9;

const defaultParserOptions = {
  ecmaFeatures: {
    experimentalObjectRestSpread: true,
    jsx: true,
  },
};

const defaultLegacyParserOptions = {
  ...defaultParserOptions,
  ecmaVersion: 2018,
};

const defaultLanguageOptions = {
  ecmaVersion: 'latest',
  parserOptions: {
    ...defaultParserOptions,
  },
};

export default function parserOptionsMapper({
  code,
  errors,
  options = [],
  languageOptions = {},
  settings = {},
}) {
  const testCase = usingLegacy
    ? {
        code,
        options,
        parserOptions: {
          ...defaultLegacyParserOptions,
          ...languageOptions,
        },
        settings,
      }
    : {
        code,
        options,
        languageOptions: {
          ...defaultLanguageOptions,
          ...languageOptions,
        },
        settings,
      };

  if (errors != null && errors.length) testCase.errors = errors;

  return testCase;
}
