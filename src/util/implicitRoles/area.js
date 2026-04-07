import jsxAstUtils from 'jsx-ast-utils-x';

const { getProp } = jsxAstUtils;

/** Returns the implicit role for an area tag. */
export default function getImplicitRoleForArea(attributes) {
  if (getProp(attributes, 'href')) {
    return 'link';
  }

  return '';
}
