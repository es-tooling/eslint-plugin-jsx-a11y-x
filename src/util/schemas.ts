/** JSON schema to accept an array of unique strings */
export const arraySchema = {
  type: 'array',
  items: {
    type: 'string',
  },
  uniqueItems: true,
  additionalItems: false,
};

/** JSON schema to accept an array of unique strings from an enumerated list. */
export function enumArraySchema(enumeratedList = [], minItems = 0) {
  return {
    ...arraySchema,
    items: {
      type: 'string',
      enum: enumeratedList,
    },
    minItems,
  };
}

/**
 * Factory function to generate an object schema with specified properties
 * object
 */
export function generateObjSchema(properties = {}, required?: boolean) {
  return {
    type: 'object',
    properties,
    required,
  };
}
