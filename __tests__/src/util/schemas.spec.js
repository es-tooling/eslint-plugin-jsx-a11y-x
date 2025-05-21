import {
  generateObjSchema,
  arraySchema,
  enumArraySchema,
} from '../../../src/util/schemas';

describe('schemas', () => {
  test('should generate an object schema with correct properties', () => {
    const schema = generateObjSchema({
      foo: 'bar',
      baz: arraySchema,
    });
    const properties = schema.properties || {};

    expect(properties.foo).toBe('bar');
    expect(properties.baz.type).toBe('array');
  });

  expect(enumArraySchema()).toEqual({
    additionalItems: false,
    items: {
      enum: [],
      type: 'string',
    },
    minItems: 0,
    type: 'array',
    uniqueItems: true,
  });
});
