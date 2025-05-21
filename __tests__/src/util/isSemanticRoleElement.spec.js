import isSemanticRoleElement from '../../../src/util/isSemanticRoleElement';
import JSXAttributeMock from '../../../__mocks__/JSXAttributeMock';

describe('isSemanticRoleElement', () => {
  expect(
    isSemanticRoleElement('input', [
      JSXAttributeMock('type', 'checkbox'),
      JSXAttributeMock('role', 'switch'),
    ]),
  ).toBe(true);

  test('rejects non-semantics role elements', () => {
    expect(
      isSemanticRoleElement('input', [
        JSXAttributeMock('type', 'radio'),
        JSXAttributeMock('role', 'switch'),
      ]),
    ).toBe(false);

    expect(
      isSemanticRoleElement('input', [
        JSXAttributeMock('type', 'text'),
        JSXAttributeMock('role', 'combobox'),
      ]),
    ).toBe(false);

    expect(
      isSemanticRoleElement('button', [
        JSXAttributeMock('role', 'switch'),
        JSXAttributeMock('aria-pressed', 'true'),
      ]),
    ).toBe(false);

    expect(
      isSemanticRoleElement('input', [JSXAttributeMock('role', 'switch')]),
    ).toBe(false);
  });

  expect(() => {
    isSemanticRoleElement('input', [
      JSXAttributeMock('type', 'checkbox'),
      JSXAttributeMock('role', 'checkbox'),
      JSXAttributeMock('aria-checked', 'false'),
      JSXAttributeMock('aria-labelledby', 'foo'),
      JSXAttributeMock('tabindex', '0'),
      {
        type: 'JSXSpreadAttribute',
        argument: {
          type: 'Identifier',
          name: 'props',
        },
      },
    ]);
  }).not.toThrow();
});
