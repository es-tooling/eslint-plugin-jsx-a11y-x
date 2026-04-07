import JSXAttributeMock from '../../../../__mocks__/JSXAttributeMock.js';
import getImplicitRoleForMenu from '../../../../src/util/implicitRoles/menu.js';

test('isAbstractRole', () => {
  expect(getImplicitRoleForMenu([JSXAttributeMock('type', 'toolbar')])).toBe(
    'toolbar',
  );

  expect(getImplicitRoleForMenu([JSXAttributeMock('type', '')])).toBe('');
});
