import { Input, InputWrapper } from '@mantine/core/src/styles.api';
import { Calendar } from '../Calendar/styles.api';
import { DatePickerStylesNames } from './DatePickerBase';

export const DatePicker: Record<DatePickerStylesNames, string> = {
  wrapper: 'Wrapper around input and dropdown',
  placeholder: 'Placeholder text',
  dropdownWrapper: 'Wrapper around dropdown',
  dropdown: 'Dropdown with calendar',
  ...Input,
  ...InputWrapper,
  ...Calendar,
};
