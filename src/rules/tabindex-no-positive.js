/**
 * @file Enforce tabIndex value is not greater than zero.
 * @author Ethan Cohen
 */

// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------

import { getLiteralPropValue, propName } from 'jsx-ast-utils-x';
import { generateObjSchema } from '../util/schemas';

const errorMessage = 'Avoid positive integer values for tabIndex.';

const schema = generateObjSchema();

export default {
  meta: {
    docs: {
      url: 'https://github.com/es-tooling/eslint-plugin-jsx-a11y-x/tree/HEAD/docs/rules/tabindex-no-positive.md',
      description: 'Enforce `tabIndex` value is not greater than zero.',
    },
    schema: [schema],
  },

  create: context => ({
    JSXAttribute: attribute => {
      const name = propName(attribute).toUpperCase();

      // Check if tabIndex is the attribute
      if (name !== 'TABINDEX') {
        return;
      }

      // Only check literals because we can't infer values from certain expressions.
      const value = Number(getLiteralPropValue(attribute));

      if (isNaN(value) || value <= 0) {
        return;
      }

      context.report({
        node: attribute,
        message: errorMessage,
      });
    },
  }),
};
