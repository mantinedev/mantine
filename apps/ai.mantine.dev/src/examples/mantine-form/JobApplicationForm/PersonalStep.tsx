import { Group, PhoneInput, Stack, TextInput } from '@mantine/core';
import type { JobApplicationFormType } from './types';

export function PersonalStep({ form }: { form: JobApplicationFormType }) {
  return (
    <Stack>
      <Group grow align="flex-start">
        <TextInput
          label="First name"
          placeholder="First name"
          withAsterisk
          {...form.getInputProps('firstName')}
        />
        <TextInput
          label="Last name"
          placeholder="Last name"
          withAsterisk
          {...form.getInputProps('lastName')}
        />
      </Group>
      <TextInput
        label="Email"
        placeholder="you@example.com"
        type="email"
        withAsterisk
        {...form.getInputProps('email')}
      />
      <PhoneInput label="Phone" placeholder="Phone" {...form.getInputProps('phone')} />
      <TextInput
        label="LinkedIn URL"
        placeholder="https://www.linkedin.com/in/your-name"
        {...form.getInputProps('linkedinUrl')}
      />
    </Stack>
  );
}
