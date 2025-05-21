import JSXAttributeMock from '../../../../__mocks__/JSXAttributeMock';
import getImplicitRoleForSelect from '../../../../src/util/implicitRoles/select';

describe('isAbstractRole', () => {
  test('works for combobox', () => {
    expect(getImplicitRoleForSelect([])).toBe(
      'combobox',
      'defaults to combobox',
    );

    expect(getImplicitRoleForSelect([JSXAttributeMock('multiple', null)])).toBe(
      'combobox',
      'is combobox when multiple attribute is set to not be present',
    );

    expect(
      getImplicitRoleForSelect([JSXAttributeMock('multiple', undefined)]),
    ).toBe(
      'combobox',
      'is combobox when multiple attribute is set to not be present',
    );

    expect(
      getImplicitRoleForSelect([JSXAttributeMock('multiple', false)]),
    ).toBe(
      'combobox',
      'is combobox when multiple attribute is set to boolean false',
    );

    expect(getImplicitRoleForSelect([JSXAttributeMock('multiple', '')])).toBe(
      'combobox',
      'is listbox when multiple attribute is falsey (empty string)',
    );

    expect(getImplicitRoleForSelect([JSXAttributeMock('size', '1')])).toBe(
      'combobox',
      'is combobox when size is not greater than 1',
    );

    expect(getImplicitRoleForSelect([JSXAttributeMock('size', 1)])).toBe(
      'combobox',
      'is combobox when size is not greater than 1',
    );

    expect(getImplicitRoleForSelect([JSXAttributeMock('size', 0)])).toBe(
      'combobox',
      'is combobox when size is not greater than 1',
    );

    expect(getImplicitRoleForSelect([JSXAttributeMock('size', '0')])).toBe(
      'combobox',
      'is combobox when size is not greater than 1',
    );

    expect(getImplicitRoleForSelect([JSXAttributeMock('size', '-1')])).toBe(
      'combobox',
      'is combobox when size is not greater than 1',
    );

    expect(getImplicitRoleForSelect([JSXAttributeMock('size', '')])).toBe(
      'combobox',
      'is combobox when size is a valid number',
    );

    expect(getImplicitRoleForSelect([JSXAttributeMock('size', 'true')])).toBe(
      'combobox',
      'is combobox when size is a valid number',
    );

    expect(getImplicitRoleForSelect([JSXAttributeMock('size', true)])).toBe(
      'combobox',
      'is combobox when size is a valid number',
    );

    expect(getImplicitRoleForSelect([JSXAttributeMock('size', NaN)])).toBe(
      'combobox',
      'is combobox when size is a valid number',
    );

    expect(getImplicitRoleForSelect([JSXAttributeMock('size', '')])).toBe(
      'combobox',
      'is combobox when size is a valid number',
    );

    expect(
      getImplicitRoleForSelect([JSXAttributeMock('size', undefined)]),
    ).toBe('combobox', 'is combobox when size is a valid number');

    expect(getImplicitRoleForSelect([JSXAttributeMock('size', false)])).toBe(
      'combobox',
      'is combobox when size is a valid number',
    );
  });

  test('works for listbox based on multiple attribute', () => {
    expect(getImplicitRoleForSelect([JSXAttributeMock('multiple', true)])).toBe(
      'listbox',
      'is listbox when multiple is boolean true',
    );

    expect(
      getImplicitRoleForSelect([JSXAttributeMock('multiple', 'multiple')]),
    ).toBe('listbox', 'is listbox when multiple is truthy (string)');

    expect(
      getImplicitRoleForSelect([JSXAttributeMock('multiple', 'true')]),
    ).toBe(
      'listbox',
      'is listbox when multiple is truthy (string) - React will warn about this',
    );
  });

  test('works for listbox based on size attribute', () => {
    expect(getImplicitRoleForSelect([JSXAttributeMock('size', 2)])).toBe(
      'listbox',
      'is listbox when size is greater than 1',
    );

    expect(getImplicitRoleForSelect([JSXAttributeMock('size', '3')])).toBe(
      'listbox',
      'is listbox when size is greater than 1',
    );

    expect(getImplicitRoleForSelect([JSXAttributeMock('size', 40)])).toBe(
      'listbox',
      'is listbox when size is greater than 1',
    );
  });
});
