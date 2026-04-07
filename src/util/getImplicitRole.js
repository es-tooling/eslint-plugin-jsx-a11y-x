import { roles as rolesMap } from 'aria-query';
import implicitRoles from './implicitRoles/index.js';

/**
 * Returns an element's implicit role given its attributes and type. Some
 * elements only have an implicit role when certain props are defined.
 */
export default function getImplicitRole(type, attributes) {
  let implicitRole;
  if (implicitRoles[type]) {
    implicitRole = implicitRoles[type](attributes);
  }
  if (rolesMap.has(implicitRole)) {
    return implicitRole;
  }
  return null;
}
