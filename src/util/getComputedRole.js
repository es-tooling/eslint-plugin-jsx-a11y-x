import getExplicitRole from './getExplicitRole.js';
import getImplicitRole from './getImplicitRole.js';
/**
 * Returns an element's computed role, which is
 *
 * 1. The valid value of its explicit role attribute; or
 * 2. The implicit value of its tag.
 */
export default function getComputedRole(tag, attributes) {
  return getExplicitRole(tag, attributes) || getImplicitRole(tag, attributes);
}
