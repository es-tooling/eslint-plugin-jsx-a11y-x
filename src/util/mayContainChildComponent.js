/**
 * Returns true if it can positively determine that the element lacks an
 * accessible label. If no determination is possible, it returns false. Treat
 * false as an unknown value. The element might still have an accessible label,
 * but this module cannot determine it positively.
 */

import { elementType as rawElementType } from 'jsx-ast-utils-x';
import minimatch from 'minimatch';

export default function mayContainChildComponent(
  root,
  componentName,
  maxDepth = 1,
  elementType = rawElementType,
) {
  function traverseChildren(node, depth) {
    // Bail when maxDepth is exceeded.
    if (depth > maxDepth) {
      return false;
    }
    if (node.children) {
      for (let i = 0; i < node.children.length; i += 1) {
        const childNode = node.children[i];
        // Assume an expression container renders a label. It is the best we can
        // do in this case.
        if (childNode.type === 'JSXExpressionContainer') {
          return true;
        }
        // Check for components with the provided name.
        if (
          childNode.type === 'JSXElement' &&
          childNode.openingElement &&
          minimatch(elementType(childNode.openingElement), componentName)
        ) {
          return true;
        }
        if (traverseChildren(childNode, depth + 1)) {
          return true;
        }
      }
    }
    return false;
  }
  return traverseChildren(root, 1);
}
