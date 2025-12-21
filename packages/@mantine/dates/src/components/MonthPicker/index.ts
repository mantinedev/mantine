import { DatePickerType } from '../../types';
import type {
  MonthPickerBaseProps,
  MonthPickerFactory,
  MonthPickerProps,
  MonthPickerStylesNames,
} from './MonthPicker';

export { MonthPicker } from './MonthPicker';

export type { MonthPickerBaseProps, MonthPickerProps, MonthPickerStylesNames, MonthPickerFactory };

export namespace MonthPicker {
  export type Props<Type extends DatePickerType = 'default'> = MonthPickerProps<Type>;
  export type StylesNames = MonthPickerStylesNames;
  export type Factory = MonthPickerFactory;
}
