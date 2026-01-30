import { YearPickerInput } from '@mantine/dates';
import { getSharedPickerInputDemos } from '../_shared';

export const { usage, multiple, range, configurator, modal, icon, clearable, valueFormatter } =
  getSharedPickerInputDemos(YearPickerInput);

export { clearSectionMode } from './YearPickerInput.demo.clearSectionMode';
export { valueFormat } from './YearPickerInput.demo.valueFormat';
export { disabled } from './YearPickerInput.demo.disabled';
export { minMax } from './YearPickerInput.demo.minMax';
export { controlProps } from './YearPickerInput.demo.controlProps';
export { yearsListFormat } from './YearPickerInput.demo.yearsListFormat';
export { decadeLabelFormat } from './YearPickerInput.demo.decadeLabelFormat';
