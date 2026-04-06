import { hasAnyProp } from 'jsx-ast-utils-x';
import isHiddenFromScreenReader from './isHiddenFromScreenReader';

export default function hasAccessibleChild(node, elementType) {
  return (
    node.children.some((child) => {
      switch (child.type) {
        case 'Literal':
          return !!child.value;
        case 'JSXText':
          return !!child.value;
        case 'JSXElement':
          return !isHiddenFromScreenReader(
            elementType(child.openingElement),
            child.openingElement.attributes,
          );
        case 'JSXExpressionContainer':
          if (child.expression.type === 'Identifier') {
            return child.expression.name !== 'undefined';
          }
          return true;
        default:
          return false;
      }
    }) ||
    hasAnyProp(node.openingElement.attributes, [
      'dangerouslySetInnerHTML',
      'children',
    ])
  );
}
