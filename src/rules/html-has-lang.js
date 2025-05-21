/**
 * @file Enforce html element has lang prop.
 * @author Ethan Cohen
 */

// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------

import { getProp, getPropValue } from 'jsx-ast-utils-x';
import { generateObjSchema } from '../util/schemas';
import getElementType from '../util/getElementType';

const errorMessage = '<html> elements must have the lang prop.';

const schema = generateObjSchema();

export default {
  meta: {
    docs: {
      url: 'https://github.com/es-tooling/eslint-plugin-jsx-a11y-x/tree/HEAD/docs/rules/html-has-lang.md',
      description: 'Enforce `<html>` element has `lang` prop.',
    },
    schema: [schema],
  },

  create: context => {
    const elementType = getElementType(context);
    return {
      JSXOpeningElement: node => {
        const type = elementType(node);

        if (type && type !== 'html') {
          return;
        }

        const lang = getPropValue(getProp(node.attributes, 'lang'));

        if (lang) {
          return;
        }

        context.report({
          node,
          message: errorMessage,
        });
      },
    };
  },
};
