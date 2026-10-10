import { Fieldset, SimpleGrid, Stack, TextInput } from '@mantine/core';
import { useFormContext } from './form-context';

export function PersonalFields() {
  const form = useFormContext();

  return (
    <Fieldset legend="Personal information">
      <Stack gap="sm">
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <TextInput
            size="md"
            label="First name"
            placeholder="Jane"
            withAsterisk
            {...form.getInputProps('firstName')}
          />

          <TextInput
            size="md"
            label="Last name"
            placeholder="Doe"
            withAsterisk
            {...form.getInputProps('lastName')}
          />
        </SimpleGrid>

        <TextInput
          size="md"
          label="Email"
          placeholder="jane@mantine.dev"
          withAsterisk
          {...form.getInputProps('email')}
        />
      </Stack>
    </Fieldset>
  );
}
