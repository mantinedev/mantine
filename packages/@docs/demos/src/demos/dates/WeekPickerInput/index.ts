import { WeekPickerInput } from '@mantine/dates';
import { getSharedPickerInputDemos } from '../_shared';

export const { usage, multiple, range, configurator, modal, icon, clearable, valueFormatter } =
  getSharedPickerInputDemos(WeekPickerInput);

export { valueFormat } from './WeekPickerInput.demo.valueFormat';
export { weekNumberFormatter } from './WeekPickerInput.demo.weekNumberFormatter';
export { disabled } from './WeekPickerInput.demo.disabled';
export { firstDayOfWeek } from './WeekPickerInput.demo.firstDayOfWeek';
export { minMax } from './WeekPickerInput.demo.minMax';
export { presets } from './WeekPickerInput.demo.presets';
export { presetsRange } from './WeekPickerInput.demo.presetsRange';
export { maxLevel } from './WeekPickerInput.demo.maxLevel';
export { clearSectionMode } from './WeekPickerInput.demo.clearSectionMode';
export { nativeLevelSelect } from './WeekPickerInput.demo.nativeLevelSelect';
export { controller } from './WeekPickerInput.demo.controller';
