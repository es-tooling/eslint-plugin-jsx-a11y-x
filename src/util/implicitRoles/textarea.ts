import type { ARIARoleDefinitionKey } from 'aria-query';

/** Returns the implicit role for a textarea tag. */
export default function getImplicitRoleForTextarea(): ARIARoleDefinitionKey {
  return 'textbox';
}
