import type { SelectFactory, SelectProps, SelectStylesNames } from './Select';
import type { Primitive } from '../../core';

export { Select } from './Select';

export type { SelectProps, SelectStylesNames, SelectFactory };

export namespace Select {
  export type Props<Value extends Primitive = string> = SelectProps<Value>;
  export type StylesNames = SelectStylesNames;
  export type Factory = SelectFactory;
}
