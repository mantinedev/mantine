import { IconTrash } from '@tabler/icons-react';
import { ActionIcon, Box, Button, Group, Switch, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { randomId } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useForm } from '@mantine/form';
import { TextInput, Switch, Group, ActionIcon, Box, Text, Button } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { IconTrash } from '@tabler/icons-react';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      employees: [{ name: '', active: false, key: randomId() }],
    },
  });

  const fields = form.getValues().employees.map((item, index) => (
    <Group key={item.key} mt="xs">
      <TextInput
        placeholder="John Doe"
        withAsterisk
        style={{ flex: 1 }}
        key={form.key(\`employees.\${index}.name\`)}
        {...form.getInputProps(\`employees.\${index}.name\`)}
      />
      <Switch
        label="Active"
        key={form.key(\`employees.\${index}.active\`)}
        {...form.getInputProps(\`employees.\${index}.active\`, { type: 'checkbox' })}
      />
      <ActionIcon color="red" onClick={() => form.removeListItem('employees', index)}>
        <IconTrash size={16} />
      </ActionIcon>
    </Group>
  ));

  return (
    <Box maw={500} mx="auto">
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
    </Box>
  );
}
`;

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      employees: [{ name: '', active: false, key: randomId() }],
    },
  });

  const fields = form.getValues().employees.map((item, index) => (
    <Group key={item.key} mt="xs">
      <TextInput
        placeholder="John Doe"
        withAsterisk
        style={{ flex: 1 }}
        key={form.key(`employees.${index}.name`)}
        {...form.getInputProps(`employees.${index}.name`)}
      />
      <Switch
        label="Active"
        key={form.key(`employees.${index}.active`)}
        {...form.getInputProps(`employees.${index}.active`, { type: 'checkbox' })}
      />
      <ActionIcon color="red" onClick={() => form.removeListItem('employees', index)}>
        <IconTrash size={16} />
      </ActionIcon>
    </Group>
  ));

  return (
    <Box maw={500} mx="auto">
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
    </Box>
  );
}

export const lists: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
