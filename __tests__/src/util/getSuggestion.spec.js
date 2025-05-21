import getSuggestion from '../../../src/util/getSuggestion';

test('spell check suggestion API', () => {
  expect([]).toEqual(getSuggestion('foo'));

  expect(getSuggestion('foo')).toEqual([]);

  expect(getSuggestion('fo', ['foo', 'bar', 'baz'])).toEqual(['foo']);

  expect(getSuggestion('theer', ['there', 'their', 'foo', 'bar'])).toEqual([
    'there',
    'their',
  ]);

  expect(getSuggestion('theer', ['there', 'their', 'foo', 'bar'], 1)).toEqual([
    'there',
  ]);
});
