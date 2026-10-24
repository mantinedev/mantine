import { Button, Group, Select, Stack, TextInput, useModalCloseGuard } from '@mantine/core';
import { FormErrors, isEmail, isNotEmpty, useForm } from '@mantine/form';
import { User } from './types';

function saveUser(values: User) {
  return new Promise<User>((resolve) => {
    setTimeout(() => resolve(values), 1000);
  });
}

interface UserFormProps {
  user: User;
  isNew: boolean;
  onSave: (user: User) => void;
}

export function UserForm({ user, isNew, onSave }: UserFormProps) {
  const form = useForm<User>({
    initialValues: user,
    validate: {
      name: isNotEmpty('Name is required'),
      email: isEmail('Invalid email'),
      role: isNotEmpty('Select a role'),
    },
  });

  // Close button, Escape and Cancel do nothing while the request is in flight
  const closeModal = useModalCloseGuard(() => !form.submitting);

  const handleSubmit = async (values: User) => {
    onSave(await saveUser(values));
  };

  const handleErrors = (errors: FormErrors) => {
    form.getInputNode(Object.keys(errors)[0])?.focus();
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit, handleErrors)}>
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
          <Button variant="default" onClick={closeModal} disabled={form.submitting}>
            Cancel
          </Button>

          <Button type="submit" loading={form.submitting}>
            {isNew ? 'Add user' : 'Save changes'}
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
