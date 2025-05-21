import isDisabledElement from '../../../src/util/isDisabledElement';
import JSXAttributeMock from '../../../__mocks__/JSXAttributeMock';

describe('isDisabledElement', () => {
  test('HTML5', () => {
    expect(isDisabledElement([JSXAttributeMock('disabled', 'disabled')])).toBe(
      true,
      'identifies HTML5 disabled elements',
    );

    expect(isDisabledElement([JSXAttributeMock('disabled', null)])).toBe(
      true,
      'identifies HTML5 disabled elements with null as the value',
    );

    expect(isDisabledElement([JSXAttributeMock('disabled', undefined)])).toBe(
      false,
      'does not identify HTML5 disabled elements with undefined as the value',
    );
  });

  test('ARIA', () => {
    expect(isDisabledElement([JSXAttributeMock('aria-disabled', 'true')])).toBe(
      true,
      'does not identify ARIA disabled elements',
    );

    expect(isDisabledElement([JSXAttributeMock('aria-disabled', true)])).toBe(
      true,
      'does not identify ARIA disabled elements',
    );

    expect(
      isDisabledElement([JSXAttributeMock('aria-disabled', 'false')]),
    ).toBe(false, 'does not identify ARIA disabled elements');

    expect(isDisabledElement([JSXAttributeMock('aria-disabled', false)])).toBe(
      false,
      'does not identify ARIA disabled elements',
    );

    expect(isDisabledElement([JSXAttributeMock('aria-disabled', null)])).toBe(
      false,
      'does not identify ARIA disabled elements with null as the value',
    );

    expect(
      isDisabledElement([JSXAttributeMock('aria-disabled', undefined)]),
    ).toBe(
      false,
      'does not identify ARIA disabled elements with undefined as the value',
    );
  });
});
