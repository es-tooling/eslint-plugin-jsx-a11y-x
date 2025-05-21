import isNonLiteralProperty from '../../../src/util/isNonLiteralProperty';
import IdentifierMock from '../../../__mocks__/IdentifierMock';
import JSXAttributeMock from '../../../__mocks__/JSXAttributeMock';
import JSXSpreadAttributeMock from '../../../__mocks__/JSXSpreadAttributeMock';
import JSXTextMock from '../../../__mocks__/JSXTextMock';
import LiteralMock from '../../../__mocks__/LiteralMock';

const theProp = 'theProp';

const spread = JSXSpreadAttributeMock('theSpread');

test('isNonLiteralProperty', () => {
  expect(isNonLiteralProperty([], theProp)).toBe(false);

  expect(
    isNonLiteralProperty(
      [JSXAttributeMock(theProp, LiteralMock('theRole'))],
      theProp,
    ),
  ).toBe(false);

  expect(
    isNonLiteralProperty(
      [spread, JSXAttributeMock(theProp, LiteralMock('theRole'))],
      theProp,
    ),
  ).toBe(false);

  expect(
    isNonLiteralProperty(
      [JSXAttributeMock(theProp, JSXTextMock('theRole'))],
      theProp,
    ),
  ).toBe(false);

  expect(
    isNonLiteralProperty(
      [JSXAttributeMock(theProp, IdentifierMock('undefined'))],
      theProp,
    ),
  ).toBe(false);

  expect(
    isNonLiteralProperty(
      [JSXAttributeMock(theProp, IdentifierMock('theIdentifier'))],
      theProp,
    ),
  ).toBe(true);
});
