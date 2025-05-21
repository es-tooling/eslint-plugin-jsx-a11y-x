import { elementType } from 'jsx-ast-utils-x';

import isFocusable from '../../../src/util/isFocusable';
import {
  genElementSymbol,
  genInteractiveElements,
  genNonInteractiveElements,
} from '../../../__mocks__/genInteractives';
import JSXAttributeMock from '../../../__mocks__/JSXAttributeMock';

function mergeTabIndex(index, attributes) {
  return [].concat(attributes, JSXAttributeMock('tabIndex', index));
}

describe('isFocusable', () => {
  test('interactive elements', () => {
    genInteractiveElements().forEach(({ openingElement }) => {
      expect(
        isFocusable(elementType(openingElement), openingElement.attributes),
      ).toBe(
        true,
        `identifies \`${genElementSymbol(openingElement)}\` as a focusable element`,
      );

      expect(
        isFocusable(
          elementType(openingElement),
          mergeTabIndex(-1, openingElement.attributes),
        ),
      ).toBe(
        false,
        `does NOT identify \`${genElementSymbol(openingElement)}\` with tabIndex of -1 as a focusable element`,
      );

      expect(
        isFocusable(
          elementType(openingElement),
          mergeTabIndex(0, openingElement.attributes),
        ),
      ).toBe(
        true,
        `identifies \`${genElementSymbol(openingElement)}\` with tabIndex of 0 as a focusable element`,
      );

      expect(
        isFocusable(
          elementType(openingElement),
          mergeTabIndex(1, openingElement.attributes),
        ),
      ).toBe(
        true,
        `identifies \`${genElementSymbol(openingElement)}\` with tabIndex of 1 as a focusable element`,
      );
    });
  });

  test('non-interactive elements', () => {
    genNonInteractiveElements().forEach(({ openingElement }) => {
      expect(
        isFocusable(elementType(openingElement), openingElement.attributes),
      ).toBe(
        false,
        `does NOT identify \`${genElementSymbol(openingElement)}\` as a focusable element`,
      );

      expect(
        isFocusable(
          elementType(openingElement),
          mergeTabIndex(-1, openingElement.attributes),
        ),
      ).toBe(
        false,
        `does NOT identify \`${genElementSymbol(openingElement)}\` with tabIndex of -1 as a focusable element`,
      );

      expect(
        isFocusable(
          elementType(openingElement),
          mergeTabIndex(0, openingElement.attributes),
        ),
      ).toBe(
        true,
        `identifies \`${genElementSymbol(openingElement)}\` with tabIndex of 0 as a focusable element`,
      );

      expect(
        isFocusable(
          elementType(openingElement),
          mergeTabIndex(1, openingElement.attributes),
        ),
      ).toBe(
        true,
        `identifies \`${genElementSymbol(openingElement)}\` with tabIndex of 1 as a focusable element`,
      );

      expect(
        isFocusable(
          elementType(openingElement),
          mergeTabIndex('bogus', openingElement.attributes),
        ),
      ).toBe(
        false,
        `does NOT identify \`${genElementSymbol(openingElement)}\` with tabIndex of 'bogus' as a focusable element`,
      );
    });
  });
});
