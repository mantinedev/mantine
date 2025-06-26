import { useRef, useState } from 'react';
import { useDidUpdate } from '@mantine/hooks';
import type {
  TimePickerAmPmLabels,
  TimePickerFormat,
  TimePickerPasteSplit,
} from './TimePicker.types';
import { clampTime } from './utils/clamp-time/clamp-time';
import { getParsedTime } from './utils/get-parsed-time/get-parsed-time';
import { getTimeString } from './utils/get-time-string/get-time-string';

interface UseTimePickerInput {
  value: string | undefined;
  defaultValue: string | undefined;
  onChange: ((value: string) => void) | undefined;
  format: TimePickerFormat;
  amPmLabels: TimePickerAmPmLabels;
  withSeconds: boolean | undefined;
  min: string | undefined;
  max: string | undefined;
  readOnly: boolean | undefined;
  disabled: boolean | undefined;
  clearable: boolean | undefined;
  pasteSplit: TimePickerPasteSplit | undefined;
}

export function useTimePicker({
  value,
  defaultValue,
  onChange,
  format,
  amPmLabels,
  withSeconds = false,
  min,
  max,
  clearable,
  readOnly,
  disabled,
  pasteSplit,
}: UseTimePickerInput) {
  const parsedTime = getParsedTime({
    time: value || defaultValue || '',
    amPmLabels,
    format,
  });

  const acceptChange = useRef(true);

  const [hours, setHours] = useState<number | null>(parsedTime.hours);
  const [minutes, setMinutes] = useState<number | null>(parsedTime.minutes);
  const [seconds, setSeconds] = useState<number | null>(parsedTime.seconds);
  const [amPm, setAmPm] = useState<string | null>(parsedTime.amPm);

  const isClearable =
    clearable &&
    !readOnly &&
    !disabled &&
    (hours !== null || minutes !== null || seconds !== null || amPm !== null);

  const hoursRef = useRef<HTMLInputElement>(null);
  const minutesRef = useRef<HTMLInputElement>(null);
  const secondsRef = useRef<HTMLInputElement>(null);
  const amPmRef = useRef<HTMLSelectElement>(null);

  const focus = (field: 'hours' | 'minutes' | 'seconds' | 'amPm') => {
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

  const handleTimeChange = (field: 'hours' | 'minutes' | 'seconds' | 'amPm', val: any) => {
    const computedValue = { hours, minutes, seconds, amPm, [field]: val };

    const timeString = getTimeString({ ...computedValue, format, withSeconds, amPmLabels });

    if (timeString.valid) {
      acceptChange.current = false;
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

      const clamped = clampTime(timeString.value, min || '00:00:00', max || '23:59:59');
      onChange?.(clamped.timeString);
    } else {
      acceptChange.current = false;
      if (typeof value === 'string' && value !== '') {
        onChange?.('');
      }
    }
  };

  const setTimeString = (timeString: string) => {
    acceptChange.current = false;

    const parsedTime = getParsedTime({ time: timeString, amPmLabels, format });
    setHours(parsedTime.hours);
    setMinutes(parsedTime.minutes);
    setSeconds(parsedTime.seconds);
    setAmPm(parsedTime.amPm);

    onChange?.(timeString);
  };

  const onHoursChange = (value: number | null) => {
    setHours(value);
    handleTimeChange('hours', value);
    focus('hours');
  };

  const onMinutesChange = (value: number | null) => {
    setMinutes(value);
    handleTimeChange('minutes', value);
    focus('minutes');
  };

  const onSecondsChange = (value: number | null) => {
    setSeconds(value);
    handleTimeChange('seconds', value);
    focus('seconds');
  };

  const onAmPmChange = (value: string | null) => {
    setAmPm(value);
    handleTimeChange('amPm', value);
    focus('amPm');
  };

  const clear = () => {
    acceptChange.current = false;
    setHours(null);
    setMinutes(null);
    setSeconds(null);
    setAmPm(null);
    onChange?.('');
    focus('hours');
  };

  const onPaste = (event: React.ClipboardEvent<any>) => {
    event.preventDefault();
    const pastedValue = event.clipboardData.getData('text');
    const parsedTime = (pasteSplit || getParsedTime)({ time: pastedValue, format, amPmLabels });
    const timeString = getTimeString({ ...parsedTime, format, withSeconds, amPmLabels });
    if (timeString.valid) {
      acceptChange.current = false;
      const clamped = clampTime(timeString.value, min || '00:00:00', max || '23:59:59');
      onChange?.(clamped.timeString);
      setHours(parsedTime.hours);
      setMinutes(parsedTime.minutes);
      setSeconds(parsedTime.seconds);
      setAmPm(parsedTime.amPm);
    }
  };

  const hiddenInputValue = getTimeString({
    hours,
    minutes,
    seconds,
    format,
    withSeconds,
    amPm,
    amPmLabels: amPmLabels!,
  });

  useDidUpdate(() => {
    if (value === '') {
      acceptChange.current = false;
      setHours(null);
      setMinutes(null);
      setSeconds(null);
      setAmPm(null);
      return;
    }

    if (acceptChange.current && typeof value === 'string') {
      const parsedTime = getParsedTime({ time: value || '', amPmLabels, format });
      setHours(parsedTime.hours);
      setMinutes(parsedTime.minutes);
      setSeconds(parsedTime.seconds);
      setAmPm(parsedTime.amPm);
    }
    acceptChange.current = true;
  }, [value]);

  return {
    refs: { hours: hoursRef, minutes: minutesRef, seconds: secondsRef, amPm: amPmRef },
    values: { hours, minutes, seconds, amPm },
    setHours: onHoursChange,
    setMinutes: onMinutesChange,
    setSeconds: onSecondsChange,
    setAmPm: onAmPmChange,
    focus,
    clear,
    onPaste,
    setTimeString,
    isClearable,
    hiddenInputValue: hiddenInputValue.value,
  };
}
