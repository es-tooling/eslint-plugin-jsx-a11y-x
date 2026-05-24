import type { ARIARoleDefinitionKey } from 'aria-query';

/** Returns the implicit role for a nav tag. */
export default function getImplicitRoleForNav(): ARIARoleDefinitionKey {
  return 'navigation';
}
