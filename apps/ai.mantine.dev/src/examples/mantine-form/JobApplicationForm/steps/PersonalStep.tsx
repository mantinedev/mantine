import { PhoneInput, SimpleGrid, Stack, TextInput } from '@mantine/core';
import type { JobApplicationFormType } from '../types';

export function PersonalStep({ form }: { form: JobApplicationFormType }) {
  const phoneInputProps = form.getInputProps('phone');

  return (
    <Stack gap="md" mt="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
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
      </SimpleGrid>
      <TextInput
        type="email"
        label="Email"
        placeholder="you@example.com"
        withAsterisk
        {...form.getInputProps('email')}
      />
      <PhoneInput
        label="Phone"
        placeholder="Phone"
        defaultCountry="us"
        {...phoneInputProps}
        onChange={(value, details) => {
          phoneInputProps.onChange(value);
          form.setFieldValue('phoneDisplay', details.formattedValue);
        }}
      />
      <TextInput
        type="url"
        label="LinkedIn"
        placeholder="https://linkedin.com/in/you"
        {...form.getInputProps('linkedin')}
      />
    </Stack>
  );
}
