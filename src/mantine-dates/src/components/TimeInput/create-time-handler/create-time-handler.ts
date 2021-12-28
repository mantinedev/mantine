import { clamp } from '@mantine/hooks';
import { padTime } from '../pad-time/pad-time';

interface CreateTimeHandler {
  onChange(value: string): void;
  nextRef?: React.RefObject<HTMLInputElement>;
  nextSelectRef?: React.RefObject<HTMLSelectElement>;
  min: number;
  max: number;
  maxValue: number;
}

export function createTimeHandler({
  onChange,
  nextRef,
  nextSelectRef,
  min,
  max,
  maxValue,
}: CreateTimeHandler) {
  return (value: string, triggerShift: boolean) => {
    if (value === '00') {
      onChange('00');
      triggerShift && nextRef?.current?.focus();
      triggerShift && nextRef?.current?.select();

      if (nextSelectRef) {
        triggerShift && nextSelectRef.current?.focus();
      }

      return;
    }

    const parsed = parseInt(value, 10);

    if (Number.isNaN(parsed)) {
      return;
    }

    if (parsed > maxValue) {
      onChange(padTime(clamp({ value: parsed, min, max })));
      triggerShift && nextRef?.current?.focus();
      triggerShift && nextRef?.current?.select();

      if (nextSelectRef) {
        triggerShift && nextSelectRef.current?.focus();
      }

      return;
    }

    onChange(parsed.toString());
  };
}
