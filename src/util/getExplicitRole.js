import { roles as rolesMap } from 'aria-query';
import { getProp, getLiteralPropValue } from 'jsx-ast-utils-x';

/**
 * Returns an element's computed role, which is
 *
 * 1. The valid value of its explicit role attribute; or
 * 2. The implicit value of its tag.
 */
export default function getExplicitRole(tag, attributes) {
  const explicitRole = (function toLowerCase(role) {
    if (typeof role === 'string') {
      return role.toLowerCase();
    }
    return null;
  })(getLiteralPropValue(getProp(attributes, 'role')));

  if (rolesMap.has(explicitRole)) {
    return explicitRole;
  }
  return null;
}
