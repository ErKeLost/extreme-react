export type Type = any
export type Key = string | number
export type Ref = any
export type Props = any
export type ReactElements = ReactElement[]
export type ElementType = Type | string | any

export interface ReactElement {
  $$typeof: symbol | number
  type: Type
  key: Key
  ref: Ref
  props: Props
  _owner: string
}
