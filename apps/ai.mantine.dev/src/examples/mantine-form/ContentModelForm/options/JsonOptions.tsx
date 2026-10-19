import { JsonInput } from '@mantine/core';
import type { FieldFormType } from '../types';

export function JsonOptions({ form }: { form: FieldFormType }) {
  return (
    <JsonInput
      label="Default value"
      placeholder='{ "enabled": true }'
      validationError="Invalid JSON"
      formatOnBlur
      autosize
      minRows={4}
      maxRows={12}
      {...form.getInputProps('jsonDefault')}
    />
  );
}
