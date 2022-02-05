import { clamp } from '@mantine/hooks';
import { padTime } from '../pad-time/pad-time';

interface CreateTimeHandler {
  onChange(value: string): void;
  nextRef?: React.RefObject<HTMLInputElement>;
  min: number;
  max: number;
  maxValue: number;
}

export function createTimeHandler({ onChange, nextRef, min, max, maxValue }: CreateTimeHandler) {
  return (value: string, triggerShift: boolean, forceTriggerShift = false) => {
    const parsed = parseInt(value, 10);

    if (Number.isNaN(parsed)) {
      return;
    }

    if (parsed > maxValue || forceTriggerShift) {
      onChange(padTime(clamp({ value: parsed, min, max }).toString()));
      triggerShift && nextRef?.current?.focus();
      triggerShift && nextRef?.current?.select();
      return;
    }

    onChange(parsed.toString());
  };
}
