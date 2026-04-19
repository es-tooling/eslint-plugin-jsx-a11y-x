import { createRequire } from 'module';
import path from 'path';
import { fileURLToPath } from 'url';
import { ESLint } from 'eslint';
import semver from 'semver';

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const version = ESLint.version;

let tsParserVersion;
try {
  tsParserVersion = require('@typescript-eslint/parser/package.json').version;
} catch {
  //
}

const disableNewTS = semver.satisfies(tsParserVersion, '>= 4.1') // this rule is not useful on v4.1+ of the TS parser
  ? (x) => ({ ...x, features: [...x.features, 'no-ts-new'] })
  : (x) => x;

function minEcmaVersion(features, parserOptions) {
  const minEcmaVersionForFeatures = {
    'class fields': 2022,
    'optional chaining': 2020,
    'nullish coalescing': 2020,
  };
  const result = Math.max(
    ...[]
      .concat(
        (parserOptions && parserOptions.ecmaVersion) || [],
        Object.entries(minEcmaVersionForFeatures).flatMap((entry) => {
          const f = entry[0];
          const y = entry[1];
          return features.has(f) ? y : [];
        }),
      )
      .map((y) => (y > 5 && y < 2015 ? y + 2009 : y)), // normalize editions to years
  );
  return Number.isFinite(result) ? result : undefined;
}

const NODE_MODULES = '../../node_modules';

const parsers = {
  '@BABEL_ESLINT': path.join(__dirname, NODE_MODULES, '@babel/eslint-parser'),
  TYPESCRIPT_ESLINT: path.join(
    __dirname,
    NODE_MODULES,
    'typescript-eslint-parser',
  ),
  '@TYPESCRIPT_ESLINT': path.join(
    __dirname,
    NODE_MODULES,
    '@typescript-eslint/parser',
  ),
  disableNewTS,
  babelParserOptions: function parserOptions(test, features) {
    return {
      ...test.parserOptions,
      requireConfigFile: false,
      babelOptions: {
        presets: ['@babel/preset-react'],
        plugins: [
          '@babel/plugin-syntax-do-expressions',
          '@babel/plugin-syntax-function-bind',
          ['@babel/plugin-syntax-decorators', { legacy: true }],
        ],
        parserOpts: {
          allowSuperOutsideMethod: false,
          allowReturnOutsideFunction: false,
        },
      },
      ecmaFeatures: {
        ...(test.parserOptions && test.parserOptions.ecmaFeatures),
        jsx: true,
        modules: true,
        legacyDecorators: features.has('decorators'),
      },
    };
  },
  all: function all(tests) {
    const t = tests.flatMap((test) => {
      /* eslint no-param-reassign: 0 */
      if (typeof test === 'string') {
        test = { code: test };
      }
      if ('parser' in test) {
        delete test.features;
        return test;
      }
      const features = new Set(test.features);
      delete test.features;

      const es = minEcmaVersion(features, test.parserOptions);

      function addComment(testObject, parser) {
        const extras = [
          `features: [${Array.from(features).join(',')}]`,
          `parser: ${parser}`,
        ];
        if (testObject.parserOptions) {
          extras.push(
            `parserOptions: ${JSON.stringify(testObject.parserOptions)}`,
          );
        }
        if (testObject.options) {
          extras.push(`options: ${JSON.stringify(testObject.options)}`);
        }
        if (testObject.settings) {
          extras.push(`settings: ${JSON.stringify(testObject.settings)}`);
        }

        const extraComment = `\n// ${extras.join(', ')}`;

        // Augment expected fix code output with extraComment
        const nextCode = { code: testObject.code + extraComment };
        const nextOutput = testObject.output && {
          output: testObject.output + extraComment,
        };

        // Augment expected suggestion outputs with extraComment
        // `errors` may be a number (expected number of errors) or an array of
        // error objects.
        const nextErrors = testObject.errors &&
          typeof testObject.errors !== 'number' && {
            errors: testObject.errors.map((errorObject) => {
              const nextSuggestions = errorObject.suggestions && {
                suggestions: errorObject.suggestions.map((suggestion) => ({
                  ...suggestion,
                  output: suggestion.output + extraComment,
                })),
              };

              return { ...errorObject, ...nextSuggestions };
            }),
          };

        return {
          ...testObject,
          ...nextCode,
          ...nextOutput,
          ...nextErrors,
        };
      }

      const skipBase =
        (features.has('class fields') && semver.satisfies(version, '< 8')) ||
        (es >= 2020 && semver.satisfies(version, '< 6')) ||
        features.has('no-default') ||
        features.has('bind operator') ||
        features.has('do expressions') ||
        features.has('decorators') ||
        features.has('ts') ||
        features.has('types') ||
        (features.has('fragment') && semver.satisfies(version, '< 5'));

      const skipBabel = features.has('no-babel');
      const skipNewBabel =
        skipBabel ||
        features.has('no-babel-new') ||
        !semver.satisfies(version, '^7.5.0') || // require('@babel/eslint-parser/package.json').peerDependencies.eslint
        features.has('types') ||
        features.has('ts');
      const skipTS =
        semver.satisfies(version, '<= 5') || // TODO: make these pass on eslint 5
        features.has('no-ts') ||
        features.has('jsx namespace') ||
        features.has('bind operator') ||
        features.has('do expressions');
      const tsOld = !skipTS && !features.has('no-ts-old');
      const tsNew = !skipTS && !features.has('no-ts-new');

      const testObjects = [];

      if (!skipBase) {
        testObjects.push(
          addComment(
            {
              ...test,
              ...(typeof es === 'number' && {
                parserOptions: { ...test.parserOptions, ecmaVersion: es },
              }),
            },
            'default',
          ),
        );
      }

      if (!skipNewBabel) {
        testObjects.push(
          addComment(
            {
              ...test,
              parser: parsers['@BABEL_ESLINT'],
              parserOptions: parsers.babelParserOptions(test, features),
            },
            '@babel/eslint-parser',
          ),
        );
      }

      if (tsOld) {
        testObjects.push(
          addComment(
            { ...test, parser: parsers.TYPESCRIPT_ESLINT },
            'typescript-eslint',
          ),
        );
      }

      if (tsNew) {
        testObjects.push(
          addComment(
            { ...test, parser: parsers['@TYPESCRIPT_ESLINT'] },
            '@typescript-eslint/parser',
          ),
        );
      }

      return testObjects;
    });
    return t;
  },
};

export default parsers;
