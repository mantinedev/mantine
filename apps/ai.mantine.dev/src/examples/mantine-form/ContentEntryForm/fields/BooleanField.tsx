import { Checkbox, Text } from '@mantine/core';
import { fieldPath } from '../entry';
import type { FieldInputProps } from '../types';

export function BooleanField({ form, field }: FieldInputProps<'boolean'>) {
  const label = field.required ? (
    <>
      {field.label}{' '}
      <Text span c="red" aria-hidden>
        *
      </Text>
    </>
  ) : (
    field.label
  );

  return (
    <Checkbox
      label={label}
      description={field.description || undefined}
      {...form.getInputProps(fieldPath(field), { type: 'checkbox' })}
    />
  );
}
