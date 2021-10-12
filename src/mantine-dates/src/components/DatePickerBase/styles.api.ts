import { Input, InputWrapper } from '@mantine/core/src/styles.api';
import { Calendar } from '../Calendar/styles.api';
import { DatePickerStylesNames } from './DatePickerBase';

export const DatePicker: Record<DatePickerStylesNames, string> = {
  wrapper: 'Wrapper around input and dropdown',
  placeholder: 'Placeholder text',
  dropdownWrapper: 'Wrapper around dropdown',
  dropdown: 'Dropdown with calendar',
  value: 'Value text',
  ...Input,
  ...InputWrapper,
  // Calendar styles api is included as all date pickers are used only with calendar
  ...Calendar,
};

export const DateRangePicker = DatePicker;
