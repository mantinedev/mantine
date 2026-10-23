import { TextInput } from '@mantine/core';
import type { ValueInputProps } from './types';

export function TextValue({ form, path }: ValueInputProps) {
  return (
    <TextInput aria-label="Value" placeholder="Value" {...form.getInputProps(`${path}.text`)} />
  );
}
