import { PasswordInput, Stack, TextInput } from '@mantine/core';
import { WizardForm } from './types';

interface AccountStepProps {
  form: WizardForm;
}

export function AccountStep({ form }: AccountStepProps) {
  return (
    <Stack mt="md">
      <TextInput
        size="md"
        label="Username"
        placeholder="johndoe"
        withAsterisk
        {...form.getInputProps('username')}
      />

      <PasswordInput
        size="md"
        label="Password"
        placeholder="At least 8 characters"
        withAsterisk
        {...form.getInputProps('password')}
      />
    </Stack>
  );
}
