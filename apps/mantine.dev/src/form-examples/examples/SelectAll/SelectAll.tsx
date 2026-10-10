import { Button, Checkbox, Group, Stack, TextInput } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { permissions } from './data';

interface RoleValues {
  name: string;
  permissions: string[];
}

export function SelectAll() {
  const form = useForm<RoleValues>({
    mode: 'uncontrolled',
    initialValues: { name: '', permissions: ['read'] },
    validate: {
      name: isNotEmpty('Role name is required'),
      permissions: (value) => (value.length === 0 ? 'Select at least one permission' : null),
    },
  });

  const selected = form.useWatchValue('permissions');
  const allSelected = selected.length === permissions.length;
  const indeterminate = selected.length > 0 && !allSelected;

  const items = permissions.map((item) => (
    <Checkbox
      key={item.value}
      value={item.value}
      label={item.label}
      description={item.description}
      ml={30}
    />
  ));

  const handleSubmit = (values: RoleValues) => {
    notifications.show({
      title: 'Role created',
      message: `Role ${values.name} created with ${values.permissions.length} permissions`,
    });
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <TextInput
          label="Role name"
          placeholder="Maintainer"
          withAsterisk
          {...form.getInputProps('name')}
        />

        <div>
          <Checkbox
            label="Permissions"
            fw={500}
            checked={allSelected}
            indeterminate={indeterminate}
            onChange={() =>
              form.setFieldValue(
                'permissions',
                allSelected ? [] : permissions.map((item) => item.value)
              )
            }
          />
          <Checkbox.Group {...form.getInputProps('permissions')}>
            <Stack gap="sm" mt="sm">
              {items}
            </Stack>
          </Checkbox.Group>
        </div>

        <Group justify="flex-end">
          <Button variant="default" onClick={form.reset}>
            Reset
          </Button>
          <Button type="submit">Create role</Button>
        </Group>
      </Stack>
    </form>
  );
}
