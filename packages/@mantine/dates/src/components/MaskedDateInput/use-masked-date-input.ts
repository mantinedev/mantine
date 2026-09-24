import dayjs from 'dayjs';
import { useCallback, useMemo, useRef, useState } from 'react';
import { useCallbackRef, useDidUpdate, useLatestRef } from '@mantine/hooks';
import type { DateStringValue, DateTimeStringValue } from '../../types';
import { buildDateString } from './build-date-string/build-date-string';
import { getDaysInMonth } from './get-days-in-month/get-days-in-month';
import { parseDateString } from './parse-date-string/parse-date-string';

export type MaskedDateInputField =
  | 'day'
  | 'month'
  | 'year'
  | 'hours'
  | 'minutes'
  | 'seconds'
  | 'amPm';

export type MaskedDateInputValue = DateStringValue | DateTimeStringValue | null;

export type MaskedDateInputFormat = '24h' | '12h';

export interface MaskedDateInputAmPmLabels {
  am: string;
  pm: string;
}

export type MaskedDateInputPasteSplit = (value: string) => {
  day: number | null;
  month: number | null;
  year: number | null;
  hours?: number | null;
  minutes?: number | null;
  seconds?: number | null;
};

export interface MaskedDateInputControllerOptions {
  /** Controlled component value. `YYYY-MM-DD` format when `withTime` is `false`, `YYYY-MM-DD HH:mm:ss` when `withTime` is `true` */
  value?: MaskedDateInputValue;

  /** Uncontrolled component default value */
  defaultValue?: MaskedDateInputValue;

  /** Called when the value changes, called with `null` when the entered value is not complete */
  onChange?: (value: MaskedDateInputValue) => void;

  /** Determines whether time fields are a part of the value @default false */
  withTime?: boolean;

  /** Determines whether the seconds field is a part of the value, requires `withTime` @default false */
  withSeconds?: boolean;

  /** Time format @default '24h' */
  format?: MaskedDateInputFormat;

  /** Labels used for am/pm values @default { am: 'AM', pm: 'PM' } */
  amPmLabels?: MaskedDateInputAmPmLabels;

  /** Minimum possible date, a complete date before it is not reported to `onChange` */
  minDate?: DateStringValue | Date;

  /** Maximum possible date, a complete date after it is not reported to `onChange` */
  maxDate?: DateStringValue | Date;

  /** A function to transform pasted values, by default dates in `YYYY-MM-DD` or `YYYY-MM-DD HH:mm:ss` format can be parsed on paste */
  pasteSplit?: MaskedDateInputPasteSplit;
}

export interface MaskedDateInputController {
  /** Current value, `null` when the entered value is not complete or is outside of `minDate`/`maxDate` */
  value: MaskedDateInputValue;

  /** Day field value, `null` when the field is empty */
  day: number | null;

  /** Month field value (1-12), `null` when the field is empty */
  month: number | null;

  /** Year field value, `null` when the field is empty */
  year: number | null;

  /** Hours field value, `null` when the field is empty */
  hours: number | null;

  /** Minutes field value, `null` when the field is empty */
  minutes: number | null;

  /** Seconds field value, `null` when the field is empty */
  seconds: number | null;

  /** Am/pm field value, always `null` when `format` is `24h` */
  amPm: string | null;

  /** Returns current value, `null` when the entered value is not complete or is outside of `minDate`/`maxDate` */
  getValue: () => MaskedDateInputValue;

  /** Returns day field value, `null` when the field is empty */
  getDay: () => number | null;

  /** Returns month field value (1-12), `null` when the field is empty */
  getMonth: () => number | null;

  /** Returns year field value, `null` when the field is empty */
  getYear: () => number | null;

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

  /** Resolved `withTime` option, used internally by `MaskedDateInput` to decide which fields to render */
  withTime: boolean;

  /** Resolved `withSeconds` option, used internally by `MaskedDateInput` to decide which fields to render */
  withSeconds: boolean;

  /** Resolved `format` option, used internally by `MaskedDateInput` to decide which fields to render */
  format: MaskedDateInputFormat;

  /** Resolved `amPmLabels` option, used internally by `MaskedDateInput` to render the am/pm field */
  amPmLabels: MaskedDateInputAmPmLabels;

  /** Resolved `minDate` option in `YYYY-MM-DD` format, used internally by `MaskedDateInput` to limit the calendar dropdown */
  minDate: DateStringValue | undefined;

  /** Resolved `maxDate` option in `YYYY-MM-DD` format, used internally by `MaskedDateInput` to limit the calendar dropdown */
  maxDate: DateStringValue | undefined;

