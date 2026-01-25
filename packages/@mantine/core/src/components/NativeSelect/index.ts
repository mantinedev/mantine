import type { __InputStylesNames } from '../Input';
import type { NativeSelectFactory, NativeSelectProps } from './NativeSelect';

export { NativeSelect } from './NativeSelect';

export type { NativeSelectProps, NativeSelectFactory };

export namespace NativeSelect {
  export type Props = NativeSelectProps;
  export type Factory = NativeSelectFactory;
  export type StylesNames = __InputStylesNames;
}
