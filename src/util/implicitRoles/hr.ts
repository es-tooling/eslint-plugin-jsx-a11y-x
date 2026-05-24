import type { ARIARoleDefinitionKey } from 'aria-query';

/** Returns the implicit role for an hr tag. */
export default function getImplicitRoleForHr(): ARIARoleDefinitionKey {
  return 'separator';
}
