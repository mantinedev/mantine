import { NumberInput } from '@mantine/core';
import type { ValueInputProps } from './types';

export function NumberValue({ form, path, label }: ValueInputProps) {
  return (
    <NumberInput
      aria-label={label}
      placeholder="Number"
      allowNegative={false}
      hideControls
      {...form.getInputProps(path)}
    />
  );
}
