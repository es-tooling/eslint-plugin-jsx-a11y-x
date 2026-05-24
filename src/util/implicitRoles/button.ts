import type { ARIARoleDefinitionKey } from 'aria-query';

/** Returns the implicit role for a button tag. */
export default function getImplicitRoleForButton(): ARIARoleDefinitionKey {
  return 'button';
}
