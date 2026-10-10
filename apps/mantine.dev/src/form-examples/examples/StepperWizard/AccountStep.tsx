import { PasswordInput, Stack, TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { WizardValues } from './types';

interface AccountStepProps {
  form: UseFormReturnType<WizardValues>;
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
