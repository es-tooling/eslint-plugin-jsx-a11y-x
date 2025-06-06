/** @flow */

type ESLintTestRunnerTestCase = {
  code: string,
  errors: ?Array<{ message: string, type: string }>,
  options: ?Array<mixed>,
  parserOptions: ?Array<mixed>,
  settings?: { [string]: mixed },
};

type RuleOptionsMapperFactoryType = (
  params: ESLintTestRunnerTestCase,
) => ESLintTestRunnerTestCase;

export default function ruleOptionsMapperFactory(
  ruleOptions: Array<mixed> = [],
): RuleOptionsMapperFactoryType {
  return ({
    code,
    errors,
    options,
    parserOptions,
    settings,
  }: ESLintTestRunnerTestCase): ESLintTestRunnerTestCase => {
    return {
      code,
      errors,
      // Flatten the array of objects in an array of one object.
      options: [
        Object.fromEntries(
          (options || [])
            .concat(ruleOptions)
            .flatMap(item => Object.entries(item)),
        ),
      ],
      parserOptions,
      settings,
    };
  };
}
