import {
  InputSharedProps,
  InputStylesNames,
  InputWrapperBaseProps,
  InputWrapperStylesNames,
} from '../Input';
import type { CascaderPopoverStylesNames } from './CascaderPopover/CascaderPopover';

export interface CascaderItem {
  value: string;
  label?: string;
  group?: string;
  disabled?: boolean;
  children?: CascaderItem[];
  [key: string]: any;
}

export type CascaderStylesNames =
  | InputStylesNames
  | InputWrapperStylesNames
  | CascaderPopoverStylesNames;

export type BaseCascaderProps = InputSharedProps &
  InputWrapperBaseProps &
  Omit<React.ComponentPropsWithoutRef<'input'>, 'value' | 'onChange' | 'size' | 'defaultValue'>;
