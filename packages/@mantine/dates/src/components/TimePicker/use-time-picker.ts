import { useCallback, useMemo, useRef, useState } from 'react';
import { useCallbackRef, useDidUpdate } from '@mantine/hooks';
import type {
  TimePickerAmPmLabels,
  TimePickerField,
  TimePickerFormat,
  TimePickerPasteSplit,
  TimePickerType,
} from './TimePicker.types';
import { clampTime } from './utils/clamp-time/clamp-time';
import { getParsedTime } from './utils/get-parsed-time/get-parsed-time';
import { getTimeString } from './utils/get-time-string/get-time-string';

export interface TimePickerControllerOptions {
  /** Controlled component value */
  value?: string;

  /** Uncontrolled component default value */
  defaultValue?: string;

  /** Called when the value changes, called with an empty string when the entered value is not complete */
  onChange?: (value: string) => void;

  /** TimePicker type, `'duration'` allows values greater than 24 hours and disables the am/pm field @default 'time' */
  type?: TimePickerType;

  /** Time format @default '24h' */
  format?: TimePickerFormat;

  /** Labels used for am/pm values @default { am: 'AM', pm: 'PM' } */
  amPmLabels?: TimePickerAmPmLabels;

  /** Determines whether the seconds field is a part of the value @default false */
  withSeconds?: boolean;

  /** Min possible time value in `hh:mm:ss` format, used by `clamp` and on paste */
  min?: string;

  /** Max possible time value in `hh:mm:ss` format, used by `clamp` and on paste */
  max?: string;

  /** A function to transform pasted values, by default time in 24h format can be parsed on paste, for example `23:34:22` */
  pasteSplit?: TimePickerPasteSplit;
}

export interface TimePickerController {
  /** Current value in `hh:mm:ss` or `hh:mm` 24h format, empty string when the entered value is not complete */
  value: string;

  /** Hours field value, `null` when the field is empty */
  hours: number | null;

  /** Minutes field value, `null` when the field is empty */
  minutes: number | null;

  /** Seconds field value, `null` when the field is empty */
  seconds: number | null;

  /** Am/pm field value, always `null` when `format` is `24h` */
  amPm: string | null;

  /** Returns current value in `hh:mm:ss` or `hh:mm` 24h format, empty string when the entered value is not complete */
  getValue: () => string;

  /** Returns hours field value, `null` when the field is empty */
  getHours: () => number | null;

  /** Returns minutes field value, `null` when the field is empty */
  getMinutes: () => number | null;

  /** Returns seconds field value, `null` when the field is empty */
  getSeconds: () => number | null;

  /** Returns am/pm field value, always `null` when `format` is `24h` */
  getAmPm: () => string | null;

  /** Returns `true` when at least one field has a value, including values that are not complete */
  hasValue: () => boolean;

  /** Resolved `type` option, used internally by `TimePicker` to decide which fields to render */
  type: TimePickerType;

  /** Resolved `format` option, always `24h` when `type` is `duration`, used internally by `TimePicker` to decide which fields to render */
  format: TimePickerFormat;

  /** Resolved `withSeconds` option, used internally by `TimePicker` to decide which fields to render */
  withSeconds: boolean;

  /** Resolved `amPmLabels` option, used internally by `TimePicker` to render the am/pm field */
  amPmLabels: TimePickerAmPmLabels;

  /** Sets all fields from a time string, for example `14:30:00` */
  setValue: (value: string) => void;

  /** Sets hours field value */
  setHours: (hours: number | null) => void;

  /** Sets minutes field value */
  setMinutes: (minutes: number | null) => void;

  /** Sets seconds field value */
  setSeconds: (seconds: number | null) => void;

  /** Sets am/pm field value, ignored when `format` is `24h` */
  setAmPm: (amPm: string | null) => void;

  /** Clears all fields and moves focus to the hours field */
  clear: () => void;

  /** Clamps the current value to `min` and `max`, no-op if the value is not complete or neither option is set */
  clamp: () => void;

  /** Moves focus to the given field, no-op until the associated TimePicker is mounted */
  focus: (field: TimePickerField) => void;

