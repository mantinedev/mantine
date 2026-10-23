import { NumberInput } from '@mantine/core';
import { MAX_DAYS } from '../constants';
import type { ValueInputProps } from './types';

export function DaysValue({ form, path }: ValueInputProps) {
  return (
    <NumberInput
      aria-label="Number of days"
      placeholder="Number of days"
      suffix=" days"
      min={1}
      max={MAX_DAYS}
      clampBehavior="none"
      allowNegative={false}
      allowDecimal={false}
      hideControls
      {...form.getInputProps(`${path}.days`)}
    />
  );
}
