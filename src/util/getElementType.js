import { elementType, getProp, getLiteralPropValue } from 'jsx-ast-utils-x';

const getElementType = (context) => {
  const { settings } = context;
  const polymorphicPropName = settings['jsx-a11y-x']?.polymorphicPropName;
  const polymorphicAllowList = settings['jsx-a11y-x']?.polymorphicAllowList;

  const componentMap = settings['jsx-a11y-x']?.components;

  return (node) => {
    const polymorphicProp = polymorphicPropName
      ? getLiteralPropValue(getProp(node.attributes, polymorphicPropName))
      : undefined;

    let rawType = elementType(node);
    if (
      polymorphicProp &&
      (!polymorphicAllowList || polymorphicAllowList.includes(rawType))
    ) {
      rawType = polymorphicProp;
    }

    if (!componentMap) {
      return rawType;
    }

    return Object.hasOwn(componentMap, rawType)
      ? componentMap[rawType]
      : rawType;
  };
};

export default getElementType;
