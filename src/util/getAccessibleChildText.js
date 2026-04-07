import jsxAstUtils from 'jsx-ast-utils-x';

import isHiddenFromScreenReader from './isHiddenFromScreenReader.js';

const { getProp, getLiteralPropValue } = jsxAstUtils;

/**
 * Returns a new "standardized" string: all whitespace is collapsed to one
 * space, and the string is lowercase
 *
 * @param {string} input
 * @returns Lowercase, single-spaced, punctuation-stripped, trimmed string
 */
function standardizeSpaceAndCase(input) {
  return input
    .trim()
    .replace(/[,.?¿!‽¡;:]/g, '') // strip punctuation
    .replace(/\s\s+/g, ' ') // collapse spaces
    .toLowerCase();
}

/**
 * Returns the (recursively-defined) accessible child text of a node, which
 * (in-order) is:
 *
 * 1. The element's aria-label
 * 2. If the element is a direct literal, the literal value
 * 3. Otherwise, merge all of its children
 *
 * @param {JSXElement} node - Node to traverse
 * @returns Child text as a string
 */
export default function getAccessibleChildText(node, elementType) {
  const ariaLabel = getLiteralPropValue(
    getProp(node.openingElement.attributes, 'aria-label'),
  );
  // early escape-hatch when aria-label is applied
  if (ariaLabel) return standardizeSpaceAndCase(ariaLabel);

  // early-return if alt prop exists and is an image
  const altTag = getLiteralPropValue(
    getProp(node.openingElement.attributes, 'alt'),
  );
  if (elementType(node.openingElement) === 'img' && altTag)
    return standardizeSpaceAndCase(altTag);

  // skip if aria-hidden is true
  if (
    isHiddenFromScreenReader(
      elementType(node.openingElement),
      node.openingElement.attributes,
    )
  ) {
    return '';
  }

  const rawChildText = node.children
    .map((currentNode) => {
      if (currentNode.type === 'Literal' || currentNode.type === 'JSXText') {
        return String(currentNode.value);
      }
      if (currentNode.type === 'JSXElement') {
        return getAccessibleChildText(currentNode, elementType);
      }
      return '';
    })
    .join(' ');

  return standardizeSpaceAndCase(rawChildText);
}
