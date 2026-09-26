import { useMemo } from 'react';
import {
  useCalendar,
  CalendarController,
  CalendarControllerOptions,
} from '../../Calendar/use-calendar/use-calendar';
import { useTimeEntry, TimeEntryController, TimeEntryControllerOptions } from './use-time-entry';

export interface InlineDateTimePickerControllerOptions
  extends CalendarControllerOptions, TimeEntryControllerOptions {}

export interface InlineDateTimePickerController extends CalendarController, TimeEntryController {}

export function useInlineDateTimePicker(
  options: InlineDateTimePickerControllerOptions = {}
): InlineDateTimePickerController {
  const { time, onTimeChange, endTime, onEndTimeChange, defaultTimeValue, ...calendarOptions } =
    options;

  const calendar = useCalendar(calendarOptions);
  const timeEntry = useTimeEntry({
    time,
    onTimeChange,
    endTime,
    onEndTimeChange,
    defaultTimeValue,
  });

  return useMemo(() => ({ ...calendar, ...timeEntry }), [calendar, timeEntry]);
}
