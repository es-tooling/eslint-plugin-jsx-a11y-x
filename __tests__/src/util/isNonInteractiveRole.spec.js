import { elementType } from 'jsx-ast-utils-x';

import isNonInteractiveRole from '../../../src/util/isNonInteractiveRole';
import {
  genElementSymbol,
  genInteractiveRoleElements,
  genNonInteractiveRoleElements,
} from '../../../__mocks__/genInteractives';

describe('isNonInteractiveRole', () => {
  expect(isNonInteractiveRole(undefined, [])).toBe(false);

  test('elements with a non-interactive role', () => {
    genNonInteractiveRoleElements().forEach(({ openingElement }) => {
      const { attributes } = openingElement;

      expect(
        isNonInteractiveRole(elementType(openingElement), attributes),
      ).toBe(
        true,
        `identifies \`${genElementSymbol(openingElement)}\` as a non-interactive role element`,
      );
    });
  });

  expect(isNonInteractiveRole('div', [])).toBe(false);

  test('elements with an interactive role', () => {
    genInteractiveRoleElements().forEach(({ openingElement }) => {
      const { attributes } = openingElement;

      expect(
        isNonInteractiveRole(elementType(openingElement), attributes),
      ).toBe(
        false,
        `does NOT identify \`${genElementSymbol(openingElement)}\` as a non-interactive role element`,
      );
    });
  });
});
