import type { ARIARoleDefinitionKey } from 'aria-query';

/** Returns the implicit role for a details tag. */
export default function getImplicitRoleForDetails(): ARIARoleDefinitionKey {
  return 'group';
}
