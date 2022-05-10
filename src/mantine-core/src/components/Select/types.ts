import type { InputStylesNames, InputBaseProps } from '../Input/Input';
import type { InputWrapperStylesNames, InputWrapperBaseProps } from '../InputWrapper/InputWrapper';
import type { SelectItemsStylesNames } from './SelectItems/SelectItems';
import type { SelectPopoverStylesNames } from './SelectPopover/SelectPopover';

export interface SelectItem {
  value: string;
  label?: string;
  disabled?: boolean;
  group?: string;
  [key: string]: any;
}

export type BaseSelectStylesNames =
  | InputStylesNames
  | InputWrapperStylesNames
  | SelectItemsStylesNames
  | SelectPopoverStylesNames;

export type BaseSelectProps = InputWrapperBaseProps &
  InputBaseProps &
  Omit<React.ComponentPropsWithoutRef<'input'>, 'value' | 'onChange' | 'size' | 'defaultValue'>;
