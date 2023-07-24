import React from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button, Group, Box } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { randomId } from '@mantine/hooks';

const code = `
import { useForm } from '@mantine/form';
import { TextInput, Button, Group, Box } from '@mantine/core';
import { randomId } from '@mantine/hooks';

function Demo() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
    },
  });

  return (
    <Box maw={320} mx="auto">
      <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
      <TextInput mt="md" label="Email" placeholder="Email" {...form.getInputProps('email')} />

      <Group position="center" mt="xl">
        <Button
          variant="outline"
          onClick={() =>
            form.setValues({
              name: randomId(),
              email: \`\${randomId()}@test.com\`,
            })
          }
        >
          Set random values
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            form.setInitialValues({
              name: 'John Doe',
              email: 'mantine-s14hvw8de@test.com',
            })
          }
        >
          Set Initial Values
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            form.reset()
          }
        >
          Reset
        </Button>
      </Group>
    </Box>
  );
}
`;

function Demo() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
    },
  });

  return (
    <Box maw={320} mx="auto">
      <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
      <TextInput mt="md" label="Email" placeholder="Email" {...form.getInputProps('email')} />

      <Group position="center" mt="xl">
        <Button
          variant="outline"
          onClick={() =>
            form.setValues({
              name: randomId(),
              email: `${randomId()}@test.com`,
            })
          }
        >
          Set random values
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            form.setInitialValues({
              name: 'John Doe',
              email: 'mantine-s14hvw8de@test.com',
            })
          }
        >
          Set Initial Values
        </Button>
        <Button variant="outline" onClick={() => form.reset()}>
          Reset
        </Button>
      </Group>
    </Box>
  );
}

export const setInitialValues: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
