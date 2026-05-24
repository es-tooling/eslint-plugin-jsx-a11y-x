import type { ARIARoleDefinitionKey } from 'aria-query';

/** Returns the implicit role for a dialog tag. */
export default function getImplicitRoleForDialog(): ARIARoleDefinitionKey {
  return 'dialog';
}
