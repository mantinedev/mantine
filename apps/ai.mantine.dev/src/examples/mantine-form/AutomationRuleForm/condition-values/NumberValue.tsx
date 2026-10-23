import { NumberInput } from '@mantine/core';
import type { ValueInputProps } from './types';

export function NumberValue({ form, path }: ValueInputProps) {
  return (
    <NumberInput
      aria-label="Value"
      placeholder="Value"
      allowNegative={false}
      hideControls
      {...form.getInputProps(`${path}.number`)}
    />
  );
}
