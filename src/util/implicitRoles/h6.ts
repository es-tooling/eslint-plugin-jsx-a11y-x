import type { ARIARoleDefinitionKey } from 'aria-query';

/** Returns the implicit role for an h6tag. */
export default function getImplicitRoleForH6(): ARIARoleDefinitionKey {
  return 'heading';
}
