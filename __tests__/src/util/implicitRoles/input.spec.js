import JSXAttributeMock from '../../../../__mocks__/JSXAttributeMock';
import getImplicitRoleForInput from '../../../../src/util/implicitRoles/input';

describe('isAbstractRole', () => {
  test('works for buttons', () => {
    expect(getImplicitRoleForInput([JSXAttributeMock('type', 'button')])).toBe(
      'button',
    );

    expect(getImplicitRoleForInput([JSXAttributeMock('type', 'image')])).toBe(
      'button',
    );

    expect(getImplicitRoleForInput([JSXAttributeMock('type', 'reset')])).toBe(
      'button',
    );

    expect(getImplicitRoleForInput([JSXAttributeMock('type', 'submit')])).toBe(
      'button',
    );
  });

  expect(getImplicitRoleForInput([JSXAttributeMock('type', 'checkbox')])).toBe(
    'checkbox',
  );

  expect(getImplicitRoleForInput([JSXAttributeMock('type', 'radio')])).toBe(
    'radio',
  );

  expect(getImplicitRoleForInput([JSXAttributeMock('type', 'range')])).toBe(
    'slider',
  );

  test('works for textboxes', () => {
    expect(getImplicitRoleForInput([JSXAttributeMock('type', 'email')])).toBe(
      'textbox',
    );
    expect(
      getImplicitRoleForInput([JSXAttributeMock('type', 'password')]),
    ).toBe('textbox');
    expect(getImplicitRoleForInput([JSXAttributeMock('type', 'search')])).toBe(
      'textbox',
    );
    expect(getImplicitRoleForInput([JSXAttributeMock('type', 'tel')])).toBe(
      'textbox',
    );
    expect(getImplicitRoleForInput([JSXAttributeMock('type', 'url')])).toBe(
      'textbox',
    );
  });

  expect(getImplicitRoleForInput([JSXAttributeMock('type', '')])).toBe(
    'textbox',
  );

  expect(getImplicitRoleForInput([JSXAttributeMock('type', true)])).toBe(
    'textbox',
  );
});
