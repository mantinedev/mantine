import { JsonInput } from '@mantine/core';
import type { FieldInputProps, JsonModelField } from '../types';

export function JsonField({ form, field }: FieldInputProps<JsonModelField>) {
  return (
    <JsonInput
      label={field.label}
      description={field.description || undefined}
      placeholder='{ "key": "value" }'
      withAsterisk={field.required}
      formatOnBlur
      validationError={`${field.label} must be valid JSON`}
      autosize
      minRows={4}
      maxRows={12}
      {...form.getInputProps(`fields.${field.key}`)}
    />
  );
}
