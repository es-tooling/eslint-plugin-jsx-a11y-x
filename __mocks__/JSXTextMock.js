export default function JSXTextMock(value) {
  return {
    type: 'JSXText',
    value,
    raw: value,
  };
}
