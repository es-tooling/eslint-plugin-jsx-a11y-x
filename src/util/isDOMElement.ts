import { dom } from 'aria-query';

/** Returns boolean indicating whether the given element is a DOM element. */
function isDOMElement(tagName: string): boolean {
  return dom.has(tagName);
}

export default isDOMElement;
