import { dom } from 'aria-query';

/** Returns boolean indicating whether the given element is a DOM element. */
const isDOMElement = (tagName) => dom.has(tagName);

export default isDOMElement;