  /** Sets all fields from a date string, `null` clears all fields. A date string without a time part (`YYYY-MM-DD`) keeps the current time fields */
  setValue: (value: MaskedDateInputValue) => void;

  /** Sets day field value, clamped to the number of days in the current month */
  setDay: (day: number | null) => void;

  /** Sets month field value (1-12) */
  setMonth: (month: number | null) => void;

  /** Sets year field value */
  setYear: (year: number | null) => void;

  /** Sets hours field value */
  setHours: (hours: number | null) => void;

  /** Sets minutes field value */
  setMinutes: (minutes: number | null) => void;

  /** Sets seconds field value */
  setSeconds: (seconds: number | null) => void;

  /** Sets am/pm field value, ignored when `format` is `24h` */
  setAmPm: (amPm: string | null) => void;

  /** Clears all fields and moves focus to the first date field */
  clear: () => void;

  /** Moves focus to the given field, no-op until the associated MaskedDateInput is mounted */
  focus: (field: MaskedDateInputField) => void;

  /** Refs of the fields rendered by the associated component, used internally by `MaskedDateInput` */
  refs: {
    day: React.RefObject<HTMLInputElement | null>;
    month: React.RefObject<HTMLInputElement | null>;
    year: React.RefObject<HTMLInputElement | null>;
    hours: React.RefObject<HTMLInputElement | null>;
    minutes: React.RefObject<HTMLInputElement | null>;
    seconds: React.RefObject<HTMLInputElement | null>;
    amPm: React.RefObject<HTMLSelectElement | null>;
  };

  /** Registers the order of date fields, used internally by `MaskedDateInput` to move focus to the first field on `clear` */
  registerFieldsOrder: (fieldsOrder: ('day' | 'month' | 'year')[]) => () => void;

  /** Parses pasted date strings, used internally by the fields rendered by `MaskedDateInput` */
  onPaste: (event: React.ClipboardEvent<any>) => void;
}

interface Fields {
  day: number | null;
  month: number | null;
  year: number | null;
  hours: number | null;
  minutes: number | null;
  seconds: number | null;
  amPm: string | null;
}

const DEFAULT_FIELDS_ORDER: ('day' | 'month' | 'year')[] = ['day', 'month', 'year'];

const DEFAULT_AM_PM_LABELS: MaskedDateInputAmPmLabels = { am: 'AM', pm: 'PM' };

const EMPTY_FIELDS: Fields = {
  day: null,
  month: null,
  year: null,
  hours: null,
  minutes: null,
  seconds: null,
  amPm: null,
};

function convertTo12h(
  hours24: number | null,
  labels: MaskedDateInputAmPmLabels
): { hours12: number | null; amPm: string | null } {
  if (hours24 === null) {
    return { hours12: null, amPm: null };
  }
  if (hours24 === 0) {
    return { hours12: 12, amPm: labels.am };
  }
  if (hours24 < 12) {
    return { hours12: hours24, amPm: labels.am };
  }
  if (hours24 === 12) {
    return { hours12: 12, amPm: labels.pm };
  }
  return { hours12: hours24 - 12, amPm: labels.pm };
}

function toDateString(date: DateStringValue | Date | undefined) {
  return date ? (dayjs(date).format('YYYY-MM-DD') as DateStringValue) : undefined;
}

function parseFields(
  value: string | null | undefined,
  format: MaskedDateInputFormat,
  amPmLabels: MaskedDateInputAmPmLabels
): Fields {
  const parsed = parseDateString(value);
  const converted = format === '12h' ? convertTo12h(parsed.hours, amPmLabels) : null;

  return {
    day: parsed.day,
    month: parsed.month,
    year: parsed.year,
    hours: converted ? converted.hours12 : parsed.hours,
    minutes: parsed.minutes,
    seconds: parsed.seconds,
    amPm: converted ? converted.amPm : null,
  };
}

