import React from 'react';
import { Box, Checkbox, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useForm } from '@mantine/form';
import { Box, Checkbox, TextInput } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
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
    </Box>
  );
}
`;

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
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
    </Box>
  );
}

export const nested: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
