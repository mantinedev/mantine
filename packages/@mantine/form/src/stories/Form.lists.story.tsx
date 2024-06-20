import { ActionIcon, Button, Group, Switch, Text, TextInput } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { useForm } from '../use-form';
import { FormBase } from './_base';

export default { title: 'Form' };

export function Lists() {
  const form = useForm({
    initialValues: {
      employees: [
        { name: '', active: false, key: randomId() },
        { name: '', active: false, key: randomId() },
        { name: '', active: false, key: randomId() },
      ],
    },

    validate: {
      employees: {
        name: (value) => (value.length < 2 ? 'Too short' : null),
      },
    },
  });

  const fields = form.values.employees.map((item, index) => (
    <Group key={item.key} mt="xs">
      <TextInput
        placeholder="John Doe"
        style={{ flex: 1 }}
        {...form.getInputProps(`employees.${index}.name`)}
      />
      <Switch
        label="Active"
        {...form.getInputProps(`employees.${index}.active`, { type: 'checkbox' })}
      />
      <ActionIcon color="red" onClick={() => form.removeListItem('employees', index)}>
        $
      </ActionIcon>
    </Group>
  ));

  return (
    <FormBase form={form}>
      {fields.length > 0 ? (
        <Group mb="xs">
          <Text fw={500} size="sm" style={{ flex: 1 }}>
            Name
          </Text>
          <Text fw={500} size="sm" pr={90}>
            Status
          </Text>
        </Group>
      ) : (
        <Text c="dimmed" ta="center">
          No one here...
        </Text>
      )}

      {fields}

      <Group justify="center" mt="md">
        <Button
          onClick={() =>
            form.insertListItem('employees', { name: '', active: false, key: randomId() })
          }
        >
          Add employee
        </Button>
      </Group>
    </FormBase>
  );
}

export function ListsUncontrolled() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      employees: [
        { name: 'First', active: false, key: randomId() },
        { name: 'Second', active: false, key: randomId() },
        { name: 'Third', active: false, key: randomId() },
      ],
    },

    validate: {
      employees: {
        name: (value) => (value.length < 2 ? 'Too short' : null),
      },
    },
  });

  const fields = form.values.employees.map((item, index) => (
    <Group key={item.key} mt="xs">
      <TextInput
        placeholder="John Doe"
        style={{ flex: 1 }}
        {...form.getInputProps(`employees.${index}.name`)}
      />
      <Switch
        label="Active"
        {...form.getInputProps(`employees.${index}.active`, { type: 'checkbox' })}
      />
      <ActionIcon color="red" onClick={() => form.removeListItem('employees', index)}>
        $
      </ActionIcon>
    </Group>
  ));

  return (
    <FormBase form={form}>
      {fields.length > 0 ? (
        <Group mb="xs">
          <Text fw={500} size="sm" style={{ flex: 1 }}>
            Name
          </Text>
          <Text fw={500} size="sm" pr={90}>
            Status
          </Text>
        </Group>
      ) : (
        <Text c="dimmed" ta="center">
          No one here...
        </Text>
      )}

      {fields}

      <Group justify="center" mt="md">
        <Button
          onClick={() =>
            form.insertListItem('employees', { name: '', active: false, key: randomId() })
          }
        >
          Add employee
        </Button>
        <Button onClick={() => form.reorderListItem('employees', { from: 0, to: 2 })}>
          Reorder
        </Button>
      </Group>
    </FormBase>
  );
}
