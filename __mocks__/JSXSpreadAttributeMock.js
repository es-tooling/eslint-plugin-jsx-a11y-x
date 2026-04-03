import IdentifierMock from './IdentifierMock';

export default function JSXSpreadAttributeMock(identifier) {
  return {
    type: 'JSXSpreadAttribute',
    argument: IdentifierMock(identifier),
  };
}
