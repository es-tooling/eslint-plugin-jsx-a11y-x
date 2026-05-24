import type { ARIARoleDefinitionKey } from 'aria-query';

/** Returns the implicit role for a form tag. */
export default function getImplicitRoleForForm(): ARIARoleDefinitionKey {
  return 'form';
}
