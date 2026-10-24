import { MaskedDateInput } from '@mantine/dates';
import type { ValueInputProps } from './types';

export function DateValue({ form, path, label }: ValueInputProps) {
  return (
    <MaskedDateInput
      aria-label={label}
      dayInputLabel={`${label} day`}
      monthInputLabel={`${label} month`}
      yearInputLabel={`${label} year`}
      {...form.getInputProps(path)}
    />
  );
}
