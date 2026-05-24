import type { ARIARoleDefinitionKey } from 'aria-query';

/** Returns the implicit role for a tfoot tag. */
export default function getImplicitRoleForTfoot(): ARIARoleDefinitionKey {
  return 'rowgroup';
}
