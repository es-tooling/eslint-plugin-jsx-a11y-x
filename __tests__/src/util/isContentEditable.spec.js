import isContentEditable from '../../../src/util/isContentEditable';
import JSXAttributeMock from '../../../__mocks__/JSXAttributeMock';

describe('isContentEditable - HTML5', () => {
  expect(
    isContentEditable('some tag', [
      JSXAttributeMock('contentEditable', 'true'),
    ]),
  ).toBe(true);

  test('not content editable', () => {
    expect(
      isContentEditable('some tag', [
        JSXAttributeMock('contentEditable', null),
      ]),
    ).toBe(
      false,
      'does not identify HTML5 content editable elements with null as the value',
    );

    expect(
      isContentEditable('some tag', [
        JSXAttributeMock('contentEditable', undefined),
      ]),
    ).toBe(
      false,
      'does not identify HTML5 content editable elements with undefined as the value',
    );

    expect(
      isContentEditable('some tag', [
        JSXAttributeMock('contentEditable', true),
      ]),
    ).toBe(
      false,
      'does not identify HTML5 content editable elements with true as the value',
    );

    expect(
      isContentEditable('some tag', [
        JSXAttributeMock('contentEditable', 'false'),
      ]),
    ).toBe(
      false,
      'does not identify HTML5 content editable elements with "false" as the value',
    );
  });
});
