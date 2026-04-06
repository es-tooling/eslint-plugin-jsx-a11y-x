export default function LiteralMock(value) {
  return {
    type: 'Literal',
    value,
    raw: value,
  };
}
