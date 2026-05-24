import type { ARIARoleDefinitionKey } from 'aria-query';

/** Returns the implicit role for a thead tag. */
export default function getImplicitRoleForThead(): ARIARoleDefinitionKey {
  return 'rowgroup';
}
