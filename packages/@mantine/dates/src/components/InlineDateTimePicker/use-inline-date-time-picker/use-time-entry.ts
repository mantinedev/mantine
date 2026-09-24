import { useCallback, useMemo, useRef } from 'react';
import { useCallbackRef, useLatestRef, useUncontrolled } from '@mantine/hooks';
import type { TimePickerField } from '../../TimePicker/TimePicker.types';

export type TimeEntryTarget = 'time' | 'endTime';

export interface TimeEntryFocusRequest {
  /** Time input the field belongs to */
  target: TimeEntryTarget;

  /** Field to focus */
  field: TimePickerField;
}

export interface TimeEntryControllerOptions {
  /** Time of the start time input in controlled mode, `HH:mm` or `HH:mm:ss` string. For `default` type, the only time input */
  time?: string;

  /** Called when the time of the start time input changes */
  onTimeChange?: (time: string) => void;

  /** Time of the end time input in controlled mode, used only with `type="range"` */
  endTime?: string;

  /** Called when the time of the end time input changes */
  onEndTimeChange?: (time: string) => void;

  /** Time set in the time inputs when they are rendered and used when a date is selected while the time inputs are empty */
  defaultTimeValue?: string;
}

export interface TimeEntryRegisteredSettings {
  /** Token that identifies a mount of the associated component, a new token resets the time inputs */
  instance: object;

  /** Time of the value start date (of the value for `default` type), empty string when the value has no date */
  valueTime: string;

  /** Time of the value end date, empty string when the value has no end date or type is not `range` */
  valueEndTime: string;

  /** Assigns the given time to the value start date (to the value for `default` type) */
  applyTime: (time: string) => void;

  /** Assigns the given time to the value end date */
  applyEndTime: (time: string) => void;
}

export interface TimeEntryController {
  /** Time of the start time input */
  time: string;

  /** Returns the time of the start time input: the time of the value, or the time entered before a date is selected */
  getTime: () => string;

  /** Sets the time of the start time input. When the value has a date, its time is updated as well. When the time inputs are not rendered, the time is applied to the value when they are rendered next */
  setTime: (time: string) => void;

  /** Time of the end time input */
  endTime: string;

  /** Returns the time of the end time input, empty string unless `type="range"` */
  getEndTime: () => string;

  /** Sets the time of the end time input, same as `setTime` for the end date of the range. Used only with `type="range"` */
  setEndTime: (time: string) => void;

  /** Focuses the given field of the start time input. When the time inputs are not rendered (the dropdown is closed or the calendar is not on the month level), the field is focused when they are rendered next */
  focusTime: (field: TimePickerField) => void;

  /** Focuses the given field of the end time input, same as `focusTime`. Used only with `type="range"` */
  focusEndTime: (field: TimePickerField) => void;

  /** Value of the `defaultTimeValue` option, used internally by `InlineDateTimePicker` when a date is selected while the time inputs are empty */
  defaultTimeValue: string | undefined;

  /** Returns the field requested with `focusTime`/`focusEndTime` that is not focused yet, used internally by `InlineDateTimePicker` to mark it for the dropdown focus trap */
  getPendingTimeFocus: () => TimeEntryFocusRequest | null;

  /** Refs of the time input fields, used internally by `InlineDateTimePicker` */
  timeFieldRefs: Record<
    TimeEntryTarget,
    Record<TimePickerField, React.RefCallback<HTMLInputElement>>
  >;

  /** Registers the associated component, used internally by `InlineDateTimePicker` */
  registerTimePicker: (settings: TimeEntryRegisteredSettings) => () => void;
}

const TIME_FIELDS: TimePickerField[] = ['hours', 'minutes', 'seconds', 'amPm'];

