import { clamp } from '@mantine/hooks';
import { padTime } from '../pad-time/pad-time';

interface CreateTimeHandler {
  onChange(value: string, carryOver?: string): void;
  nextRef?: React.RefObject<HTMLInputElement>;
  min: number;
  max: number;
  nextMax?: number;
}

export function createTimeHandler({ onChange, nextRef, min, max, nextMax }: CreateTimeHandler) {
  return (value: string, triggerShift: boolean, forceTriggerShift = false) => {
    const parsed = parseInt(value, 10);

    if (Number.isNaN(parsed)) {
      return;
    }

    if (parsed > Math.floor(max / 10) || forceTriggerShift) {
      const lastDigit = parsed % 10;

      /*
        Check if it is possible to construct a number that satisfies the following conditions:
          1. The number starts with the last digit of the current value.
          2. The number is less than the next field's maximum value constraint.
      */
      if (nextMax && parsed > max && lastDigit <= Math.floor(nextMax / 10)) {
        onChange(padTime(Math.floor(parsed / 10).toString()), padTime(lastDigit.toString()));
      } else {
        onChange(padTime(clamp({ value: parsed, min, max }).toString()));
      }

      triggerShift && nextRef?.current?.focus();
      triggerShift && nextRef?.current?.select();
      return;
    }

    onChange(parsed.toString());
  };
}
