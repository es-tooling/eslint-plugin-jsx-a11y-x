import type { ARIARoleDefinitionKey } from 'aria-query';

/** Returns the implicit role for an li tag. */
export default function getImplicitRoleForLi(): ARIARoleDefinitionKey {
  return 'listitem';
}
