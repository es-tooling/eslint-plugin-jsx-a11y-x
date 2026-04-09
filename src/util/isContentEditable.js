import jsxAstUtils from 'jsx-ast-utils-x';

const { getProp } = jsxAstUtils;

export default function isContentEditable(tagName, attributes) {
  const prop = getProp(attributes, 'contentEditable');

  return prop?.value?.raw === '"true"';
}
