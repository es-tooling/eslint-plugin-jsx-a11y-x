import JSXAttributeMock from '../../../../__mocks__/JSXAttributeMock';
import getImplicitRoleForMenu from '../../../../src/util/implicitRoles/menu';

test('isAbstractRole', () => {
  expect(getImplicitRoleForMenu([JSXAttributeMock('type', 'toolbar')])).toBe(
    'toolbar',
  );

  expect(getImplicitRoleForMenu([JSXAttributeMock('type', '')])).toBe('');
});