export function useMaskedDateInput(
  options: MaskedDateInputControllerOptions = {}
): MaskedDateInputController {
  const {
    value: valueProp,
    defaultValue,
    onChange,
    withTime = false,
    withSeconds = false,
    format = '24h',
    amPmLabels = DEFAULT_AM_PM_LABELS,
    minDate: minDateOption,
    maxDate: maxDateOption,
    pasteSplit,
  } = options;

  const minDate = toDateString(minDateOption);
  const maxDate = toDateString(maxDateOption);

  const build = (fields: Fields) =>
    buildDateString({ ...fields, withTime, withSeconds, format, amPmLabels });

  const isOutOfRange = (dateString: string) => {
    const dateOnly = dateString.split(' ')[0];
    return (
      (!!minDate && dayjs(dateOnly).isBefore(minDate, 'day')) ||
      (!!maxDate && dayjs(dateOnly).isAfter(maxDate, 'day'))
    );
  };

  const [initialFields] = useState(() =>
    parseFields(valueProp ?? defaultValue, format, amPmLabels)
  );

  const acceptChange = useRef(true);
  const wasInvalidBefore = useRef(!build(initialFields).valid);

  const [day, setDayState] = useState<number | null>(initialFields.day);
  const [month, setMonthState] = useState<number | null>(initialFields.month);
  const [year, setYearState] = useState<number | null>(initialFields.year);
  const [hours, setHoursState] = useState<number | null>(initialFields.hours);
  const [minutes, setMinutesState] = useState<number | null>(initialFields.minutes);
  const [seconds, setSecondsState] = useState<number | null>(initialFields.seconds);
  const [amPm, setAmPmState] = useState<string | null>(initialFields.amPm);

  const dayRef = useRef<HTMLInputElement>(null);
  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);
  const hoursRef = useRef<HTMLInputElement>(null);
  const minutesRef = useRef<HTMLInputElement>(null);
  const secondsRef = useRef<HTMLInputElement>(null);
  const amPmRef = useRef<HTMLSelectElement>(null);

  const refs = useMemo(
    () => ({
      day: dayRef,
      month: monthRef,
      year: yearRef,
      hours: hoursRef,
      minutes: minutesRef,
      seconds: secondsRef,
      amPm: amPmRef,
    }),
    []
  );

  const focus = useCallback(
    (field: MaskedDateInputField) => {
      refs[field].current?.focus();
    },
    [refs]
  );

  const fieldsOrderRef = useRef(DEFAULT_FIELDS_ORDER);

  const registerFieldsOrder = useCallback((fieldsOrder: ('day' | 'month' | 'year')[]) => {
    fieldsOrderRef.current = fieldsOrder;

    return () => {
      if (fieldsOrderRef.current === fieldsOrder) {
        fieldsOrderRef.current = DEFAULT_FIELDS_ORDER;
      }
    };
  }, []);

  const fieldsRef = useRef<Fields>(initialFields);

  const setFields = (fields: Fields) => {
    fieldsRef.current = fields;
    setDayState(fields.day);
    setMonthState(fields.month);
    setYearState(fields.year);
    setHoursState(fields.hours);
    setMinutesState(fields.minutes);
    setSecondsState(fields.seconds);
    setAmPmState(fields.amPm);
  };

  const handleFieldChange = useCallbackRef((field: MaskedDateInputField, val: any) => {
    const next: Fields = { ...fieldsRef.current, [field]: val };

    if (next.day !== null && (field === 'month' || field === 'year' || field === 'day')) {
      const maxDays = getDaysInMonth(next.month, next.year);
      if (next.day > maxDays) {
        next.day = maxDays;
      }
    }

    const dateString = build(next);

    if (dateString.valid) {
      acceptChange.current = false;
      wasInvalidBefore.current = false;
      setFields(next);

      if (!isOutOfRange(dateString.value)) {
        onChange?.(dateString.value as MaskedDateInputValue);
      }
    } else {
      acceptChange.current = false;
      setFields({ ...fieldsRef.current, [field]: val });
      if (!wasInvalidBefore.current) {
        onChange?.(null);
        wasInvalidBefore.current = true;
      }
    }
  });

  const setDay = useCallbackRef((val: number | null) => {
    handleFieldChange('day', val);
    focus('day');
  });

  const setMonth = useCallbackRef((val: number | null) => {
    handleFieldChange('month', val);
    focus('month');
  });

  const setYear = useCallbackRef((val: number | null) => {
    handleFieldChange('year', val);
    focus('year');
  });

  const setHours = useCallbackRef((val: number | null) => {
    handleFieldChange('hours', val);
    focus('hours');
  });

  const setMinutes = useCallbackRef((val: number | null) => {
    handleFieldChange('minutes', val);
    focus('minutes');
  });

  const setSeconds = useCallbackRef((val: number | null) => {
    handleFieldChange('seconds', val);
    focus('seconds');
  });

  const setAmPm = useCallbackRef((val: string | null) => {
    if (format === '24h') {
      return;
    }

    handleFieldChange('amPm', val);
    focus('amPm');
  });

  const clear = useCallbackRef(() => {
    acceptChange.current = false;
    setFields(EMPTY_FIELDS);
    onChange?.(null);
    wasInvalidBefore.current = true;
    focus(fieldsOrderRef.current[0] ?? 'day');
  });

  const setValue = useCallbackRef((nextValue: MaskedDateInputValue) => {
    acceptChange.current = false;

    if (!nextValue) {
      setFields(EMPTY_FIELDS);
      onChange?.(null);
      wasInvalidBefore.current = true;
      return;
    }

    const parsed = parseFields(nextValue, format, amPmLabels);
    const hasTime = parsed.hours !== null || parsed.minutes !== null || parsed.seconds !== null;
    const next: Fields = hasTime
      ? parsed
      : {
          ...parsed,
          hours: fieldsRef.current.hours,
          minutes: fieldsRef.current.minutes,
          seconds: fieldsRef.current.seconds,
          amPm: fieldsRef.current.amPm,
        };

    setFields(next);

    const dateString = build(next);
    wasInvalidBefore.current = !dateString.valid;

    if (dateString.valid && !isOutOfRange(dateString.value)) {
      onChange?.(dateString.value as MaskedDateInputValue);
    }
  });

  const onPaste = useCallbackRef((event: React.ClipboardEvent<any>) => {
    const pastedValue = event.clipboardData.getData('text');
    const parsed = pasteSplit ? pasteSplit(pastedValue) : parseDateString(pastedValue);

    if (parsed.day === null || parsed.month === null || parsed.year === null) {
      return;
    }

    event.preventDefault();

    let resolvedHours = parsed.hours ?? null;
    let resolvedAmPm = fieldsRef.current.amPm;

    if (format === '12h' && resolvedHours !== null) {
      const converted = convertTo12h(resolvedHours, amPmLabels);
      resolvedHours = converted.hours12;
      resolvedAmPm = converted.amPm;
    }

    const next: Fields = {
      day: parsed.day,
      month: parsed.month,
      year: parsed.year,
      hours: resolvedHours,
      minutes: parsed.minutes ?? null,
      seconds: parsed.seconds ?? null,
      amPm: resolvedAmPm,
    };

    const dateString = build(next);

    if (dateString.valid && !isOutOfRange(dateString.value)) {
      acceptChange.current = false;
      setFields(next);
      onChange?.(dateString.value as MaskedDateInputValue);
    }
  });

  useDidUpdate(() => {
    if (valueProp === null || valueProp === '') {
      acceptChange.current = false;
      setFields(EMPTY_FIELDS);
      acceptChange.current = true;
      return;
    }

    if (acceptChange.current && typeof valueProp === 'string') {
      setFields(parseFields(valueProp, format, amPmLabels));
    }

    acceptChange.current = true;
  }, [valueProp]);

  const current = build({ day, month, year, hours, minutes, seconds, amPm });
  const value =
    current.valid && !isOutOfRange(current.value) ? (current.value as MaskedDateInputValue) : null;

  const derive = useLatestRef({ build, isOutOfRange });

  const getValue = useCallback(() => {
    const next = derive.current.build(fieldsRef.current);
    return next.valid && !derive.current.isOutOfRange(next.value)
      ? (next.value as MaskedDateInputValue)
      : null;
  }, []);
  const getDay = useCallback(() => fieldsRef.current.day, []);
  const getMonth = useCallback(() => fieldsRef.current.month, []);
  const getYear = useCallback(() => fieldsRef.current.year, []);
  const getHours = useCallback(() => fieldsRef.current.hours, []);
  const getMinutes = useCallback(() => fieldsRef.current.minutes, []);
  const getSeconds = useCallback(() => fieldsRef.current.seconds, []);
  const getAmPm = useCallback(() => fieldsRef.current.amPm, []);
  const hasValue = useCallback(
    () =>
      fieldsRef.current.day !== null ||
      fieldsRef.current.month !== null ||
      fieldsRef.current.year !== null ||
      fieldsRef.current.hours !== null ||
      fieldsRef.current.minutes !== null ||
      fieldsRef.current.seconds !== null ||
      fieldsRef.current.amPm !== null,
    []
  );

  return useMemo(
    () => ({
      value,
      day,
      month,
      year,
      hours,
      minutes,
      seconds,
      amPm,
      getValue,
      getDay,
      getMonth,
      getYear,
      getHours,
      getMinutes,
      getSeconds,
      getAmPm,
      hasValue,
      withTime,
      withSeconds,
      format,
      amPmLabels,
      minDate,
      maxDate,
      setValue,
      setDay,
      setMonth,
      setYear,
      setHours,
      setMinutes,
      setSeconds,
      setAmPm,
      clear,
      focus,
      refs,
      registerFieldsOrder,
      onPaste,
    }),
    [
      value,
      day,
      month,
      year,
      hours,
      minutes,
      seconds,
      amPm,
      withTime,
      withSeconds,
      format,
      amPmLabels.am,
      amPmLabels.pm,
      minDate,
      maxDate,
    ]
  );
}
