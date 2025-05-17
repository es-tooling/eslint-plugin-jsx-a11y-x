import { format } from 'prettier';

import prettierRC from './.prettierrc.mjs';

/** @type {import('eslint-doc-generator').GenerateOptions} */
const config = {
  postprocess: content =>
    format(content, { ...prettierRC, parser: 'markdown' }),
};

export default config;
