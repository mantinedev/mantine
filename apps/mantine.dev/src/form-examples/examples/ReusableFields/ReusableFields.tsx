import { Button, Group, SimpleGrid, Stack } from '@mantine/core';
import { isEmail, isNotEmpty, matches } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { SelectField, TextField } from './fields';
import { ProfileFormProvider, ProfileValues, useProfileForm } from './form-context';

const ROLES = ['Developer', 'Designer', 'Product manager', 'QA engineer'];
const TIMEZONES = ['UTC', 'Europe/London', 'Europe/Berlin', 'America/New_York', 'Asia/Tokyo'];

export function ReusableFields() {
  const form = useProfileForm({
    mode: 'uncontrolled',
    initialValues: {
      fullName: '',
      username: '',
      email: '',
      role: null,
      timezone: 'UTC',
    },
    validate: {
      fullName: isNotEmpty('Full name is required'),
      username: matches(/^[a-z0-9_]{3,}$/, 'At least 3 characters: a-z, 0-9 and _'),
      email: isEmail('Invalid email'),
      role: isNotEmpty('Role is required'),
    },
  });

  const handleSubmit = (values: ProfileValues) => {
    notifications.show({
      title: 'Profile saved',
      message: `${values.fullName} (@${values.username}), ${values.role}, ${values.timezone}`,
    });
  };

  return (
    <ProfileFormProvider form={form}>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextField name="fullName" label="Full name" placeholder="Jane Doe" withAsterisk />
          <TextField name="username" label="Username" placeholder="jane_doe" withAsterisk />
          <TextField name="email" label="Email" placeholder="jane@mantine.dev" withAsterisk />
          <SimpleGrid cols={{ base: 1, sm: 2 }}>
            <SelectField
              name="role"
              label="Role"
              placeholder="Pick a role"
              data={ROLES}
              withAsterisk
            />
            <SelectField name="timezone" label="Timezone" data={TIMEZONES} />
          </SimpleGrid>
          <Group justify="flex-end">
            <Button type="submit">Save profile</Button>
          </Group>
        </Stack>
      </form>
    </ProfileFormProvider>
  );
}
