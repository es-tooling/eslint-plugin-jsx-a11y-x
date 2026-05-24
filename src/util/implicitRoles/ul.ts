import type { ARIARoleDefinitionKey } from 'aria-query';

/** Returns the implicit role for a ul tag. */
export default function getImplicitRoleForUl(): ARIARoleDefinitionKey {
  return 'list';
}
