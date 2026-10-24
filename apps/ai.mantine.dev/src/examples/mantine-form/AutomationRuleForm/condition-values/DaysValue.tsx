import { NumberInput } from '@mantine/core';
import { MAX_DAYS } from '../constants';
import type { ValueInputProps } from './types';

export function DaysValue({ form, path, label }: ValueInputProps) {
  return (
    <NumberInput
      aria-label={label}
      placeholder={`Days, 1 to ${MAX_DAYS}`}
      allowNegative={false}
      allowDecimal={false}
      hideControls
      {...form.getInputProps(path)}
    />
  );
}
