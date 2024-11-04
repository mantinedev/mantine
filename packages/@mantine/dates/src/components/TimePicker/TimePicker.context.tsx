import { createSafeContext, GetStylesApi, ScrollAreaProps } from '@mantine/core';
import type { TimePickerFactory } from './TimePicker';

interface TimePickerContext {
  getStyles: GetStylesApi<TimePickerFactory>;
  maxDropdownContentHeight: number;
  scrollAreaProps: ScrollAreaProps | undefined;
}

export const [TimePickerProvider, useTimePickerContext] = createSafeContext<TimePickerContext>(
  'TimeInput component was not found in the component tree'
);
