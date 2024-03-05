import { YearPickerInput } from '@mantine/dates';
import { getSharedPickerInputDemos } from '../_shared';

export const { usage, multiple, range, configurator, modal, icon, clearable, valueFormatter } =
  getSharedPickerInputDemos(YearPickerInput);

export { valueFormat } from './YearPickerInput.demo.valueFormat';
export { disabled } from './YearPickerInput.demo.disabled';
