import JSXAttributeMock from '../../../../__mocks__/JSXAttributeMock';
import getImplicitRoleForMenuitem from '../../../../src/util/implicitRoles/menuitem';

test('isAbstractRole', () => {
  expect(
    getImplicitRoleForMenuitem([JSXAttributeMock('type', 'command')]),
  ).toBe('menuitem');

  expect(
    getImplicitRoleForMenuitem([JSXAttributeMock('type', 'checkbox')]),
  ).toBe('menuitemcheckbox');

  expect(getImplicitRoleForMenuitem([JSXAttributeMock('type', 'radio')])).toBe(
    'menuitemradio',
  );

  expect(getImplicitRoleForMenuitem([JSXAttributeMock('type', '')])).toBe('');

  expect(getImplicitRoleForMenuitem([JSXAttributeMock('type', true)])).toBe('');
});
