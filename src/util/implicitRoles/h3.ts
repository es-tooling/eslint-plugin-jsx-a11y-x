import type { ARIARoleDefinitionKey } from 'aria-query';

/** Returns the implicit role for an h3 tag. */
export default function getImplicitRoleForH3(): ARIARoleDefinitionKey {
  return 'heading';
}
