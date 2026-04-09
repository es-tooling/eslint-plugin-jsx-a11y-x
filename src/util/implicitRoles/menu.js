import jsxAstUtils from 'jsx-ast-utils-x';

const { getProp, getLiteralPropValue } = jsxAstUtils;

/** Returns the implicit role for a menu tag. */
export default function getImplicitRoleForMenu(attributes) {
  const type = getProp(attributes, 'type');

  if (type) {
    const value = getLiteralPropValue(type);

    return value && value.toUpperCase() === 'TOOLBAR' ? 'toolbar' : '';
  }

  return '';
}
