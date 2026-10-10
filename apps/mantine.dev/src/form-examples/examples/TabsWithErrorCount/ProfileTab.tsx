import { Stack, TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { SettingsValues } from './types';

interface ProfileTabProps {
  form: UseFormReturnType<SettingsValues>;
}

export function ProfileTab({ form }: ProfileTabProps) {
  return (
    <Stack>
      <TextInput label="Name" placeholder="John Doe" withAsterisk {...form.getInputProps('name')} />
      <TextInput
        label="Email"
        placeholder="john@mantine.dev"
        withAsterisk
        {...form.getInputProps('email')}
      />
    </Stack>
  );
}
