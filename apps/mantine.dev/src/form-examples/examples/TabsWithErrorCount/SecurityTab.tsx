import { PasswordInput, Stack } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { SettingsValues } from './types';

interface SecurityTabProps {
  form: UseFormReturnType<SettingsValues>;
}

export function SecurityTab({ form }: SecurityTabProps) {
  return (
    <Stack>
      <PasswordInput
        size="md"
        label="New password"
        placeholder="At least 8 characters"
        withAsterisk
        {...form.getInputProps('password')}
      />

      <PasswordInput
        size="md"
        label="Confirm password"
        placeholder="Repeat the password"
        withAsterisk
        {...form.getInputProps('confirmPassword')}
      />
    </Stack>
  );
}
