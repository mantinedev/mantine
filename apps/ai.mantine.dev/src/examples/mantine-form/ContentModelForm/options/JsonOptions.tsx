import { JsonInput } from '@mantine/core';
import type { FieldFormType } from '../types';

export function JsonOptions({ form }: { form: FieldFormType }) {
  return (
    <JsonInput
      label="Default value"
      placeholder='{ "key": "value" }'
      autosize
      minRows={4}
      maxRows={10}
      {...form.getInputProps('jsonDefault')}
    />
  );
}
