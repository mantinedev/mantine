import { MultiSelect } from '@mantine/core';
import type { ValueInputProps } from './types';

export function OptionsValue({ form, path, label, field }: ValueInputProps) {
  return (
    <MultiSelect
      aria-label={label}
      placeholder={`Pick ${field.label.toLowerCase()}`}
      data={field.options ?? []}
      {...form.getInputProps(path)}
    />
  );
}
