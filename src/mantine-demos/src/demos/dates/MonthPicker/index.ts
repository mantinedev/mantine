import { MonthPicker } from '@mantine/dates';
import { getSharedPickerDemos } from '../_shared';

export const { usage, multiple, deselect, range, singleRange, numberOfColumns, sizeConfigurator } =
  getSharedPickerDemos(MonthPicker);

export { controlledDate } from './MonthPicker.demo.controlledDate';
export { controlProps } from './MonthPicker.demo.controlProps';
export { labelFormat } from './MonthPicker.demo.labelFormat';
export { defaultDate } from './MonthPicker.demo.defaultDate';
export { minMax } from './MonthPicker.demo.minMax';
export { listFormat } from './MonthPicker.demo.listFormat';
export { maxLevel } from './MonthPicker.demo.maxLevel';
export { locale } from './MonthPicker.demo.locale';
