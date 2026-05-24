import type { ARIARoleDefinitionKey } from 'aria-query';

/** Returns the implicit role for a progress tag. */
export default function getImplicitRoleForProgress(): ARIARoleDefinitionKey {
  return 'progressbar';
}
