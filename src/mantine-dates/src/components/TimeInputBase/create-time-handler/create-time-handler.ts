import { clamp } from '@mantine/hooks';
import { padTime } from '../pad-time/pad-time';
import { allButLastDigit } from './all-but-last-digit/all-but-last-digit';

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

    if (parsed > allButLastDigit(max) || forceTriggerShift) {
      const lastDigit = parsed % 10;

      let updatedValue: string;
      let carryOver: string | undefined;

      /*
        Check if it is possible to construct a number that satisfies the following conditions:
          1. The number starts with the last digit of the current value.
          2. The number is less than the next field's maximum value constraint.
      */
      if (parsed > max && nextMax && lastDigit <= allButLastDigit(nextMax)) {
        updatedValue = padTime(allButLastDigit(parsed).toString());
        carryOver = padTime(lastDigit.toString());
      } else {
        updatedValue = padTime(clamp({ value: parsed, min, max }).toString());
      }

      onChange(updatedValue, carryOver);
      triggerShift && nextRef?.current?.focus();
      triggerShift && nextRef?.current?.select();
      return;
    }

    onChange(parsed.toString());
  };
}
