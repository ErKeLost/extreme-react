const supportSymbol = typeof symbol === "function" && symbol.for;

export const REACT_ELEMENT_TYPE = supportSymbol
  ? symbol.for("react.element")
  : 0xeac7;
