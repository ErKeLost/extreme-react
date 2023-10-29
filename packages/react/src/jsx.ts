import { REACT_ELEMENT_TYPE } from "share/ReactSymbols";
import type {
  Type,
  Key,
  Ref,
  Props,
  ReactElements,
  ElementType,
} from "share/ReactTypes";
const ReactElement = function (type, key, ref, props) {
  const element = {
    $$typeof: REACT_ELEMENT_TYPE,
    type,
    key,
    ref,
    props,
    _owner: "Erkelost",
  };
  return element;
};

export const jsx = function (type: ElementType, config, ...children) {
  let key = null;
  let ref = null;
  const props: Props = {};
  for(const prop in config) {
    const val = config[prop]
    if (prop === 'key') {
      if (val !== undefined) {
        key = '' + val
      }
      continue
    }

    if (prop === 'ref') {
      if (val !== undefined) {
        ref = val
      }
      continue
    }

    if ({}.hasOwnProperty.call(config, prop)) {
      props[prop] = val
    }
  }
  const maybeChildren = children.length > 0 ? children : undefined;
  if (maybeChildren !== undefined) {
    if (maybeChildren.length === 1) {
      props.children = maybeChildren[0]
    } else {
      props.children = maybeChildren
    }
  }
  const element = ReactElement(type, key, ref, props);
  return element;
};

export const jsxDEV = jsx;
