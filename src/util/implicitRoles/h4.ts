import type { ARIARoleDefinitionKey } from 'aria-query';

/** Returns the implicit role for an h4 tag. */
export default function getImplicitRoleForH4(): ARIARoleDefinitionKey {
  return 'heading';
}
