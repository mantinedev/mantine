import { Button, Group, Select, Stack, TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { UserValues } from './types';

interface UserFormProps {
  form: UseFormReturnType<UserValues>;
  onCancel: () => void;
}

export function UserForm({ form, onCancel }: UserFormProps) {
  return (
    <Stack>
      <TextInput
        size="md"
        label="Name"
        placeholder="John Doe"
        withAsterisk
        data-autofocus
        {...form.getInputProps('name')}
      />

      <TextInput
        size="md"
        label="Email"
        placeholder="john@mantine.dev"
        withAsterisk
        {...form.getInputProps('email')}
      />

      <Select
        size="md"
        label="Role"
        placeholder="Pick role"
        withAsterisk
        data={['Admin', 'Editor', 'Viewer']}
        {...form.getInputProps('role')}
      />

      <Group justify="flex-end" mt="md">
        <Button size="md" variant="default" onClick={onCancel} disabled={form.submitting}>
          Cancel
        </Button>

        <Button size="md" type="submit" loading={form.submitting}>
          Add user
        </Button>
      </Group>
    </Stack>
  );
}
