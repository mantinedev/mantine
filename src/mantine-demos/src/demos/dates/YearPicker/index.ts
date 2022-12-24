import { YearPicker } from '@mantine/dates';
import { getSharedPickerDemos } from '../_shared';

export const { usage, multiple, deselect, range, singleRange, numberOfColumns, sizeConfigurator } =
  getSharedPickerDemos(YearPicker);

export { minMax } from './YearPicker.demo.minMax';
export { controlProps } from './YearPicker.demo.controlProps';
export { yearsListFormat } from './YearPicker.demo.yearsListFormat';
export { decadeLabelFormat } from './YearPicker.demo.decadeLabelFormat';
export { defaultDate } from './YearPicker.demo.defaultDate';
export { controlledDate } from './YearPicker.demo.controlledDate';
