import type { ARIARoleDefinitionKey } from 'aria-query';

/** Returns the implicit role for an output tag. */
export default function getImplicitRoleForOutput(): ARIARoleDefinitionKey {
  return 'status';
}
