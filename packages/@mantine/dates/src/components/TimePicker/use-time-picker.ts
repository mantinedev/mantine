import { useCallback, useMemo, useRef, useState } from 'react';
import { useCallbackRef, useDidUpdate, useFormField, useLatestRef } from '@mantine/hooks';
import {
  TimePickerAmPmLabels,
  TimePickerField,
  TimePickerFormat,
  TimePickerPasteSplit,
  TimePickerType,
} from './TimePicker.types';
import { clampTime } from './utils/clamp-time/clamp-time';
import { AmPm, getAmPmFromLabel, to12Hours, to24Hours } from './utils/convert-hours/convert-hours';
import {
  clampToDay,
  getParsedTime,
  parseTimeString,
} from './utils/get-parsed-time/get-parsed-time';
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
  amPm: 'am' | 'pm' | null;

  /** Returns current value in `hh:mm:ss` or `hh:mm` 24h format, empty string when the entered value is not complete */
  getValue: () => string;

  /** Returns hours field value, `null` when the field is empty */
  getHours: () => number | null;

  /** Returns minutes field value, `null` when the field is empty */
  getMinutes: () => number | null;

  /** Returns seconds field value, `null` when the field is empty */
  getSeconds: () => number | null;

  /** Returns am/pm field value, always `null` when `format` is `24h` */
  getAmPm: () => 'am' | 'pm' | null;

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

  /** Resolved `min` option, used internally by `TimePicker` to disable dropdown options */
  min: string | undefined;

  /** Resolved `max` option, used internally by `TimePicker` to disable dropdown options */
  max: string | undefined;

  /** Sets all fields from a time string, for example `14:30:00` */
  setValue: (value: string) => void;

  /** Sets hours field value */
  setHours: (hours: number | null) => void;

  /** Sets minutes field value */
  setMinutes: (minutes: number | null) => void;

  /** Sets seconds field value */
  setSeconds: (seconds: number | null) => void;

  /** Sets am/pm field value, ignored when `format` is `24h` */
  setAmPm: (amPm: 'am' | 'pm' | null) => void;

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

  /** Replaces a temporary `0` in the hours field with `12` when `format` is `12h`, used internally by the hours field rendered by `TimePicker` */
  onHoursBlur: () => void;
}

interface TimeFields {
  hours?: number | null;
  minutes?: number | null;
  seconds?: number | null;
  amPm?: AmPm | null;
}

const EMPTY_FIELDS: Required<TimeFields> = {
  hours: null,
  minutes: null,
  seconds: null,
  amPm: null,
};

function convertFields(fields: Required<TimeFields>, to: TimePickerFormat): Required<TimeFields> {
  if (fields.hours === null) {
    return { ...fields, amPm: null };
  }

  if (to === '12h') {
    return { ...fields, ...to12Hours(fields.hours) };
  }

  return {
    ...fields,
    hours: fields.amPm === null ? fields.hours : to24Hours(fields.hours, fields.amPm),
    amPm: null,
  };
}

const DEFAULT_AM_PM_LABELS: TimePickerAmPmLabels = { am: 'AM', pm: 'PM' };

