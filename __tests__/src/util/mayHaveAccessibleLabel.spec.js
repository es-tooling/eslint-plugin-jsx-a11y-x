import mayHaveAccessibleLabel from '../../../src/util/mayHaveAccessibleLabel';
import JSXAttributeMock from '../../../__mocks__/JSXAttributeMock';
import JSXElementMock from '../../../__mocks__/JSXElementMock';
import JSXExpressionContainerMock from '../../../__mocks__/JSXExpressionContainerMock';
import JSXSpreadAttributeMock from '../../../__mocks__/JSXSpreadAttributeMock';
import JSXTextMock from '../../../__mocks__/JSXTextMock';
import LiteralMock from '../../../__mocks__/LiteralMock';

describe('mayHaveAccessibleLabel', () => {
  expect(
    mayHaveAccessibleLabel(
      JSXElementMock(
        'div',
        [],
        [
          JSXElementMock(
            'div',
            [],
            [
              JSXElementMock('span', [], []),
              JSXElementMock(
                'span',
                [],
                [
                  JSXElementMock('span', [], []),
                  JSXElementMock('span', [], [JSXElementMock('span', [], [])]),
                ],
              ),
            ],
          ),
          JSXElementMock('span', [], []),
          JSXElementMock('img', [JSXAttributeMock('src', 'some/path')]),
        ],
      ),
      5,
    ),
  ).toBe(false);

  test('label via attributes', () => {
    expect(
      mayHaveAccessibleLabel(
        JSXElementMock(
          'div',
          [JSXAttributeMock('aria-label', 'A delicate label')],
          [],
        ),
      ),
    ).toBe(true, 'aria-label returns true');

    expect(
      mayHaveAccessibleLabel(
        JSXElementMock('div', [JSXAttributeMock('aria-label', '')], []),
      ),
    ).toBe(false, 'aria-label without content returns false');

    expect(
      mayHaveAccessibleLabel(
        JSXElementMock('div', [JSXAttributeMock('aria-label', ' ')], []),
      ),
    ).toBe(
      false,
      'aria-label with only spaces whitespace, should return false',
    );
    expect(
      mayHaveAccessibleLabel(
        JSXElementMock('div', [JSXAttributeMock('aria-label', '\n')], []),
      ),
    ).toBe(
      false,
      'aria-label with only newline whitespace, should return false',
    );

    expect(
      mayHaveAccessibleLabel(
        JSXElementMock(
          'div',
          [JSXAttributeMock('aria-labelledby', 'elementId')],
          [],
        ),
      ),
    ).toBe(true, 'aria-labelledby returns true');

    expect(
      mayHaveAccessibleLabel(
        JSXElementMock('div', [JSXAttributeMock('aria-labelledby', '')], []),
      ),
    ).toBe(false, 'aria-labelledby without content returns false');

    expect(
      mayHaveAccessibleLabel(
        JSXElementMock(
          'div',
          [JSXAttributeMock('aria-labelledby', 'elementId', true)],
          [],
        ),
      ),
    ).toBe(
      true,
      'aria-labelledby with an expression container, should return true',
    );
  });

  test('label via custom label attribute', () => {
    const customLabelProp = 'cowbell';

    expect(
      mayHaveAccessibleLabel(
        JSXElementMock(
          'div',
          [JSXAttributeMock(customLabelProp, 'A delicate label')],
          [],
        ),
        1,
        [customLabelProp],
      ),
    ).toBe(true, 'aria-label returns true');
  });

  test('text label', () => {
    expect(
      mayHaveAccessibleLabel(
        JSXElementMock('div', [], [LiteralMock('A fancy label')]),
      ),
    ).toBe(true, 'Literal text, returns true');

    expect(
      mayHaveAccessibleLabel(JSXElementMock('div', [], [LiteralMock(' ')])),
    ).toBe(false, 'Literal spaces whitespace, returns false');

    expect(
      mayHaveAccessibleLabel(JSXElementMock('div', [], [LiteralMock('\n')])),
    ).toBe(false, 'Literal newline whitespace, returns false');

    expect(
      mayHaveAccessibleLabel(
        JSXElementMock('div', [], [JSXTextMock('A fancy label')]),
      ),
    ).toBe(true, 'JSXText, returns true');

    expect(
      mayHaveAccessibleLabel(
        JSXElementMock(
          'div',
          [],
          [JSXElementMock('div', [], [JSXTextMock('A fancy label')])],
        ),
      ),
    ).toBe(false, 'label is outside of default depth, returns false');

    expect(
      mayHaveAccessibleLabel(
        JSXElementMock(
          'div',
          [],
          [JSXElementMock('div', [], [JSXTextMock('A fancy label')])],
        ),
        2,
      ),
    ).toBe(true, 'label is inside of custom depth, returns true');

    expect(
      mayHaveAccessibleLabel(
        JSXElementMock(
          'div',
          [],
          [
            JSXElementMock(
              'div',
              [],
              [
                JSXElementMock('span', [], []),
                JSXElementMock(
                  'span',
                  [],
                  [
                    JSXElementMock('span', [], []),
                    JSXElementMock(
                      'span',
                      [],
                      [
                        JSXElementMock(
                          'span',
                          [],
                          [
                            JSXElementMock(
                              'span',
                              [],
                              [JSXTextMock('A fancy label')],
                            ),
                          ],
                        ),
                      ],
                    ),
                  ],
                ),
              ],
            ),
            JSXElementMock('span', [], []),
            JSXElementMock('img', [JSXAttributeMock('src', 'some/path')]),
          ],
        ),
        6,
      ),
    ).toBe(true, 'deep nesting, returns true');
  });

  test('image content', () => {
    expect(
      mayHaveAccessibleLabel(
        JSXElementMock(
          'div',
          [],
          [JSXElementMock('img', [JSXAttributeMock('src', 'some/path')])],
        ),
      ),
    ).toBe(false, 'without alt, returns true');

    expect(
      mayHaveAccessibleLabel(
        JSXElementMock(
          'div',
          [],
          [
            JSXElementMock('img', [
              JSXAttributeMock('src', 'some/path'),
              JSXAttributeMock('alt', 'A sensible label'),
            ]),
          ],
        ),
      ),
    ).toBe(true, 'with alt, returns true');

    expect(
      mayHaveAccessibleLabel(
        JSXElementMock(
          'div',
          [],
          [
            JSXElementMock('img', [
              JSXAttributeMock('src', 'some/path'),
              JSXAttributeMock('aria-label', 'A sensible label'),
            ]),
          ],
        ),
      ),
    ).toBe(true, 'with aria-label, returns true');
  });

  test('Intederminate situations', () => {
    expect(
      mayHaveAccessibleLabel(
        JSXElementMock('div', [], [JSXExpressionContainerMock('mysteryBox')]),
      ),
    ).toBe(true, 'expression container children, returns true');

    expect(
      mayHaveAccessibleLabel(
        JSXElementMock(
          'div',
          [
            JSXAttributeMock('style', 'some-junk'),
            JSXSpreadAttributeMock('props'),
          ],
          [],
        ),
      ),
    ).toBe(true, 'spread operator in attributes, returns true');
  });
});
