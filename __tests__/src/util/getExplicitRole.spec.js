import getExplicitRole from '../../../src/util/getExplicitRole';
import JSXAttributeMock from '../../../__mocks__/JSXAttributeMock';

test('getExplicitRole', () => {
  expect(getExplicitRole('div', [JSXAttributeMock('role', 'button')])).toBe(
    'button',
  );

  expect(getExplicitRole('div', [JSXAttributeMock('role', 'beeswax')])).toBe(
    null,
  );

  expect(getExplicitRole('div', [])).toBe(null);
});
