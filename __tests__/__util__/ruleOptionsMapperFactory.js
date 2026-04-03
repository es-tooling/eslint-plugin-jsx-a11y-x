export default function ruleOptionsMapperFactory(ruleOptions = []) {
  return ({ code, errors, options, parserOptions, settings }) => {
    return {
      code,
      errors,
      // Flatten the array of objects in an array of one object.
      options: [
        Object.fromEntries(
          (options || [])
            .concat(ruleOptions)
            .flatMap((item) => Object.entries(item)),
        ),
      ],
      parserOptions,
      settings,
    };
  };
}
