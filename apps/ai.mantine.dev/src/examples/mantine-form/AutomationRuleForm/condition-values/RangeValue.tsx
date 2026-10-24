import { NumberInput, SimpleGrid } from '@mantine/core';
import type { ValueInputProps } from './types';

export function RangeValue({ form, path, label }: ValueInputProps) {
  return (
    <SimpleGrid cols={2} spacing="xs">
      <NumberInput
        aria-label={`${label} minimum`}
        placeholder="Min"
        allowNegative={false}
        hideControls
        {...form.getInputProps(`${path}.min`)}
      />
      <NumberInput
        aria-label={`${label} maximum`}
        placeholder="Max"
        allowNegative={false}
        hideControls
        {...form.getInputProps(`${path}.max`)}
      />
    </SimpleGrid>
  );
}
