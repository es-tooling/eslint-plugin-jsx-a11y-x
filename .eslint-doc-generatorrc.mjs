import { format } from 'prettier';

/** @type {import('eslint-doc-generator').GenerateOptions} */
const config = {
  postprocess: (content) => format(content, { parser: 'markdown' }),
};

export default config;
