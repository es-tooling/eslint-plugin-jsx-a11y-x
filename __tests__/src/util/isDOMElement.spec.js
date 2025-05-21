import { dom } from 'aria-query';
import { elementType } from 'jsx-ast-utils-x';

import isDOMElement from '../../../src/util/isDOMElement';
import JSXElementMock from '../../../__mocks__/JSXElementMock';

describe('isDOMElement', () => {
  test('DOM elements', () => {
    dom.forEach((_, el) => {
      const element = JSXElementMock(el);

      expect(isDOMElement(elementType(element.openingElement))).toBe(
        true,
        `identifies ${el} as a DOM element`,
      );
    });
  });

  expect(isDOMElement(JSXElementMock('CustomElement'))).toBe(false);
});
