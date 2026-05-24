import type { ARIARoleDefinitionKey } from 'aria-query';

/** Returns the implicit role for a tbody tag. */
export default function getImplicitRoleForTbody(): ARIARoleDefinitionKey {
  return 'rowgroup';
}
