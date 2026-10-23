import { JsonInput } from '@mantine/core';
import { fieldPath } from '../entry';
import type { FieldInputProps } from '../types';
import { labelProps } from './field-props';

export function JsonField({ form, field }: FieldInputProps<'json'>) {
  return (
    <JsonInput
      {...labelProps(field)}
      placeholder='{ "key": "value" }'
      formatOnBlur
      validationError={`${field.label} must be valid JSON`}
      autosize
      minRows={4}
      maxRows={12}
      {...form.getInputProps(fieldPath(field))}
    />
  );
}
