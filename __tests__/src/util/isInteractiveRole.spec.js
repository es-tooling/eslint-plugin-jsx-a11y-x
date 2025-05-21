import { elementType } from 'jsx-ast-utils-x';

import isInteractiveRole from '../../../src/util/isInteractiveRole';
import {
  genElementSymbol,
  genInteractiveRoleElements,
  genNonInteractiveRoleElements,
} from '../../../__mocks__/genInteractives';

describe('isInteractiveRole', () => {
  expect(isInteractiveRole(undefined, [])).toBe(false);

  test('elements with a non-interactive role', () => {
    genNonInteractiveRoleElements().forEach(({ openingElement }) => {
      const { attributes } = openingElement;

      expect(isInteractiveRole(elementType(openingElement), attributes)).toBe(
        false,
        `does NOT identify \`${genElementSymbol(openingElement)}\` as an interactive role element`,
      );
    });
  });

  expect(isInteractiveRole('div', [])).toBe(false);

  test('elements with an interactive role', () => {
    genInteractiveRoleElements().forEach(({ openingElement }) => {
      const { attributes } = openingElement;

      expect(isInteractiveRole(elementType(openingElement), attributes)).toBe(
        true,
        `identifies \`${genElementSymbol(openingElement)}\` as an interactive role element`,
      );
    });
  });
});
