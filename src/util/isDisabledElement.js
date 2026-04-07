import jsxAstUtils from 'jsx-ast-utils-x';

const { getProp, getLiteralPropValue, getPropValue } = jsxAstUtils;

const isDisabledElement = (attributes) => {
  const disabledAttr = getProp(attributes, 'disabled');
  const disabledAttrValue = getPropValue(disabledAttr);
  const isHTML5Disabled = disabledAttr && disabledAttrValue !== undefined;
  if (isHTML5Disabled) {
    return true;
  }
  const ariaDisabledAttr = getProp(attributes, 'aria-disabled');
  const ariaDisabledAttrValue = getLiteralPropValue(ariaDisabledAttr);

  if (
    ariaDisabledAttr &&
    ariaDisabledAttrValue !== undefined &&
    ariaDisabledAttrValue === true
  ) {
    return true;
  }
  return false;
};

export default isDisabledElement;
