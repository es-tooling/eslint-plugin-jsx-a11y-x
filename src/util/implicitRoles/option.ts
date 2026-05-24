import type { ARIARoleDefinitionKey } from 'aria-query';

/** Returns the implicit role for an option tag. */
export default function getImplicitRoleForOption(): ARIARoleDefinitionKey {
  return 'option';
}
