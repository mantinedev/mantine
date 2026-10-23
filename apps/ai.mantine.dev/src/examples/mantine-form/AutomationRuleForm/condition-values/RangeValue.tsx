import { NumberInput, SimpleGrid } from '@mantine/core';
import type { ValueInputProps } from './types';

export function RangeValue({ form, path }: ValueInputProps) {
  return (
    <SimpleGrid cols={2} spacing="xs">
      <NumberInput
        aria-label="Minimum"
        placeholder="Min"
        allowNegative={false}
        hideControls
        {...form.getInputProps(`${path}.min`)}
      />
      <NumberInput
        aria-label="Maximum"
        placeholder="Max"
        allowNegative={false}
        hideControls
        {...form.getInputProps(`${path}.max`)}
      />
    </SimpleGrid>
  );
}
