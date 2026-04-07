import jsxAstUtils from 'jsx-ast-utils-x';
import isInteractiveElement from '../../../src/util/isInteractiveElement.js';
import JSXElementMock from '../../../__mocks__/JSXElementMock.js';
import {
  genElementSymbol,
  genIndeterminantInteractiveElements,
  genInteractiveElements,
  genInteractiveRoleElements,
  genNonInteractiveElements,
  genNonInteractiveRoleElements,
} from '../../../__mocks__/genInteractives.js';

const { elementType } = jsxAstUtils;

describe('isInteractiveElement', () => {
  expect(isInteractiveElement(undefined, [])).toBe(false);

  test('interactive elements', () => {
    genInteractiveElements().forEach(({ openingElement }) => {
      expect(
        isInteractiveElement(
          elementType(openingElement),
          openingElement.attributes,
        ),
      ).toBe(
        true,
        `identifies \`${genElementSymbol(openingElement)}\` as an interactive element`,
      );
    });
  });

  test('interactive role elements', () => {
    genInteractiveRoleElements().forEach(({ openingElement }) => {
      expect(
        isInteractiveElement(
          elementType(openingElement),
          openingElement.attributes,
        ),
      ).toBe(
        false,
        `identifies \`${genElementSymbol(openingElement)}\` as an interactive element`,
      );
    });
  });

  test('non-interactive elements', () => {
    genNonInteractiveElements().forEach(({ openingElement }) => {
      expect(
        isInteractiveElement(
          elementType(openingElement),
          openingElement.attributes,
        ),
      ).toBe(
        false,
        `identifies \`${genElementSymbol(openingElement)}\` as an interactive element`,
      );
    });
  });

  test('non-interactive role elements', () => {
    genNonInteractiveRoleElements().forEach(({ openingElement }) => {
      expect(
        isInteractiveElement(
          elementType(openingElement),
          openingElement.attributes,
        ),
      ).toBe(
        false,
        `identifies \`${genElementSymbol(openingElement)}\` as an interactive element`,
      );
    });
  });

  test('indeterminate elements', () => {
    genIndeterminantInteractiveElements().forEach(({ openingElement }) => {
      expect(
        isInteractiveElement(
          elementType(openingElement),
          openingElement.attributes,
        ),
      ).toBe(
        false,
        `identifies \`${genElementSymbol(openingElement)}\` as an interactive element`,
      );
    });
  });

  expect(isInteractiveElement('CustomComponent', JSXElementMock())).toBe(false);
});
