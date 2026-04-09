import IdentifierMock from './IdentifierMock.js';

export default function JSXSpreadAttributeMock(identifier) {
  return {
    type: 'JSXSpreadAttribute',
    argument: IdentifierMock(identifier),
  };
}
