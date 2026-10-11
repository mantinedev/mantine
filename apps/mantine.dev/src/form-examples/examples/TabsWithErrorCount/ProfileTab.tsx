import { Stack, TextInput } from '@mantine/core';
import { SettingsForm } from './types';

interface ProfileTabProps {
  form: SettingsForm;
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
