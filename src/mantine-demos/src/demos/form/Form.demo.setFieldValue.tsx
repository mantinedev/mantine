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
    <Box maw={340} mx="auto">
      <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
      <TextInput mt="md" label="Email" placeholder="Email" {...form.getInputProps('email')} />

      <Group justify="center" mt="xl">
        <Button variant="outline" onClick={() => form.setFieldValue('name', randomId())}>
          Random name
        </Button>
        <Button
          variant="outline"
          onClick={() => form.setFieldValue('email', \`\${randomId()}@test.com\`)}
        >
          Random email
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
    <Box maw={340} mx="auto">
      <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
      <TextInput mt="md" label="Email" placeholder="Email" {...form.getInputProps('email')} />

      <Group justify="center" mt="xl">
        <Button variant="outline" onClick={() => form.setFieldValue('name', randomId())}>
          Random name
        </Button>
        <Button
          variant="outline"
          onClick={() => form.setFieldValue('email', `${randomId()}@test.com`)}
        >
          Random email
        </Button>
      </Group>
    </Box>
  );
}

export const setFieldValue: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
