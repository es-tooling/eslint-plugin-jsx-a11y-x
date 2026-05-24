import type { ARIARoleDefinitionKey } from 'aria-query';

/** Returns the implicit role for a body tag. */
export default function getImplicitRoleForBody(): ARIARoleDefinitionKey {
  return 'document';
}
