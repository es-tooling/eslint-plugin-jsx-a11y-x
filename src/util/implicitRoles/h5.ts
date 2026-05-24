import type { ARIARoleDefinitionKey } from 'aria-query';

/** Returns the implicit role for an h5 tag. */
export default function getImplicitRoleForH5(): ARIARoleDefinitionKey {
  return 'heading';
}