export function useTimePicker(options: TimePickerControllerOptions = {}): TimePickerController {
  const {
    value: valueOption,
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

  const handleExternalWrite = useCallbackRef((external: string) =>
    commit(external ? parseFields(external) : EMPTY_FIELDS, 'never')
  );

  const formField = useFormField<string>(onChange, { onExternalWrite: handleExternalWrite });
  const valueProp = formField.subscribed ? formField.value : valueOption;

  const parseFields = (time: string) => {
    const parsed = parseTimeString(time, amPmLabels);

    if (!parsed) {
      return EMPTY_FIELDS;
    }

    const time24 = type === 'duration' ? parsed : clampToDay(parsed);
    return convertFields({ ...time24, amPm: null }, format);
  };

  const parsedInitialTime = parseFields(valueProp || defaultValue || '');
  const initialTimeString = getTimeString({ ...parsedInitialTime, format, withSeconds });

  const wasInvalidBefore = useRef(!initialTimeString.valid);

  const [hours, setHoursState] = useState<number | null>(parsedInitialTime.hours);
  const [minutes, setMinutesState] = useState<number | null>(parsedInitialTime.minutes);
  const [seconds, setSecondsState] = useState<number | null>(parsedInitialTime.seconds);
  const [amPm, setAmPmState] = useState<AmPm | null>(parsedInitialTime.amPm);

  const fields = useLatestRef({ hours, minutes, seconds, amPm });

  const writeFields = useCallback((next: TimeFields) => {
    fields.current = { ...fields.current, ...next };

    if (next.hours !== undefined) {
      setHoursState(next.hours);
    }

    if (next.minutes !== undefined) {
      setMinutesState(next.minutes);
    }

    if (next.seconds !== undefined) {
      setSecondsState(next.seconds);
    }

    if (next.amPm !== undefined) {
      setAmPmState(next.amPm);
    }
  }, []);

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

  const commit = useCallbackRef(
    (next: TimeFields, report: 'dedupe-incomplete' | 'always' | 'never' = 'dedupe-incomplete') => {
      writeFields(next);
      const timeString = getTimeString({ ...fields.current, format, withSeconds });

      const shouldReport =
        report === 'always' ||
        (report === 'dedupe-incomplete' && (timeString.valid || !wasInvalidBefore.current));
      wasInvalidBefore.current = !timeString.valid;

      if (shouldReport) {
        onChange?.(timeString.value);
      }
    }
  );

  const setValue = useCallbackRef((timeString: string) => {
    commit(parseFields(timeString), 'always');
  });

  const setHours = useCallbackRef((val: number | null) => {
    let adjustedValue = val;
    if (format === '12h' && typeof val === 'number' && val > 12) {
      adjustedValue = ((val - 1) % 12) + 1;
    }

    commit({ hours: adjustedValue });
  });

  const setMinutes = useCallbackRef((val: number | null) => {
    commit({ minutes: val });
  });

  const setSeconds = useCallbackRef((val: number | null) => {
    commit({ seconds: val });
  });

  const setAmPm = useCallbackRef((val: AmPm | null) => {
    if (format === '24h') {
      return;
    }

    commit({ amPm: val });
  });

  const onHoursBlur = useCallbackRef(() => {
    if (format === '12h' && fields.current.hours === 0) {
      commit({ hours: 12 });
    }
  });

  const clear = useCallbackRef(() => {
    commit(EMPTY_FIELDS, 'always');
    focus('hours');
  });

  const onPaste = useCallbackRef((event: React.ClipboardEvent<any>) => {
    event.preventDefault();
    const pastedValue = event.clipboardData.getData('text');
    const split = (pasteSplit || getParsedTime)({ time: pastedValue, format, amPmLabels });
    const parsedTime = {
      hours: split.hours,
      minutes: split.minutes,
      seconds: split.seconds,
      amPm: getAmPmFromLabel(split.amPm, amPmLabels),
    };
    const timeString = getTimeString({ ...parsedTime, format, withSeconds });
    if (timeString.valid) {
      const defaultMax = type === 'duration' ? undefined : '23:59:59';
      const clamped = clampTime(
        timeString.value,
        min || '00:00:00',
        max || defaultMax,
        withSeconds
      );
      commit(parseFields(clamped.timeString));
    }
  });

  const currentTimeString = getTimeString({ hours, minutes, seconds, format, withSeconds, amPm });

  const clamp = useCallbackRef(() => {
    const timeString = getTimeString({ ...fields.current, format, withSeconds });

    if (!timeString.valid || (!min && !max)) {
      return;
    }

    const clamped = clampTime(timeString.value, min, max, withSeconds);

    if (clamped.timeString !== timeString.value) {
      setValue(clamped.timeString);
    }
  });

  useDidUpdate(() => {
    const previousFormat = format === '12h' ? '24h' : '12h';
    const previous = getTimeString({ ...fields.current, format: previousFormat, withSeconds });
    const converted = convertFields(fields.current, format);
    const next = getTimeString({ ...converted, format, withSeconds });
    commit(converted, next.value === previous.value ? 'never' : 'always');
  }, [format]);

  useDidUpdate(() => {
    const entered = getTimeString({ ...fields.current, format, withSeconds }).value;

    if (typeof valueProp !== 'string' || valueProp === entered) {
      return;
    }

    commit(valueProp === '' ? EMPTY_FIELDS : parseFields(valueProp), 'never');
  }, [valueProp]);

  const value = currentTimeString.value;

  const formatOptions = useLatestRef({ format, withSeconds });

  const getValue = useCallback(
    () => getTimeString({ ...fields.current, ...formatOptions.current }).value,
    []
  );
  const getHours = useCallback(() => fields.current.hours, []);
  const getMinutes = useCallback(() => fields.current.minutes, []);
  const getSeconds = useCallback(() => fields.current.seconds, []);
  const getAmPm = useCallback(() => fields.current.amPm, []);
  const hasValue = useCallback(
    () =>
      fields.current.hours !== null ||
      fields.current.minutes !== null ||
      fields.current.seconds !== null ||
      fields.current.amPm !== null,
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
      min,
      max,
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
      onHoursBlur,
    }),
    [
      value,
      hours,
      minutes,
      seconds,
      amPm,
      type,
      format,
      withSeconds,
      amPmLabels.am,
      amPmLabels.pm,
      min,
      max,
    ]
  );
}
