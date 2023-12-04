import { MonthPickerInput } from '@mantine/dates';
import { getSharedPickerInputDemos } from '../_shared';

export const { usage, multiple, range, configurator, modal, icon, clearable } =
  getSharedPickerInputDemos(MonthPickerInput);

export { valueFormat } from './MonthPickerInput.demo.valueFormat';
export { disabled } from './MonthPickerInput.demo.disabled';
