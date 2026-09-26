import { useMemo } from 'react';
import {
  useTimeEntry,
  TimeEntryController,
  TimeEntryControllerOptions,
} from '../../InlineDateTimePicker/use-inline-date-time-picker/use-time-entry';
import {
  usePickerInputController,
  PickerInputController,
  PickerInputControllerOptions,
} from '../../PickerInputBase/use-picker-input-controller/use-picker-input-controller';

export interface DateTimePickerControllerOptions
  extends PickerInputControllerOptions, TimeEntryControllerOptions {}

export interface DateTimePickerController extends PickerInputController, TimeEntryController {}

export function useDateTimePicker(
  options: DateTimePickerControllerOptions = {}
): DateTimePickerController {
  const { time, onTimeChange, endTime, onEndTimeChange, defaultTimeValue, ...pickerOptions } =
    options;

  const picker = usePickerInputController(pickerOptions, 'date');
  const timeEntry = useTimeEntry({
    time,
    onTimeChange,
    endTime,
    onEndTimeChange,
    defaultTimeValue,
  });

  return useMemo(() => ({ ...picker, ...timeEntry }), [picker, timeEntry]);
}
