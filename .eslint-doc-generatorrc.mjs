import { format, resolveConfig } from 'prettier';

const prettierOptions = await resolveConfig('./README.md');

/** @type {import('eslint-doc-generator').GenerateOptions} */
const config = {
  postprocess: (content, filepath) =>
    format(content, {
      ...prettierOptions,
      parser: 'markdown',
      filepath,
    }),
};

export default config;