  /** Refs of the fields rendered by the associated component, used internally by `TimePicker` */
  refs: {
    hours: React.RefObject<HTMLInputElement | null>;
    minutes: React.RefObject<HTMLInputElement | null>;
    seconds: React.RefObject<HTMLInputElement | null>;
    amPm: React.RefObject<HTMLSelectElement | null>;
  };

  /** Parses pasted time strings, used internally by the fields rendered by `TimePicker` */
  onPaste: (event: React.ClipboardEvent<any>) => void;
}

const DEFAULT_AM_PM_LABELS: TimePickerAmPmLabels = { am: 'AM', pm: 'PM' };

export function useTimePicker(options: TimePickerControllerOptions = {}): TimePickerController {
  const {
    value: valueProp,
    defaultValue,
    onChange,
    type = 'time',
    format: formatOption = '24h',
    amPmLabels = DEFAULT_AM_PM_LABELS,
    withSeconds = false,
    min,
    max,
    pasteSplit,
  } = options;

  const format = type === 'duration' ? '24h' : formatOption;

  const parsedInitialTime = getParsedTime({
    time: valueProp || defaultValue || '',
    amPmLabels,
    format,
  });

  const initialTimeString = getTimeString({
    hours: parsedInitialTime.hours,
    minutes: parsedInitialTime.minutes,
    seconds: parsedInitialTime.seconds,
    format,
    withSeconds,
    amPm: parsedInitialTime.amPm,
    amPmLabels,
  });

  const acceptChange = useRef(true);
  const wasInvalidBefore = useRef(!initialTimeString.valid);

  const [hours, setHoursState] = useState<number | null>(parsedInitialTime.hours);
  const [minutes, setMinutesState] = useState<number | null>(parsedInitialTime.minutes);
  const [seconds, setSecondsState] = useState<number | null>(parsedInitialTime.seconds);
  const [amPm, setAmPmState] = useState<string | null>(parsedInitialTime.amPm);

  const hoursRef = useRef<HTMLInputElement>(null);
  const minutesRef = useRef<HTMLInputElement>(null);
  const secondsRef = useRef<HTMLInputElement>(null);
  const amPmRef = useRef<HTMLSelectElement>(null);

  const refs = useMemo(
    () => ({ hours: hoursRef, minutes: minutesRef, seconds: secondsRef, amPm: amPmRef }),
    []
  );

  const focus = useCallback((field: TimePickerField) => {
    if (field === 'hours') {
      hoursRef.current?.focus();
    }

    if (field === 'minutes') {
      minutesRef.current?.focus();
    }

    if (field === 'seconds') {
      secondsRef.current?.focus();
    }

    if (field === 'amPm') {
      amPmRef.current?.focus();
    }
  }, []);

  const handleTimeChange = useCallbackRef((field: TimePickerField, val: any) => {
    const timeString = getTimeString({
      hours: field === 'hours' ? val : hours,
      minutes: field === 'minutes' ? val : minutes,
      seconds: field === 'seconds' ? val : seconds,
      amPm: field === 'amPm' ? val : amPm,
      format,
      withSeconds,
      amPmLabels,
    });

    if (timeString.valid) {
      acceptChange.current = false;
      wasInvalidBefore.current = false;
      if (field === 'hours') {
        setHoursState(val);
      }
      if (field === 'minutes') {
        setMinutesState(val);
      }
      if (field === 'seconds') {
        setSecondsState(val);
      }
      if (field === 'amPm') {
        setAmPmState(val);
      }

      onChange?.(timeString.value);
    } else {
      acceptChange.current = false;
      if (!wasInvalidBefore.current) {
        onChange?.('');
        wasInvalidBefore.current = true;
      }
    }
  });

  const setValue = useCallbackRef((timeString: string) => {
    acceptChange.current = false;

    const parsedTime = getParsedTime({ time: timeString, amPmLabels, format });
    setHoursState(parsedTime.hours);
    setMinutesState(parsedTime.minutes);
    setSecondsState(parsedTime.seconds);
    setAmPmState(parsedTime.amPm);

    const next = getTimeString({ ...parsedTime, format, withSeconds, amPmLabels });
    wasInvalidBefore.current = !next.valid;
    onChange?.(next.value);
  });

  const setHours = useCallbackRef((val: number | null) => {
    let adjustedValue = val;
    if (format === '12h' && typeof val === 'number' && val > 12) {
      adjustedValue = ((val - 1) % 12) + 1;
    }

    setHoursState(adjustedValue);
    handleTimeChange('hours', adjustedValue);
    focus('hours');
  });

  const setMinutes = useCallbackRef((val: number | null) => {
    setMinutesState(val);
    handleTimeChange('minutes', val);
    focus('minutes');
  });

  const setSeconds = useCallbackRef((val: number | null) => {
    setSecondsState(val);
    handleTimeChange('seconds', val);
    focus('seconds');
  });

  const setAmPm = useCallbackRef((val: string | null) => {
    if (format === '24h') {
      return;
    }

    setAmPmState(val);
    handleTimeChange('amPm', val);
    focus('amPm');
  });

  const clear = useCallbackRef(() => {
    acceptChange.current = false;
    setHoursState(null);
    setMinutesState(null);
    setSecondsState(null);
    setAmPmState(null);
    onChange?.('');
    wasInvalidBefore.current = true;
    focus('hours');
  });

  const onPaste = useCallbackRef((event: React.ClipboardEvent<any>) => {
    event.preventDefault();
    const pastedValue = event.clipboardData.getData('text');
    const parsedTime = (pasteSplit || getParsedTime)({ time: pastedValue, format, amPmLabels });
    const timeString = getTimeString({ ...parsedTime, format, withSeconds, amPmLabels });
    if (timeString.valid) {
      acceptChange.current = false;
      const defaultMax = type === 'duration' ? undefined : '23:59:59';
      const clamped = clampTime(
        timeString.value,
        min || '00:00:00',
        max || defaultMax,
        withSeconds
      );
      onChange?.(clamped.timeString);
      setHoursState(parsedTime.hours);
      setMinutesState(parsedTime.minutes);
      setSecondsState(parsedTime.seconds);
      setAmPmState(parsedTime.amPm);
    }
  });

  const currentTimeString = getTimeString({
    hours,
    minutes,
    seconds,
    format,
    withSeconds,
    amPm,
    amPmLabels,
  });

  const clamp = useCallbackRef(() => {
    if (!currentTimeString.valid || (!min && !max)) {
      return;
    }

    const clamped = clampTime(currentTimeString.value, min, max, withSeconds);

    if (clamped.timeString !== currentTimeString.value) {
      setValue(clamped.timeString);
    }
  });

  useDidUpdate(() => {
    if (valueProp === '') {
      acceptChange.current = false;
      setHoursState(null);
      setMinutesState(null);
      setSecondsState(null);
      setAmPmState(null);
      acceptChange.current = true;
      return;
    }

    if (acceptChange.current && typeof valueProp === 'string') {
      const parsedTime = getParsedTime({ time: valueProp || '', amPmLabels, format });
      setHoursState(parsedTime.hours);
      setMinutesState(parsedTime.minutes);
      setSecondsState(parsedTime.seconds);
      setAmPmState(parsedTime.amPm);
    }
    acceptChange.current = true;
  }, [valueProp]);

  const value = currentTimeString.value;

  const latest = useRef({ value, hours, minutes, seconds, amPm });
  latest.current = { value, hours, minutes, seconds, amPm };

  const getValue = useCallback(() => latest.current.value, []);
  const getHours = useCallback(() => latest.current.hours, []);
  const getMinutes = useCallback(() => latest.current.minutes, []);
  const getSeconds = useCallback(() => latest.current.seconds, []);
  const getAmPm = useCallback(() => latest.current.amPm, []);
  const hasValue = useCallback(
    () =>
      latest.current.hours !== null ||
      latest.current.minutes !== null ||
      latest.current.seconds !== null ||
      latest.current.amPm !== null,
    []
  );

  return useMemo(
    () => ({
      value,
      hours,
      minutes,
      seconds,
      amPm,
      getValue,
      getHours,
      getMinutes,
      getSeconds,
      getAmPm,
      hasValue,
      type,
      format,
      withSeconds,
      amPmLabels,
      setValue,
      setHours,
      setMinutes,
      setSeconds,
      setAmPm,
      clear,
      clamp,
      focus,
      refs,
      onPaste,
    }),
    [value, hours, minutes, seconds, amPm, type, format, withSeconds, amPmLabels.am, amPmLabels.pm]
  );
}
