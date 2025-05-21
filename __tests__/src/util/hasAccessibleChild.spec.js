import { elementType } from 'jsx-ast-utils-x';

import hasAccessibleChild from '../../../src/util/hasAccessibleChild';
import JSXElementMock from '../../../__mocks__/JSXElementMock';
import JSXAttributeMock from '../../../__mocks__/JSXAttributeMock';
import JSXExpressionContainerMock from '../../../__mocks__/JSXExpressionContainerMock';

test('hasAccessibleChild', () => {
  expect(hasAccessibleChild(JSXElementMock('div', []), elementType)).toBe(
    false,
  );

  expect(
    hasAccessibleChild(
      JSXElementMock(
        'div',
        [JSXAttributeMock('dangerouslySetInnerHTML', true)],
        [],
      ),
      elementType,
    ),
  ).toBe(true);

  expect(
    hasAccessibleChild(
      JSXElementMock(
        'div',
        [],
        [
          {
            type: 'Literal',
            value: 'foo',
          },
        ],
      ),
      elementType,
    ),
  ).toBe(true);

  expect(
    hasAccessibleChild(
      JSXElementMock('div', [], [JSXElementMock('div', [])]),
      elementType,
    ),
  ).toBe(true);

  expect(
    hasAccessibleChild(
      JSXElementMock(
        'div',
        [],
        [
          {
            type: 'JSXText',
            value: 'foo',
          },
        ],
      ),
      elementType,
    ),
  ).toBe(true);

  expect(
    hasAccessibleChild(
      JSXElementMock(
        'div',
        [],
        [JSXElementMock('div', [JSXAttributeMock('aria-hidden', true)])],
      ),
      elementType,
    ),
  ).toBe(false);

  expect(
    hasAccessibleChild(
      JSXElementMock(
        'div',
        [],
        [
          JSXExpressionContainerMock({
            type: 'Identifier',
            name: 'foo',
          }),
        ],
      ),
      elementType,
    ),
  ).toBe(true);

  expect(
    hasAccessibleChild(
      JSXElementMock(
        'div',
        [],
        [
          JSXExpressionContainerMock({
            type: 'Identifier',
            name: 'undefined',
          }),
        ],
      ),
      elementType,
    ),
  ).toBe(false);

  expect(
    hasAccessibleChild(
      JSXElementMock(
        'div',
        [],
        [
          {
            type: 'Unknown',
          },
        ],
      ),
      elementType,
    ),
  ).toBe(false);

  expect(
    hasAccessibleChild(
      JSXElementMock('div', [JSXAttributeMock('children', true)], []),
      elementType,
    ),
  ).toBe(true);

  expect(
    hasAccessibleChild(
      JSXElementMock(
        'div',
        [],
        [JSXElementMock('input', [JSXAttributeMock('type', 'hidden')])],
      ),
      elementType,
    ),
  ).toBe(false);

  expect(
    hasAccessibleChild(
      JSXElementMock(
        'div',
        [],
        [JSXElementMock('CustomInput', [JSXAttributeMock('type', 'hidden')])],
      ),
      elementType,
    ),
  ).toBe(true);

  expect(
    hasAccessibleChild(
      JSXElementMock(
        'div',
        [],
        [JSXElementMock('CustomInput', [JSXAttributeMock('type', 'hidden')])],
      ),
      () => 'input',
    ),
  ).toBe(false);
});
