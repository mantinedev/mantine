import { Select } from '@mantine/core';
import type { FieldInputProps, SelectModelField } from '../types';

export function SelectField({ form, field }: FieldInputProps<SelectModelField>) {
  return (
    <Select
      label={field.label}
      description={field.description || undefined}
      placeholder={field.label}
      withAsterisk={field.required}
      data={field.options}
      clearable={!field.required}
      allowDeselect={!field.required}
      {...form.getInputProps(`fields.${field.key}`)}
    />
  );
}
