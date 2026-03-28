import { DatePickerType } from '../../types';
import type {
  MonthPickerInputFactory,
  MonthPickerInputProps,
  MonthPickerInputStylesNames,
} from './MonthPickerInput';

export { MonthPickerInput } from './MonthPickerInput';

export type { MonthPickerInputProps, MonthPickerInputStylesNames, MonthPickerInputFactory };

export namespace MonthPickerInput {
  export type Props<Type extends DatePickerType = 'default'> = MonthPickerInputProps<Type>;
  export type StylesNames = MonthPickerInputStylesNames;
  export type Factory = MonthPickerInputFactory;
}
