import { expect, test } from 'vitest';
import { ESLint } from 'eslint';
import semver from 'semver';
import parserOptionsMapper from '../../__util__/parserOptionsMapper.js';

const eslintVersion = ESLint.version;
const usingLegacy = semver.major(eslintVersion) < 9;

test('parserOptionsMapper', () => {
  const expectedResult = usingLegacy
    ? {
        code: '<div />',
        errors: [],
        options: {},
        parserOptions: {
          ecmaVersion: 2018,
          ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
          },
        },
        settings: {},
      }
    : {
        code: '<div />',
        errors: [],
        options: {},
        languageOptions: {
          ecmaVersion: 'latest',
          parserOptions: {
            ecmaFeatures: {
              experimentalObjectRestSpread: true,
              jsx: true,
            },
          },
        },
        settings: {},
      };

  expect(
    parserOptionsMapper({
      code: '<div />',
      errors: [],
      options: {},
    }),
  ).toEqual(expectedResult);

  const expectedResult2 = usingLegacy
    ? {
        code: '<div />',
        errors: [],
        options: {},
        parserOptions: {
          ecmaVersion: 5,
          ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
          },
        },
        settings: {},
      }
    : {
        code: '<div />',
        errors: [],
        options: {},
        languageOptions: {
          ecmaVersion: 5,
          parserOptions: {
            ecmaFeatures: {
              experimentalObjectRestSpread: true,
              jsx: true,
            },
          },
        },
        settings: {},
      };
  expect(
    parserOptionsMapper({
      code: '<div />',
      errors: [],
      options: {},
      languageOptions: {
        ecmaVersion: 5,
      },
    }),
  ).toEqual(expectedResult2);
});
