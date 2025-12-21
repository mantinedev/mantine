import { DatePickerType } from '../../types';
import type {
  YearPickerBaseProps,
  YearPickerFactory,
  YearPickerProps,
  YearPickerStylesNames,
} from './YearPicker';

export { YearPicker } from './YearPicker';

export type { YearPickerProps, YearPickerBaseProps, YearPickerFactory, YearPickerStylesNames };

export namespace YearPicker {
  export type Props<Type extends DatePickerType = 'default'> = YearPickerProps<Type>;
  export type BaseProps = YearPickerBaseProps;
  export type StylesNames = YearPickerStylesNames;
  export type Factory = YearPickerFactory;
}
