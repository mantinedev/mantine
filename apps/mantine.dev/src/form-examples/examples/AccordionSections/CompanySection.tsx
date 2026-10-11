import { Stack, TextInput } from '@mantine/core';
import { OnboardingForm } from './types';

interface CompanySectionProps {
  form: OnboardingForm;
}

export function CompanySection({ form }: CompanySectionProps) {
  return (
    <Stack>
      <TextInput
        size="md"
        label="Company name"
        placeholder="Mantine"
        withAsterisk
        {...form.getInputProps('company.name')}
      />

      <TextInput
        size="md"
        label="Website"
        placeholder="https://mantine.dev"
        withAsterisk
        {...form.getInputProps('company.website')}
      />
    </Stack>
  );
}
