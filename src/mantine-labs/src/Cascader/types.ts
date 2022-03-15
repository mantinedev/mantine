import {
  InputBaseProps,
  InputStylesNames,
  InputWrapperBaseProps,
  InputWrapperStylesNames,
} from '@mantine/core';
import { CascaderDropdownStyles } from './CascaderDropdown/CascaderDropdown';

export interface CascaderItem {
  value: string;
  label?: string;
  group?: string;
  disabled?: boolean;
  children?: CascaderItem[];
  [key: string]: any;
}

export type BaseCascaderStylesNames =
  | InputStylesNames
  | InputWrapperStylesNames
  | CascaderDropdownStyles;

export type BaseCascaderProps = InputBaseProps &
  InputWrapperBaseProps &
  Omit<React.ComponentPropsWithoutRef<'input'>, 'value' | 'onChange' | 'size' | 'defaultValue'>;
