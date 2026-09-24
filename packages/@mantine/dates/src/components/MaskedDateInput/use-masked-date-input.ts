import dayjs from 'dayjs';
import { useRef, useState } from 'react';
import { useDidUpdate } from '@mantine/hooks';
import { buildDateString } from './build-date-string/build-date-string';
import { getDaysInMonth } from './get-days-in-month/get-days-in-month';
import { parseDateString } from './parse-date-string/parse-date-string';

interface UseMaskedDateInputInput {
  value: string | null | undefined;
  defaultValue: string | null | undefined;
  onChange: ((value: string | null) => void) | undefined;
  minDate: string | undefined;
  maxDate: string | undefined;
  withTime: boolean | undefined;
  withSeconds: boolean | undefined;
  format: '24h' | '12h';
  amPmLabels: { am: string; pm: string };
  clearable: boolean | undefined;
  readOnly: boolean | undefined;
  disabled: boolean | undefined;
  fieldsOrder: ('day' | 'month' | 'year')[];
  pasteSplit?: (value: string) => {
    day: number | null;
    month: number | null;
    year: number | null;
    hours?: number | null;
    minutes?: number | null;
    seconds?: number | null;
  };
}

function convertTo12h(
  hours24: number | null,
  labels: { am: string; pm: string }
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

export function useMaskedDateInput({
  value,
  defaultValue,
  onChange,
  withTime = false,
  withSeconds = false,
  format,
  amPmLabels,
  clearable,
  readOnly,
  disabled,
  fieldsOrder,
  pasteSplit,
  minDate,
  maxDate,
}: UseMaskedDateInputInput) {
  const initialParsed = parseDateString(value ?? defaultValue);

  const initial12h = format === '12h' ? convertTo12h(initialParsed.hours, amPmLabels) : null;

  const initialDateString = buildDateString({
    day: initialParsed.day,
    month: initialParsed.month,
    year: initialParsed.year,
    hours: initial12h ? initial12h.hours12 : initialParsed.hours,
    minutes: initialParsed.minutes,
    seconds: initialParsed.seconds,
    withTime: withTime || false,
    withSeconds: withSeconds || false,
    format,
    amPm: initial12h ? initial12h.amPm : null,
    amPmLabels,
  });

  const acceptChange = useRef(true);
  const wasInvalidBefore = useRef(!initialDateString.valid);

  const [day, setDay] = useState<number | null>(initialParsed.day);
  const [month, setMonth] = useState<number | null>(initialParsed.month);
  const [year, setYear] = useState<number | null>(initialParsed.year);
  const [hours, setHours] = useState<number | null>(
    initial12h ? initial12h.hours12 : initialParsed.hours
  );
  const [minutes, setMinutes] = useState<number | null>(initialParsed.minutes);
  const [seconds, setSeconds] = useState<number | null>(initialParsed.seconds);
  const [amPm, setAmPm] = useState<string | null>(initial12h ? initial12h.amPm : null);

  const dayRef = useRef<HTMLInputElement>(null);
  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);
  const hoursRef = useRef<HTMLInputElement>(null);
  const minutesRef = useRef<HTMLInputElement>(null);
  const secondsRef = useRef<HTMLInputElement>(null);
  const amPmRef = useRef<HTMLSelectElement>(null);

  const isClearable =
    clearable &&
    !readOnly &&
    !disabled &&
    (day !== null ||
      month !== null ||
      year !== null ||
      hours !== null ||
      minutes !== null ||
      seconds !== null ||
      amPm !== null);

  const focus = (field: 'day' | 'month' | 'year' | 'hours' | 'minutes' | 'seconds' | 'amPm') => {
    if (field === 'day') {
      dayRef.current?.focus();
    }

    if (field === 'month') {
      monthRef.current?.focus();
    }

    if (field === 'year') {
      yearRef.current?.focus();
    }

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
  };

  const handleFieldChange = (
    field: 'day' | 'month' | 'year' | 'hours' | 'minutes' | 'seconds' | 'amPm',
    val: any
  ) => {
    const computedDay = field === 'day' ? val : day;
    const computedMonth = field === 'month' ? val : month;
    const computedYear = field === 'year' ? val : year;
    const computedHours = field === 'hours' ? val : hours;
    const computedMinutes = field === 'minutes' ? val : minutes;
    const computedSeconds = field === 'seconds' ? val : seconds;
    const computedAmPm = field === 'amPm' ? val : amPm;

    let clampedDay = computedDay;
    if (computedDay !== null && (field === 'month' || field === 'year' || field === 'day')) {
      const maxDays = getDaysInMonth(computedMonth, computedYear);
      if (computedDay > maxDays) {
        clampedDay = maxDays;
      }
    }

    const dateString = buildDateString({
      day: clampedDay,
      month: computedMonth,
      year: computedYear,
      hours: computedHours,
      minutes: computedMinutes,
      seconds: computedSeconds,
      withTime: withTime || false,
      withSeconds: withSeconds || false,
      format,
      amPm: computedAmPm,
      amPmLabels,
    });

    if (dateString.valid) {
      const dateOnly = dateString.value.split(' ')[0];
      const outOfRange =
        (minDate && dayjs(dateOnly).isBefore(minDate, 'day')) ||
        (maxDate && dayjs(dateOnly).isAfter(maxDate, 'day'));

      acceptChange.current = false;
      wasInvalidBefore.current = false;

      if (field === 'day') {
        setDay(clampedDay);
      }

      if (field === 'month') {
        setMonth(val);
        if (clampedDay !== computedDay) {
          setDay(clampedDay);
        }
      }

      if (field === 'year') {
        setYear(val);
        if (clampedDay !== computedDay) {
          setDay(clampedDay);
        }
      }

      if (field === 'hours') {
        setHours(val);
      }

      if (field === 'minutes') {
        setMinutes(val);
      }

      if (field === 'seconds') {
        setSeconds(val);
      }

      if (field === 'amPm') {
        setAmPm(val);
      }

      if (!outOfRange) {
        onChange?.(dateString.value);
      }
    } else {
      acceptChange.current = false;
      if (!wasInvalidBefore.current) {
        onChange?.(null);
        wasInvalidBefore.current = true;
      }
    }
  };

  const onDayChange = (val: number | null) => {
    setDay(val);
    handleFieldChange('day', val);
    focus('day');
  };

  const onMonthChange = (val: number | null) => {
    setMonth(val);
    handleFieldChange('month', val);
    focus('month');
  };

  const onYearChange = (val: number | null) => {
    setYear(val);
    handleFieldChange('year', val);
    focus('year');
  };

  const onHoursChange = (val: number | null) => {
    setHours(val);
    handleFieldChange('hours', val);
    focus('hours');
  };

  const onMinutesChange = (val: number | null) => {
    setMinutes(val);
    handleFieldChange('minutes', val);
    focus('minutes');
  };

  const onSecondsChange = (val: number | null) => {
    setSeconds(val);
    handleFieldChange('seconds', val);
    focus('seconds');
  };

  const onAmPmChange = (val: string | null) => {
    setAmPm(val);
    handleFieldChange('amPm', val);
    focus('amPm');
  };

  const clear = () => {
    acceptChange.current = false;
    setDay(null);
    setMonth(null);
    setYear(null);
    setHours(null);
    setMinutes(null);
    setSeconds(null);
    setAmPm(null);
    onChange?.(null);
    wasInvalidBefore.current = true;
    focus(fieldsOrder[0]);
  };

  const setFromDateString = (dateString: string) => {
    acceptChange.current = false;
    const _parsed = parseDateString(dateString);
    setDay(_parsed.day);
    setMonth(_parsed.month);
    setYear(_parsed.year);

    const resolvedHours = _parsed.hours !== null ? _parsed.hours : hours;
    const resolvedMinutes = _parsed.minutes !== null ? _parsed.minutes : minutes;
    const resolvedSeconds = _parsed.seconds !== null ? _parsed.seconds : seconds;

    if (_parsed.hours !== null || _parsed.minutes !== null || _parsed.seconds !== null) {
      setHours(_parsed.hours);
      setMinutes(_parsed.minutes);
      setSeconds(_parsed.seconds);
    }

    const next = buildDateString({
      day: _parsed.day,
      month: _parsed.month,
      year: _parsed.year,
      hours: resolvedHours,
      minutes: resolvedMinutes,
      seconds: resolvedSeconds,
      withTime: withTime || false,
      withSeconds: withSeconds || false,
      format,
      amPm,
      amPmLabels,
    });

    wasInvalidBefore.current = !next.valid;
    if (next.valid) {
      onChange?.(next.value);
    }
  };

  const onPaste = (event: React.ClipboardEvent<any>) => {
    const pastedValue = event.clipboardData.getData('text');

    let parsed: {
      day: number | null;
      month: number | null;
      year: number | null;
      hours?: number | null;
      minutes?: number | null;
      seconds?: number | null;
    };

    if (pasteSplit) {
      parsed = pasteSplit(pastedValue);
    } else {
      parsed = parseDateString(pastedValue);
    }

    if (parsed.day === null || parsed.month === null || parsed.year === null) {
      return;
    }

    event.preventDefault();

    let resolvedPasteHours = parsed.hours ?? null;
    let resolvedPasteAmPm = amPm;

    if (format === '12h' && resolvedPasteHours !== null) {
      const converted = convertTo12h(resolvedPasteHours, amPmLabels);
      resolvedPasteHours = converted.hours12;
      resolvedPasteAmPm = converted.amPm;
    }

    const dateString = buildDateString({
      day: parsed.day,
      month: parsed.month,
      year: parsed.year,
      hours: resolvedPasteHours,
      minutes: parsed.minutes ?? null,
      seconds: parsed.seconds ?? null,
      withTime: withTime || false,
      withSeconds: withSeconds || false,
      format,
      amPm: resolvedPasteAmPm,
      amPmLabels,
    });

    if (dateString.valid) {
      const pastedDateOnly = dateString.value.split(' ')[0];
      if (minDate && dayjs(pastedDateOnly).isBefore(minDate, 'day')) {
        return;
      }
      if (maxDate && dayjs(pastedDateOnly).isAfter(maxDate, 'day')) {
        return;
      }

      acceptChange.current = false;
      setDay(parsed.day);
      setMonth(parsed.month);
      setYear(parsed.year);
      setHours(resolvedPasteHours);
      setMinutes(parsed.minutes ?? null);
      setSeconds(parsed.seconds ?? null);
      if (resolvedPasteAmPm !== amPm) {
        setAmPm(resolvedPasteAmPm);
      }
      onChange?.(dateString.value);
    }
  };

  const hiddenInputResult = buildDateString({
    day,
    month,
    year,
    hours,
    minutes,
    seconds,
    withTime: withTime || false,
    withSeconds: withSeconds || false,
    format,
    amPm,
    amPmLabels,
  });

  let hiddenInputValue = hiddenInputResult;
  if (hiddenInputResult.valid) {
    const dateOnly = hiddenInputResult.value.split(' ')[0];
    if (minDate && dayjs(dateOnly).isBefore(minDate, 'day')) {
      hiddenInputValue = { valid: false, value: '' };
    }
    if (maxDate && dayjs(dateOnly).isAfter(maxDate, 'day')) {
      hiddenInputValue = { valid: false, value: '' };
    }
  }

  useDidUpdate(() => {
    if (value === null || value === '') {
      acceptChange.current = false;
      setDay(null);
      setMonth(null);
      setYear(null);
      setHours(null);
      setMinutes(null);
      setSeconds(null);
      setAmPm(null);
      acceptChange.current = true;
      return;
    }

    if (acceptChange.current && typeof value === 'string') {
      const parsed = parseDateString(value);
      setDay(parsed.day);
      setMonth(parsed.month);
      setYear(parsed.year);

      if (format === '12h') {
        const converted = convertTo12h(parsed.hours, amPmLabels);
        setHours(converted.hours12);
        setAmPm(converted.amPm);
      } else {
        setHours(parsed.hours);
      }

      setMinutes(parsed.minutes);
      setSeconds(parsed.seconds);
    }

    acceptChange.current = true;
  }, [value]);

  return {
    refs: {
      day: dayRef,
      month: monthRef,
      year: yearRef,
      hours: hoursRef,
      minutes: minutesRef,
      seconds: secondsRef,
      amPm: amPmRef,
    },
    values: { day, month, year, hours, minutes, seconds, amPm },
    setDay: onDayChange,
    setMonth: onMonthChange,
    setYear: onYearChange,
    setHours: onHoursChange,
    setMinutes: onMinutesChange,
    setSeconds: onSecondsChange,
    setAmPm: onAmPmChange,
    focus,
    clear,
    onPaste,
    setFromDateString,
    isClearable,
    hiddenInputValue: hiddenInputValue.value,
  };
}
