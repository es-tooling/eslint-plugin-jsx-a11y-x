import type { ARIARoleDefinitionKey } from 'aria-query';

/** Returns the implicit role for a section tag. */
export default function getImplicitRoleForSection(): ARIARoleDefinitionKey {
  return 'region';
}
