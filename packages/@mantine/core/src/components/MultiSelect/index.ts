import { Primitive } from '../../core';
import type { MultiSelectFactory, MultiSelectProps, MultiSelectStylesNames } from './MultiSelect';

export { MultiSelect } from './MultiSelect';

export type { MultiSelectProps, MultiSelectStylesNames, MultiSelectFactory };

export namespace MultiSelect {
  export type Props<Value extends Primitive = string> = MultiSelectProps<Value>;
  export type StylesNames = MultiSelectStylesNames;
  export type Factory = MultiSelectFactory;
}
