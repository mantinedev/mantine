import { JsonInput } from '@mantine/core';
import { JSON_ERROR } from '../validation';
import type { OptionsProps } from './options';

export function JsonOptions({ form }: OptionsProps) {
  return (
    <JsonInput
      label="Default value"
      placeholder='{ "featured": false }'
      validationError={JSON_ERROR}
      formatOnBlur
      autosize
      minRows={4}
      maxRows={10}
      {...form.getInputProps('json.defaultValue')}
    />
  );
}
