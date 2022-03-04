import { clamp } from '@mantine/hooks';
import { padTime } from '../pad-time/pad-time';

interface CreateTimeHandler {
  onChange(value: string, carryOver?: string): void;
  nextRef?: React.RefObject<HTMLInputElement>;
  min: number;
  max: number;
}

export function createTimeHandler({ onChange, nextRef, min, max }: CreateTimeHandler) {
  return (value: string, triggerShift: boolean, forceTriggerShift = false) => {
    const parsed = parseInt(value, 10);

    if (Number.isNaN(parsed)) {
      return;
    }

    if (parsed > Math.floor(max / 10) || forceTriggerShift) {
      if (parsed > max) {
        onChange(padTime(Math.floor(parsed / 10).toString()), padTime((parsed % 10).toString()));
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
