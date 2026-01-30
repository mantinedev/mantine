import { MonthPickerInput } from '@mantine/dates';
import { getSharedPickerInputDemos } from '../_shared';

export const { usage, multiple, range, configurator, modal, icon, clearable, valueFormatter } =
  getSharedPickerInputDemos(MonthPickerInput);

export { clearSectionMode } from './MonthPickerInput.demo.clearSectionMode';
export { valueFormat } from './MonthPickerInput.demo.valueFormat';
export { disabled } from './MonthPickerInput.demo.disabled';
export { minMax } from './MonthPickerInput.demo.minMax';
export { controlProps } from './MonthPickerInput.demo.controlProps';
export { labelFormat } from './MonthPickerInput.demo.labelFormat';
export { listFormat } from './MonthPickerInput.demo.listFormat';
export { maxLevel } from './MonthPickerInput.demo.maxLevel';
