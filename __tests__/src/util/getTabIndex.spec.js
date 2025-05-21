import getTabIndex from '../../../src/util/getTabIndex';
import IdentifierMock from '../../../__mocks__/IdentifierMock';
import JSXAttributeMock from '../../../__mocks__/JSXAttributeMock';

test('getTabIndex', () => {
  expect(getTabIndex(JSXAttributeMock('tabIndex', 0))).toBe(0);

  expect(getTabIndex(JSXAttributeMock('tabIndex', 1))).toBe(1);

  expect(getTabIndex(JSXAttributeMock('tabIndex', -1))).toBe(-1);

  expect(getTabIndex(JSXAttributeMock('tabIndex', ''))).toBe(undefined);

  expect(getTabIndex(JSXAttributeMock('tabIndex', 9.1))).toBe(undefined);

  expect(getTabIndex(JSXAttributeMock('tabIndex', '0'))).toBe(0);

  expect(getTabIndex(JSXAttributeMock('tabIndex', '0a'))).toBe(undefined);

  expect(getTabIndex(JSXAttributeMock('tabIndex', true))).toBe(undefined);
  expect(getTabIndex(JSXAttributeMock('tabIndex', false))).toBe(undefined);

  expect(typeof getTabIndex(JSXAttributeMock('tabIndex', () => 0))).toBe(
    'function',
  );

  const name = 'identName';
  expect(
    getTabIndex(JSXAttributeMock('tabIndex', IdentifierMock(name), true)),
  ).toBe(name);

  expect(getTabIndex(JSXAttributeMock('tabIndex', undefined))).toBe(undefined);
});
