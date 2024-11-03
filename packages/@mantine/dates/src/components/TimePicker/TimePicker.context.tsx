import { createSafeContext, GetStylesApi } from '@mantine/core';
import type { TimePickerFactory } from './TimePicker';

interface TimePickerContext {
  getStyles: GetStylesApi<TimePickerFactory>;
}

export const [TimePickerProvider, useTimePickerContext] = createSafeContext<TimePickerContext>(
  'TimeInput component was not found in the component tree'
);
