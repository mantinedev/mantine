import { Stack, TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { SettingsValues } from './types';

interface ProfileTabProps {
  form: UseFormReturnType<SettingsValues>;
}

export function ProfileTab({ form }: ProfileTabProps) {
  return (
    <Stack>
      <TextInput
        size="md"
        label="Name"
        placeholder="John Doe"
        withAsterisk
        {...form.getInputProps('name')}
      />

      <TextInput
        size="md"
        label="Email"
        placeholder="john@mantine.dev"
        withAsterisk
        {...form.getInputProps('email')}
      />
    </Stack>
  );
}
