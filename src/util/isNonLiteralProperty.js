import jsxAstUtils from 'jsx-ast-utils-x';

const { getProp } = jsxAstUtils;

/**
 * Returns boolean indicating whether the given element has been specified with
 * an AST node with a non-literal type.
 *
 * Returns true if the elements has a role and its value is not of a type
 * Literal. Otherwise returns false.
 */

const isNonLiteralProperty = (attributes, propName) => {
  const prop = getProp(attributes, propName);
  if (!prop) return false;

  const propValue = prop.value;
  if (!propValue) return false;

  if (propValue.type === 'Literal') return false;

  if (propValue.type === 'JSXExpressionContainer') {
    const { expression } = propValue;
    if (expression.type === 'Identifier' && expression.name === 'undefined')
      return false;
    if (expression.type === 'JSXText') return false;
  }

  return true;
};

export default isNonLiteralProperty;
