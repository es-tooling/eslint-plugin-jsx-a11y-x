import type { ARIARoleDefinitionKey } from 'aria-query';

/** Returns the implicit role for a datalist tag. */
export default function getImplicitRoleForDatalist(): ARIARoleDefinitionKey {
  return 'listbox';
}