export function useTimeEntry(options: TimeEntryControllerOptions): TimeEntryController {
  const [time, setTimeState, timeControlled] = useUncontrolled({
    value: options.time,
    defaultValue: options.defaultTimeValue,
    finalValue: '',
    onChange: options.onTimeChange,
  });

  const [endTime, setEndTimeState, endTimeControlled] = useUncontrolled({
    value: options.endTime,
    defaultValue: options.defaultTimeValue,
    finalValue: '',
    onChange: options.onEndTimeChange,
  });

  const latest = useLatestRef({
    time,
    endTime,
    timeControlled,
    endTimeControlled,
    defaultTimeValue: options.defaultTimeValue,
  });

  const settingsRef = useRef<TimeEntryRegisteredSettings | null>(null);
  const instanceRef = useRef<object | null>(null);
  const valueTimesRef = useRef({ time: '', endTime: '' });
  const keepOnMountRef = useRef(false);
  const fieldsRef = useRef<
    Record<TimeEntryTarget, Partial<Record<TimePickerField, HTMLInputElement | null>>>
  >({ time: {}, endTime: {} });
  const pendingFocusRef = useRef<TimeEntryFocusRequest | null>(null);

  const writeTime = useCallbackRef((next: string) => {
    if (next === latest.current.time) {
      return;
    }

    if (!timeControlled) {
      latest.current.time = next;
    }

    setTimeState(next);
  });

  const writeEndTime = useCallbackRef((next: string) => {
    if (next === latest.current.endTime) {
      return;
    }

    if (!endTimeControlled) {
      latest.current.endTime = next;
    }

    setEndTimeState(next);
  });

  const getTime = useCallback(() => latest.current.time, []);
  const getEndTime = useCallback(() => latest.current.endTime, []);

  const setTime = useCallback((next: string) => {
    writeTime(next);

    if (settingsRef.current) {
      settingsRef.current.applyTime(next);
    } else {
      keepOnMountRef.current = true;
    }
  }, []);

  const setEndTime = useCallback((next: string) => {
    writeEndTime(next);

    if (settingsRef.current) {
      settingsRef.current.applyEndTime(next);
    } else {
      keepOnMountRef.current = true;
    }
  }, []);

  const requestFocus = useCallback((target: TimeEntryTarget, field: TimePickerField) => {
    const node = fieldsRef.current[target][field];

    if (node) {
      pendingFocusRef.current = null;
      node.focus();
    } else {
      pendingFocusRef.current = { target, field };
    }
  }, []);

  const getPendingTimeFocus = useCallback(() => pendingFocusRef.current, []);

  const focusTime = useCallback((field: TimePickerField) => requestFocus('time', field), []);
  const focusEndTime = useCallback((field: TimePickerField) => requestFocus('endTime', field), []);

  const timeFieldRefs = useMemo(() => {
    const createRefs = (target: TimeEntryTarget) =>
      Object.fromEntries(
        TIME_FIELDS.map((field) => [
          field,
          (node: HTMLInputElement | null) => {
            fieldsRef.current[target][field] = node;
            const pending = pendingFocusRef.current;

            if (node && pending && pending.target === target && pending.field === field) {
              pendingFocusRef.current = null;
              node.focus();
            }
          },
        ])
      ) as Record<TimePickerField, React.RefCallback<HTMLInputElement>>;

    return { time: createRefs('time'), endTime: createRefs('endTime') };
  }, []);

  const registerTimePicker = useCallback((settings: TimeEntryRegisteredSettings) => {
    settingsRef.current = settings;
    const previousValueTimes = valueTimesRef.current;
    valueTimesRef.current = { time: settings.valueTime, endTime: settings.valueEndTime };

    if (settings.instance !== instanceRef.current) {
      instanceRef.current = settings.instance;

      if (keepOnMountRef.current) {
        keepOnMountRef.current = false;
        settings.applyTime(latest.current.time);
        settings.applyEndTime(latest.current.endTime);
      } else {
        const defaultTimeValue = latest.current.defaultTimeValue;

        if (!latest.current.timeControlled) {
          writeTime(defaultTimeValue || settings.valueTime);
        }

        if (!latest.current.endTimeControlled) {
          writeEndTime(defaultTimeValue || settings.valueEndTime);
        }
      }
    } else if (
      previousValueTimes.time !== settings.valueTime ||
      previousValueTimes.endTime !== settings.valueEndTime
    ) {
      if (!latest.current.timeControlled) {
        writeTime(settings.valueTime);
      }

      if (!latest.current.endTimeControlled) {
        writeEndTime(settings.valueEndTime);
      }
    }

    return () => {
      if (settingsRef.current === settings) {
        settingsRef.current = null;
      }
    };
  }, []);

  return useMemo(
    () => ({
      time,
      getTime,
      setTime,
      endTime,
      getEndTime,
      setEndTime,
      focusTime,
      focusEndTime,
      getPendingTimeFocus,
      defaultTimeValue: options.defaultTimeValue,
      timeFieldRefs,
      registerTimePicker,
    }),
    [time, endTime, options.defaultTimeValue]
  );
}
