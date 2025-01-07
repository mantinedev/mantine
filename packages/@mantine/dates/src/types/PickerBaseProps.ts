import type { DatePickerType, DatePickerValue } from './DatePickerValue';

export interface PickerBaseProps<Type extends DatePickerType = 'default'> {
  /** Picker type: range, multiple or default */
  type?: DatePickerType | Type;

  /** Value for controlled component */
  value?: DatePickerValue<Type>;

  /** Default value for uncontrolled component */
  defaultValue?: DatePickerValue<Type>;

  /** Called when value changes */
  onChange?: (value: DatePickerValue<Type>) => void;

  /** Determines whether user can deselect the date by clicking on selected item, applicable only when type="default" */
  allowDeselect?: Type extends 'default' ? boolean : never;

  /** Determines whether a single day can be selected as range, applicable only when type="range" */
  allowSingleDateInRange?: Type extends 'range' ? boolean : never;
}
