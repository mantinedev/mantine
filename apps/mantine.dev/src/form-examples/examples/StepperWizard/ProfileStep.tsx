import { Stack, TextInput } from '@mantine/core';
import { WizardForm } from './types';

interface ProfileStepProps {
  form: WizardForm;
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
