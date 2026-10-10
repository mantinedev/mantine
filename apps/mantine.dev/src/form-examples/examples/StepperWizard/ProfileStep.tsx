import { Stack, TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { WizardValues } from './types';

interface ProfileStepProps {
  form: UseFormReturnType<WizardValues>;
}

export function ProfileStep({ form }: ProfileStepProps) {
  return (
    <Stack mt="md">
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
