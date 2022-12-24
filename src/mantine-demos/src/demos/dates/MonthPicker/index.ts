import { MonthPicker } from '@mantine/dates';
import { getSharedPickerDemos } from '../_shared';

export const { usage, multiple, deselect, range, singleRange, numberOfColumns, sizeConfigurator } =
  getSharedPickerDemos(MonthPicker);

export { controlledDate } from './MonthPicker.demo.controlledDate';
export { controlProps } from './MonthPicker.demo.controlProps';
export { labelFormat } from './MonthPicker.demo.labelFormat';
export { defaultDate } from './MonthPicker.demo.defaultDate';
