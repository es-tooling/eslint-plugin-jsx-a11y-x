import { getProp } from 'jsx-ast-utils-x';

/** Returns the implicit role for a link tag. */
export default function getImplicitRoleForLink(attributes) {
  if (getProp(attributes, 'href')) {
    return 'link';
  }

  return '';
}
