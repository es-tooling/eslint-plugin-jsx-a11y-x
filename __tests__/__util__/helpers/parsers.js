import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function babelParserOptions(test) {
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
    },
  };
}

const NODE_MODULES = '../../node_modules';

const parsers = {
  all: function all(tests) {
    const t = tests.flatMap((test) => {
      function addComment(testObject, parser) {
        const extras = [`parser: ${parser}`];
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

      const testObjects = [];

      testObjects.push(addComment({ ...test }, 'default'));

      testObjects.push(
        addComment(
          {
            ...test,
            parser: path.join(__dirname, NODE_MODULES, '@babel/eslint-parser'),
            parserOptions: babelParserOptions(test),
          },
          '@babel/eslint-parser',
        ),
      );

      testObjects.push(
        addComment(
          {
            ...test,
            parser: path.join(
              __dirname,
              NODE_MODULES,
              '@typescript-eslint/parser',
            ),
          },
          '@typescript-eslint/parser',
        ),
      );

      return testObjects;
    });
    return t;
  },
};

export default parsers;
