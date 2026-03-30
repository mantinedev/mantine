import { DatePickerType } from '../../types';
import type {
  DatePickerBaseProps,
  DatePickerCssVariables,
  DatePickerFactory,
  DatePickerPreset,
  DatePickerProps,
  DatePickerStylesNames,
} from './DatePicker';

export { DatePicker } from './DatePicker';

export type {
  DatePickerProps,
  DatePickerBaseProps,
  DatePickerStylesNames,
  DatePickerFactory,
  DatePickerPreset,
  DatePickerCssVariables,
};

export namespace DatePicker {
  export type Props<Type extends DatePickerType> = DatePickerProps<Type>;
  export type BaseProps = DatePickerBaseProps;
  export type StylesNames = DatePickerStylesNames;
  export type Factory = DatePickerFactory;
  export type Preset<Type extends DatePickerType> = DatePickerPreset<Type>;
  export type CssVariables = DatePickerCssVariables;
}
