import { Text, Textarea, TextInput } from '@mantine/core';
import type { FieldInputProps, TextModelField } from '../types';

function Counter({ length, max }: { length: number; max: number }) {
  return (
    <Text size="xs" ta="right" c={length >= max ? 'red' : undefined}>
      {length}/{max}
    </Text>
  );
}

export function TextField({ form, field }: FieldInputProps<TextModelField>) {
  const path = `fields.${field.key}` as const;
  const value = (form.useWatchValue(path) as string | undefined) ?? '';
  const counter =
    field.maxLength === null ? undefined : <Counter length={value.length} max={field.maxLength} />;
  const common = {
    label: field.label,
    description: field.description || undefined,
    placeholder: field.label,
    withAsterisk: field.required,
    maxLength: field.maxLength ?? undefined,
    ...form.getInputProps(path),
  };

  return field.display === 'textarea' ? (
    <Textarea {...common} autosize minRows={3} maxRows={8} bottomSection={counter} />
  ) : (
    <TextInput {...common} rightSection={counter} rightSectionWidth={64} />
  );
}
