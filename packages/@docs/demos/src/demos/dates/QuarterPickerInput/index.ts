import { QuarterPickerInput } from '@mantine/dates';
import { getSharedPickerInputDemos } from '../_shared';

export const { usage, multiple, range, configurator, modal, icon, clearable, valueFormatter } =
  getSharedPickerInputDemos(QuarterPickerInput);

export { valueFormat } from './QuarterPickerInput.demo.valueFormat';
export { disabled } from './QuarterPickerInput.demo.disabled';
export { minMax } from './QuarterPickerInput.demo.minMax';
export { presets } from './QuarterPickerInput.demo.presets';
export { presetsRange } from './QuarterPickerInput.demo.presetsRange';
export { maxLevel } from './QuarterPickerInput.demo.maxLevel';
export { clearSectionMode } from './QuarterPickerInput.demo.clearSectionMode';
export { nativeLevelSelect } from './QuarterPickerInput.demo.nativeLevelSelect';
