import { getProp } from 'jsx-ast-utils-x';

export default function isContentEditable(tagName, attributes) {
  const prop = getProp(attributes, 'contentEditable');

  return prop?.value?.raw === '"true"';
}
