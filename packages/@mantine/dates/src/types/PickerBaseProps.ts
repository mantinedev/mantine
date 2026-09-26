import { DatePickerType, DatePickerValue } from './DatePickerValue';
import { DateStringValue } from './GeneralTypes';

export interface PickerBaseProps<Type extends DatePickerType = 'default'> {
  /** Picker type: range, multiple or default @category state */
  type?: DatePickerType | Type;

  /** Value for controlled component @category state */
  value?: DatePickerValue<Type>;

  /** Default value for uncontrolled component @category state */
  defaultValue?: DatePickerValue<Type>;

  /** Called when value changes @category state */
  onChange?: (value: DatePickerValue<Type, DateStringValue>) => void;

  /** Determines whether user can deselect the date by clicking on selected item, applicable only when type="default" @category behavior */
  allowDeselect?: Type extends 'default' ? boolean : never;

  /** Determines whether a single day can be selected as range, applicable only when type="range" @category behavior */
  allowSingleDateInRange?: Type extends 'range' ? boolean : never;
}
