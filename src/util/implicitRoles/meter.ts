import type { ARIARoleDefinitionKey } from 'aria-query';

/** Returns the implicit role for a meter tag. */
export default function getImplicitRoleForMeter(): ARIARoleDefinitionKey {
  return 'progressbar';
}
