import { describe, expect, test } from 'vitest';
import { dom } from 'aria-query';
import jsxAstUtils from 'jsx-ast-utils-x';

import isDOMElement from '../../../src/util/isDOMElement.js';
import JSXElementMock from '../../../__mocks__/JSXElementMock.js';

const { elementType } = jsxAstUtils;

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
