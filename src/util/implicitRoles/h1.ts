import type { ARIARoleDefinitionKey } from 'aria-query';

/** Returns the implicit role for an h1 tag. */
export default function getImplicitRoleForH1(): ARIARoleDefinitionKey {
  return 'heading';
}
