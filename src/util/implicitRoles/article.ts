import type { ARIARoleDefinitionKey } from 'aria-query';

/** Returns the implicit role for an article tag. */
export default function getImplicitRoleForArticle(): ARIARoleDefinitionKey {
  return 'article';
}
