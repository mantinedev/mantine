import type {
  TimePickerCssVariables,
  TimePickerFactory,
  TimePickerProps,
  TimePickerStylesNames,
} from './TimePicker';
import type {
  TimePickerAmPmLabels,
  TimePickerFormat,
  TimePickerPasteSplit,
  TimePickerPresets,
  TimePickerType,
} from './TimePicker.types';

export { TimePicker } from './TimePicker';
export { getTimeRange } from './utils/get-time-range/get-time-range';

export type {
  TimePickerProps,
  TimePickerStylesNames,
  TimePickerFactory,
  TimePickerCssVariables,
  TimePickerFormat,
  TimePickerAmPmLabels,
  TimePickerPasteSplit,
  TimePickerPresets,
  TimePickerType,
};

export namespace TimePicker {
  export type Props = TimePickerProps;
  export type StylesNames = TimePickerStylesNames;
  export type Factory = TimePickerFactory;
  export type CssVariables = TimePickerCssVariables;
  export type Format = TimePickerFormat;
  export type AmPmLabels = TimePickerAmPmLabels;
  export type PasteSplit = TimePickerPasteSplit;
  export type Presets = TimePickerPresets;
  export type Type = TimePickerType;
}
