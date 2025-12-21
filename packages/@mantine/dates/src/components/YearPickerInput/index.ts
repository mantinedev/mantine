import { DatePickerType } from '../../types';
import type {
  YearPickerInputFactory,
  YearPickerInputProps,
  YearPickerInputStylesNames,
} from './YearPickerInput';

export { YearPickerInput } from './YearPickerInput';

export type { YearPickerInputProps, YearPickerInputStylesNames, YearPickerInputFactory };

export namespace YearPickerInput {
  export type Props<Type extends DatePickerType = 'default'> = YearPickerInputProps<Type>;
  export type StylesNames = YearPickerInputStylesNames;
  export type Factory = YearPickerInputFactory;
}
