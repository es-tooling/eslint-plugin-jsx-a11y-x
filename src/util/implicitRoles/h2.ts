import type { ARIARoleDefinitionKey } from 'aria-query';

/** Returns the implicit role for an h2 tag. */
export default function getImplicitRoleForH2(): ARIARoleDefinitionKey {
  return 'heading';
}
