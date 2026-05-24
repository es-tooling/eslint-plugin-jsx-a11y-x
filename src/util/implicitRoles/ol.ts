import type { ARIARoleDefinitionKey } from 'aria-query';

/** Returns the implicit role for an ol tag. */
export default function getImplicitRoleForOl(): ARIARoleDefinitionKey {
  return 'list';
}
