import { elementType } from 'jsx-ast-utils-x';

import isNonInteractiveElement from '../../../src/util/isNonInteractiveElement';
import {
  genElementSymbol,
  genIndeterminantInteractiveElements,
  genInteractiveElements,
  genInteractiveRoleElements,
  genNonInteractiveElements,
  genNonInteractiveRoleElements,
} from '../../../__mocks__/genInteractives';

describe('isNonInteractiveElement', () => {
  expect(isNonInteractiveElement(undefined, [])).toBe(false);

  test('non-interactive elements', () => {
    genNonInteractiveElements().forEach(({ openingElement }) => {
      expect(
        isNonInteractiveElement(
          elementType(openingElement),
          openingElement.attributes,
        ),
      ).toBe(
        true,
        `identifies \`${genElementSymbol(openingElement)}\` as a non-interactive element`,
      );
    });
  });

  test('non-interactive role elements', () => {
    genNonInteractiveRoleElements().forEach(({ openingElement }) => {
      expect(
        isNonInteractiveElement(
          elementType(openingElement),
          openingElement.attributes,
        ),
      ).toBe(
        false,
        `identifies \`${genElementSymbol(openingElement)}\` as a non-interactive element`,
      );
    });
  });

  test('interactive elements', () => {
    genInteractiveElements().forEach(({ openingElement }) => {
      expect(
        isNonInteractiveElement(
          elementType(openingElement),
          openingElement.attributes,
        ),
      ).toBe(
        false,
        `identifies \`${genElementSymbol(openingElement)}\` as a non-interactive element`,
      );
    });
  });

  test('interactive role elements', () => {
    genInteractiveRoleElements().forEach(({ openingElement }) => {
      expect(
        isNonInteractiveElement(
          elementType(openingElement),
          openingElement.attributes,
        ),
      ).toBe(
        false,
        `identifies \`${genElementSymbol(openingElement)}\` as a non-interactive element`,
      );
    });
  });

  test('indeterminate elements', () => {
    genIndeterminantInteractiveElements().forEach(({ openingElement }) => {
      expect(
        isNonInteractiveElement(
          elementType(openingElement),
          openingElement.attributes,
        ),
      ).toBe(
        false,
        `identifies \`${genElementSymbol(openingElement)}\` as a non-interactive element`,
      );
    });
  });
});
