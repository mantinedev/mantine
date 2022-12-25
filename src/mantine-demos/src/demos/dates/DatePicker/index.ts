import { DatePicker } from '@mantine/dates';
import { getSharedPickerDemos } from '../_shared';

export const { usage, multiple, deselect, range, singleRange, numberOfColumns, sizeConfigurator } =
  getSharedPickerDemos(DatePicker);

export { controlledDate } from './DatePicker.demo.controlledDate';
export { controlProps } from './DatePicker.demo.controlProps';
export { defaultDate } from './DatePicker.demo.defaultDate';
export { labelFormat } from './DatePicker.demo.labelFormat';
export { listFormat } from './DatePicker.demo.listFormat';
export { locale } from './DatePicker.demo.locale';
export { maxLevel } from './DatePicker.demo.maxLevel';
export { minMax } from './DatePicker.demo.minMax';
