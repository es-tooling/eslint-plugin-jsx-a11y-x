import jsxAstUtils from 'jsx-ast-utils-x';

const { getProp } = jsxAstUtils;

/** Returns the implicit role for a link tag. */
export default function getImplicitRoleForLink(attributes) {
  if (getProp(attributes, 'href')) {
    return 'link';
  }

  return '';
}
