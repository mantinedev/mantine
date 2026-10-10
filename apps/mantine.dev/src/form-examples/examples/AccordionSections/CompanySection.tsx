import { Stack, TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { OnboardingValues } from './types';

interface CompanySectionProps {
  form: UseFormReturnType<OnboardingValues>;
}

export function CompanySection({ form }: CompanySectionProps) {
  return (
    <Stack>
      <TextInput
        label="Company name"
        placeholder="Mantine"
        withAsterisk
        {...form.getInputProps('company.name')}
      />
      <TextInput
        label="Website"
        placeholder="https://mantine.dev"
        withAsterisk
        {...form.getInputProps('company.website')}
      />
    </Stack>
  );
}
