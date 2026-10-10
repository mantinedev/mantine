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
        label="Name"
        placeholder="John Doe"
        withAsterisk
        data-autofocus
        {...form.getInputProps('name')}
      />

      <TextInput
        label="Email"
        placeholder="john@mantine.dev"
        withAsterisk
        {...form.getInputProps('email')}
      />

      <Select
        label="Role"
        placeholder="Pick role"
        withAsterisk
        data={['Admin', 'Editor', 'Viewer']}
        {...form.getInputProps('role')}
      />

      <Group justify="flex-end" mt="md">
        <Button variant="default" onClick={onCancel} disabled={form.submitting}>
          Cancel
        </Button>

        <Button type="submit" loading={form.submitting}>
          Add user
        </Button>
      </Group>
    </Stack>
  );
}
