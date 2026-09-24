import { useMemo } from 'react';
import {
  useTimeEntry,
  type TimeEntryController,
  type TimeEntryControllerOptions,
} from '../../InlineDateTimePicker/use-inline-date-time-picker/use-time-entry';
import {
  usePickerInputController,
  type PickerInputController,
  type PickerInputControllerOptions,
} from '../../PickerInputBase/use-picker-input-controller/use-picker-input-controller';

export interface DateTimePickerControllerOptions
  extends PickerInputControllerOptions, TimeEntryControllerOptions {}

export interface DateTimePickerController extends PickerInputController, TimeEntryController {}

export function useDateTimePicker(
  options: DateTimePickerControllerOptions = {}
): DateTimePickerController {
  const { time, onTimeChange, endTime, onEndTimeChange, defaultTimeValue, ...pickerOptions } =
    options;

  const picker = usePickerInputController(pickerOptions, 'month');
  const timeEntry = useTimeEntry({
    time,
    onTimeChange,
    endTime,
    onEndTimeChange,
    defaultTimeValue,
  });

  return useMemo(() => ({ ...picker, ...timeEntry }), [picker, timeEntry]);
}
