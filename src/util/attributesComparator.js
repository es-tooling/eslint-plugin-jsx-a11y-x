import jsxAstUtils from 'jsx-ast-utils-x';

const { getLiteralPropValue, propName } = jsxAstUtils;

/**
 * Returns true if all items in baseAttributes are found in attributes. Always
 * returns true if baseAttributes is empty.
 */
function attributesComparator(baseAttributes = [], attributes = []) {
  return baseAttributes.every((baseAttr) =>
    attributes.some((attribute) => {
      // Guard against non-JSXAttribute nodes like JSXSpreadAttribute
      if (attribute.type !== 'JSXAttribute') {
        return false;
      }
      // Attribute matches.
      if (baseAttr.name !== propName(attribute)) {
        return false;
      }
      // Value exists and does not match.
      if (baseAttr.value && baseAttr.value !== getLiteralPropValue(attribute)) {
        return false;
      }
      return true;
    }),
  );
}

export default attributesComparator;
