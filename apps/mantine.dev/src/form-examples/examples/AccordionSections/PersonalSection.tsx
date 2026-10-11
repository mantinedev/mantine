import { SimpleGrid, Stack, TextInput } from '@mantine/core';
import { OnboardingForm } from './types';

interface PersonalSectionProps {
  form: OnboardingForm;
}

export function PersonalSection({ form }: PersonalSectionProps) {
  return (
    <Stack>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <TextInput
          size="md"
          label="First name"
          placeholder="John"
          withAsterisk
          {...form.getInputProps('personal.firstName')}
        />

        <TextInput
          size="md"
          label="Last name"
          placeholder="Doe"
          withAsterisk
          {...form.getInputProps('personal.lastName')}
        />
      </SimpleGrid>

      <TextInput
        size="md"
        label="Email"
        placeholder="john@mantine.dev"
        withAsterisk
        {...form.getInputProps('personal.email')}
      />
    </Stack>
  );
}
