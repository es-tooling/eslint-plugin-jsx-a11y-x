import toAST from 'to-ast';
import JSXExpressionContainerMock from './JSXExpressionContainerMock';

export default function JSXAttributeMock(
  prop,
  value,
  isExpressionContainer = false,
) {
  let astValue;
  if (value && value.type !== undefined) {
    astValue = value;
  } else {
    astValue = toAST(value);
  }
  let attributeValue = astValue;
  if (isExpressionContainer || astValue.type !== 'Literal') {
    attributeValue = JSXExpressionContainerMock(astValue);
  } else if (attributeValue.type === 'Literal' && !('raw' in attributeValue)) {
    attributeValue.raw = JSON.stringify(attributeValue.value);
  }

  return {
    type: 'JSXAttribute',
    name: {
      type: 'JSXIdentifier',
      name: prop,
    },
    value: attributeValue,
  };
}
