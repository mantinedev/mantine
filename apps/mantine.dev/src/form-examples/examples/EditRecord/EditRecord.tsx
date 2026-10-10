import { useEffect } from 'react';
import { Badge, Button, Group, Select, Stack, Textarea, TextInput } from '@mantine/core';
import { isEmail, isNotEmpty, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';

interface UserRecord {
  name: string;
  email: string;
  role: string | null;
  bio: string;
}

function fetchUser() {
  return new Promise<UserRecord>((resolve) => {
    setTimeout(
      () =>
        resolve({
          name: 'John Doe',
          email: 'john@mantine.dev',
          role: 'Editor',
          bio: 'Writes documentation and reviews pull requests',
        }),
      1200
    );
  });
}

function saveUser(values: UserRecord) {
  return new Promise<UserRecord>((resolve) => {
    setTimeout(() => resolve(values), 1000);
  });
}

export function EditRecord() {
  const form = useForm<UserRecord>({
    mode: 'uncontrolled',
    initialValues: { name: '', email: '', role: null, bio: '' },
    validate: {
      name: isNotEmpty('Name is required'),
      email: isEmail('Invalid email'),
      role: isNotEmpty('Select a role'),
    },
    // Inputs are read-only until the record is loaded with form.initialize
    enhanceGetInputProps: (payload) => ({ readOnly: !payload.form.initialized }),
  });

  const dirty = form.useDirty();
  const loading = !form.initialized;

  useEffect(() => {
    fetchUser().then((user) => form.initialize(user));
  }, []);

  const handleSubmit = async (values: UserRecord) => {
    const user = await saveUser(values);
    form.setInitialValues(user);
    form.resetDirty(user);
    notifications.show({
      title: 'Changes saved',
      message: `${user.name} is now ${user.role}`,
    });
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <Group>
          <Badge color={loading ? 'gray' : dirty ? 'orange' : 'teal'}>
            {loading ? 'Loading record' : dirty ? 'Unsaved changes' : 'No changes'}
          </Badge>
        </Group>
        <TextInput
          label="Name"
          placeholder="John Doe"
          withAsterisk
          loading={loading}
          {...form.getInputProps('name')}
        />
        <TextInput
          label="Email"
          placeholder="john@mantine.dev"
          withAsterisk
          loading={loading}
          {...form.getInputProps('email')}
        />
        <Select
          label="Role"
          placeholder="Pick role"
          withAsterisk
          data={['Admin', 'Editor', 'Viewer']}
          loading={loading}
          {...form.getInputProps('role')}
        />
        <Textarea
          label="Bio"
          placeholder="A few words about the user"
          autosize
          minRows={2}
          loading={loading}
          {...form.getInputProps('bio')}
        />
        <Group justify="flex-end">
          <Button variant="default" onClick={form.reset} disabled={loading || !dirty}>
            Reset to loaded values
          </Button>
          <Button type="submit" loading={form.submitting} disabled={loading}>
            Save
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
