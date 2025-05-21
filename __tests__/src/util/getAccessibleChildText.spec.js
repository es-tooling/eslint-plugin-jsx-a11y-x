import { elementType } from 'jsx-ast-utils-x';

import getAccessibleChildText from '../../../src/util/getAccessibleChildText';
import JSXAttributeMock from '../../../__mocks__/JSXAttributeMock';
import JSXElementMock from '../../../__mocks__/JSXElementMock';

test('getAccessibleChildText', () => {
  expect(
    getAccessibleChildText(
      JSXElementMock('a', [JSXAttributeMock('aria-label', 'foo')]),
      elementType,
    ),
  ).toBe('foo');

  expect(
    getAccessibleChildText(
      JSXElementMock(
        'a',
        [JSXAttributeMock('aria-label', 'foo')],
        [{ type: 'JSXText', value: 'bar' }],
      ),
      elementType,
    ),
  ).toBe('foo');

  expect(
    getAccessibleChildText(
      JSXElementMock('a', [JSXAttributeMock('aria-hidden', 'true')]),
      elementType,
    ),
  ).toBe('');

  expect(
    getAccessibleChildText(
      JSXElementMock('a', [], [{ type: 'JSXText', value: 'bar' }]),
      elementType,
    ),
  ).toBe('bar');

  expect(
    getAccessibleChildText(
      JSXElementMock(
        'a',
        [],
        [
          JSXElementMock('img', [
            JSXAttributeMock('src', 'some/path'),
            JSXAttributeMock('alt', 'a sensible label'),
          ]),
        ],
      ),
      elementType,
    ),
  ).toBe('a sensible label');

  expect(
    getAccessibleChildText(
      JSXElementMock(
        'a',
        [],
        [JSXElementMock('span', [JSXAttributeMock('alt', 'a sensible label')])],
      ),
      elementType,
    ),
  ).toBe('');

  expect(
    getAccessibleChildText(
      JSXElementMock('a', [], [{ type: 'Literal', value: 'bar' }]),
      elementType,
    ),
  ).toBe('bar');

  expect(
    getAccessibleChildText(
      JSXElementMock('a', [], [{ type: 'Literal', value: ' bar   ' }]),
      elementType,
    ),
  ).toBe('bar');

  expect(
    getAccessibleChildText(
      JSXElementMock('a', [], [{ type: 'Literal', value: 'foo         bar' }]),
      elementType,
    ),
  ).toBe('foo bar');

  expect(
    getAccessibleChildText(
      JSXElementMock(
        'a',
        [],
        [{ type: 'Literal', value: 'foo, bar. baz? foo; bar:' }],
      ),
      elementType,
    ),
  ).toBe('foo bar baz foo bar');

  expect(
    getAccessibleChildText(
      JSXElementMock(
        'a',
        [],
        [JSXElementMock('span', [], [{ type: 'Literal', value: 'bar' }])],
      ),
      elementType,
    ),
  ).toBe('bar');

  expect(
    getAccessibleChildText(
      JSXElementMock(
        'a',
        [],
        [
          JSXElementMock(
            'span',
            [],
            [JSXElementMock('span', [JSXAttributeMock('aria-hidden', 'true')])],
          ),
        ],
      ),
      elementType,
    ),
  ).toBe('');

  expect(
    getAccessibleChildText(
      JSXElementMock(
        'a',
        [],
        [
          { type: 'Literal', value: 'foo' },
          { type: 'Literal', value: 'bar' },
        ],
      ),
      elementType,
    ),
  ).toBe('foo bar');

  expect(
    getAccessibleChildText(
      JSXElementMock(
        'a',
        [],
        [
          { type: 'Literal', value: ' foo ' },
          { type: 'Literal', value: ' bar ' },
        ],
      ),
      elementType,
    ),
  ).toBe('foo bar');

  expect(
    getAccessibleChildText(
      JSXElementMock(
        'a',
        [],
        [
          { type: 'Literal', value: 'foo' },
          { type: 'Unknown' },
          { type: 'Literal', value: 'bar' },
        ],
      ),
      elementType,
    ),
  ).toBe('foo bar');
});
