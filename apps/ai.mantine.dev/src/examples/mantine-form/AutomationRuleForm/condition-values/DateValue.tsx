import { MaskedDateInput } from '@mantine/dates';
import type { ValueInputProps } from './types';

export function DateValue({ form, path }: ValueInputProps) {
  return (
    <MaskedDateInput
      aria-label="Date"
      dayInputLabel="Date day"
      monthInputLabel="Date month"
      yearInputLabel="Date year"
      {...form.getInputProps(`${path}.date`)}
    />
  );
}
