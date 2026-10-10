import { SimpleGrid, Stack, TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { OnboardingValues } from './types';

interface PersonalSectionProps {
  form: UseFormReturnType<OnboardingValues>;
}

export function PersonalSection({ form }: PersonalSectionProps) {
  return (
    <Stack>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <TextInput
          label="First name"
          placeholder="John"
          withAsterisk
          {...form.getInputProps('personal.firstName')}
        />

        <TextInput
          label="Last name"
          placeholder="Doe"
          withAsterisk
          {...form.getInputProps('personal.lastName')}
        />
      </SimpleGrid>

      <TextInput
        label="Email"
        placeholder="john@mantine.dev"
        withAsterisk
        {...form.getInputProps('personal.email')}
      />
    </Stack>
  );
}
