import mayContainChildComponent from '../../../src/util/mayContainChildComponent';
import JSXAttributeMock from '../../../__mocks__/JSXAttributeMock';
import JSXElementMock from '../../../__mocks__/JSXElementMock';
import JSXExpressionContainerMock from '../../../__mocks__/JSXExpressionContainerMock';

describe('mayContainChildComponent', () => {
  expect(
    mayContainChildComponent(
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
      'FancyComponent',
      5,
    ),
  ).toBe(false);

  test('contains an indicated component', () => {
    expect(
      mayContainChildComponent(
        JSXElementMock('div', [], [JSXElementMock('input')]),
        'input',
      ),
    ).toBe(true, 'returns true');

    expect(
      mayContainChildComponent(
        JSXElementMock('div', [], [JSXElementMock('FancyComponent')]),
        'FancyComponent',
      ),
    ).toBe(true, 'returns true');

    expect(
      mayContainChildComponent(
        JSXElementMock(
          'div',
          [],
          [JSXElementMock('div', [], [JSXElementMock('FancyComponent')])],
        ),
        'FancyComponent',
      ),
    ).toBe(
      false,
      'FancyComponent is outside of default depth, should return false',
    );

    expect(
      mayContainChildComponent(
        JSXElementMock(
          'div',
          [],
          [JSXElementMock('div', [], [JSXElementMock('FancyComponent')])],
        ),
        'FancyComponent',
        2,
      ),
    ).toBe(
      true,
      'FancyComponent is inside of custom depth, should return true',
    );

    expect(
      mayContainChildComponent(
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
                              [JSXElementMock('FancyComponent')],
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
        'FancyComponent',
        6,
      ),
    ).toBe(true, 'deep nesting, returns true');
  });

  expect(
    mayContainChildComponent(
      JSXElementMock('div', [], [JSXExpressionContainerMock('mysteryBox')]),
      'FancyComponent',
    ),
  ).toBe(true);

  describe('Glob name matching - component name contains question mark ? - match any single character', () => {
    expect(
      mayContainChildComponent(
        JSXElementMock('div', [], [JSXElementMock('FancyComponent')]),
        'Fanc?Co??onent',
      ),
    ).toBe(true, 'returns true');

    expect(
      mayContainChildComponent(
        JSXElementMock('div', [], [JSXElementMock('FancyComponent')]),
        'FancyComponent?',
      ),
    ).toBe(false, 'returns false');

    test('component name contains asterisk * - match zero or more characters', () => {
      expect(
        mayContainChildComponent(
          JSXElementMock('div', [], [JSXElementMock('FancyComponent')]),
          'Fancy*',
        ),
      ).toBe(true, 'returns true');

      expect(
        mayContainChildComponent(
          JSXElementMock('div', [], [JSXElementMock('FancyComponent')]),
          '*Component',
        ),
      ).toBe(true, 'returns true');

      expect(
        mayContainChildComponent(
          JSXElementMock('div', [], [JSXElementMock('FancyComponent')]),
          'Fancy*C*t',
        ),
      ).toBe(true, 'returns true');
    });
  });

  test('using a custom elementType function', () => {
    expect(
      mayContainChildComponent(
        JSXElementMock('div', [], [JSXElementMock('CustomInput')]),
        'input',
        2,
        () => 'input',
      ),
    ).toBe(
      true,
      'returns true when the custom elementType returns the proper name',
    );

    expect(
      mayContainChildComponent(
        JSXElementMock('div', [], [JSXElementMock('CustomInput')]),
        'input',
        2,
        () => 'button',
      ),
    ).toBe(
      false,
      'returns false when the custom elementType returns a wrong name',
    );
  });
});
