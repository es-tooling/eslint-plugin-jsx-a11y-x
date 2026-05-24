import { roles as rolesMap, type ARIARoleDefinitionKey } from 'aria-query';
import implicitRoles from './implicitRoles/index.js';
import type { JSXAttribute } from 'estree-jsx';

type HTMLElementTagNames = keyof typeof implicitRoles;

/**
 * Returns an element's implicit role given its attributes and type. Some
 * elements only have an implicit role when certain props are defined.
 */
export default function getImplicitRole(
  type: HTMLElementTagNames,
  attributes: JSXAttribute[],
): ARIARoleDefinitionKey | null {
  let implicitRole: ARIARoleDefinitionKey | null = null;
  if (type in implicitRoles) {
    implicitRole = implicitRoles[type](attributes);
  }
  if (implicitRole && rolesMap.has(implicitRole)) {
    return implicitRole;
  }
  return null;
}
