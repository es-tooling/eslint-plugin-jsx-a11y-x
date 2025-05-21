import { elementType } from 'jsx-ast-utils-x';

import isAbstractRole from '../../../src/util/isAbstractRole';
import {
  genElementSymbol,
  genAbstractRoleElements,
  genNonAbstractRoleElements,
} from '../../../__mocks__/genInteractives';

describe('isAbstractRole', () => {
  expect(isAbstractRole(undefined, [])).toBe(false);

  test('elements with an abstract role', () => {
    genAbstractRoleElements().forEach(({ openingElement }) => {
      const { attributes } = openingElement;
      expect(isAbstractRole(elementType(openingElement), attributes)).toBe(
        true,
        `identifies \`${genElementSymbol(openingElement)}\` as an abstract role element`,
      );
    });
  });

  test('elements with a non-abstract role', () => {
    genNonAbstractRoleElements().forEach(({ openingElement }) => {
      const { attributes } = openingElement;
      expect(isAbstractRole(elementType(openingElement), attributes)).toBe(
        false,
        `does NOT identify \`${genElementSymbol(openingElement)}\` as an abstract role element`,
      );
    });
  });
});
