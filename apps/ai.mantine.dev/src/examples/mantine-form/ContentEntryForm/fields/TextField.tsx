import { Text, Textarea, TextInput } from '@mantine/core';
import { fieldPath } from '../entry';
import type { FieldInputProps } from '../types';
import { labelProps } from './field-props';

export function TextField({ form, field }: FieldInputProps<'text'>) {
  const path = fieldPath(field);
  const value = form.useWatchValue(path) as string;

  const counter = field.maxLength !== null && (
    <Text size="xs" ta="right" c={value.length >= field.maxLength ? 'red' : undefined}>
      {value.length}/{field.maxLength}
    </Text>
  );

  const props = {
    ...labelProps(field),
    placeholder: field.label,
    maxLength: field.maxLength ?? undefined,
    ...form.getInputProps(path),
  };

  if (field.display === 'textarea') {
    return <Textarea autosize minRows={3} maxRows={8} bottomSection={counter} {...props} />;
  }

  return (
    <TextInput
      rightSection={counter}
      rightSectionWidth={64}
      rightSectionPointerEvents="none"
      {...props}
    />
  );
}
