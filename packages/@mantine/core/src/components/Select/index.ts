import type { Primitive } from '../../core';
import type { SelectFactory, SelectProps, SelectStylesNames } from './Select';

export { Select } from './Select';

export type { SelectProps, SelectStylesNames, SelectFactory };

export namespace Select {
  export type Props<Value extends Primitive = string> = SelectProps<Value>;
  export type StylesNames = SelectStylesNames;
  export type Factory = SelectFactory;
}
