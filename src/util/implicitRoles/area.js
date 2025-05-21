import { getProp } from 'jsx-ast-utils-x';

/** Returns the implicit role for an area tag. */
export default function getImplicitRoleForArea(attributes) {
  if (getProp(attributes, 'href')) {
    return 'link';
  }

  return '';
}
