import React from 'react';
import { Box, Checkbox, Code, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useForm } from '@mantine/form';
import { TextInput, Checkbox, Code, Text, Box } from '@mantine/core';

function Demo() {
  const form = useForm({
    initialValues: {
      terms: false,
      user: {
        firstName: '',
        lastName: '',
      },
    },
  });

  return (
    <Box maw={340} mx="auto">
      <TextInput
        label="First name"
        placeholder="First name"
        {...form.getInputProps('user.firstName')}
      />
      <TextInput
        label="Last name"
        placeholder="Last name"
        mt="md"
        {...form.getInputProps('user.lastName')}
      />
      <Checkbox
        label="I accepts terms & conditions"
        mt="sm"
        {...form.getInputProps('terms', { type: 'checkbox' })}
      />

      <Text size="sm" fw={500} mt="xl">
        Form values:
      </Text>
      <Code block mt={5}>
        {JSON.stringify(form.values, null, 2)}
      </Code>
    </Box>
  );
}
`;

function Demo() {
  const form = useForm({
    initialValues: {
      terms: false,
      user: {
        firstName: '',
        lastName: '',
      },
    },
  });

  return (
    <Box maw={340} mx="auto">
      <TextInput
        label="First name"
        placeholder="First name"
        {...form.getInputProps('user.firstName')}
      />
      <TextInput
        label="Last name"
        placeholder="Last name"
        mt="md"
        {...form.getInputProps('user.lastName')}
      />
      <Checkbox
        label="I accepts terms & conditions"
        mt="sm"
        {...form.getInputProps('terms', { type: 'checkbox' })}
      />

      <Text size="sm" fw={500} mt="xl">
        Form values:
      </Text>
      <Code block mt={5}>
        {JSON.stringify(form.values, null, 2)}
      </Code>
    </Box>
  );
}

export const nested: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
