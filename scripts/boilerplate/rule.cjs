const ruleBoilerplate = (author, description) => `/**
 * @fileoverview ${description}
 * @author ${author}
 */

// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------

import { generateObjSchema } from '../util/schemas';

const errorMessage = '';

const schema = generateObjSchema(); // TODO: remove this and use "schema: []" if no options.

export default {
  meta: {
    docs: {
      get description() { throw new SyntaxError('do not forget to add the description!'); },
      get url() { throw new SyntaxError('do not forget to add the URL!'); },
    },
    schema: [schema],
  },

  create: (context) => ({
    JSXOpeningElement: (node) => {
      context.report({
        node,
        message: errorMessage,
      });
    },
  }),
};
`;

module.exports = ruleBoilerplate;
