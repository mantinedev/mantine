import { TextInput } from '@mantine/core';
import type { ValueInputProps } from './types';

export function TextValue({ form, path, label }: ValueInputProps) {
  return <TextInput aria-label={label} placeholder="Text" {...form.getInputProps(path)} />;
}
