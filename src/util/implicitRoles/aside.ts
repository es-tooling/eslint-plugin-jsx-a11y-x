import type { ARIARoleDefinitionKey } from 'aria-query';

/** Returns the implicit role for an aside tag. */
export default function getImplicitRoleForAside(): ARIARoleDefinitionKey {
  return 'complementary';
}
