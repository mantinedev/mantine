import { Select } from '@mantine/core';
import { fieldPath } from '../entry';
import type { FieldInputProps } from '../types';
import { labelProps } from './field-props';

export function SelectField({ form, field }: FieldInputProps<'select'>) {
  return (
    <Select
      {...labelProps(field)}
      placeholder={field.label}
      data={field.options}
      allowDeselect={!field.required}
      clearable={!field.required}
      {...form.getInputProps(fieldPath(field))}
    />
  );
}
