import React from 'react';
import { useForm } from '@mantine/form';
import { MantineDemo } from '@mantine/ds';
import { TextInput, Box, PasswordInput, Button, Group, Alert } from '@mantine/core';

const code = `
import { useForm } from '@mantine/form';
import { TextInput, Box, PasswordInput, Button, Group, Alert } from '@mantine/core';

interface FormValues {
  email: string;
  password: string;
}

function Demo() {
  const form = useForm<FormValues>({ initialValues: { email: 'test@test.com', password: 'test' } });

  async function onSubmit() {
    await new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('random error')), 1000);
    });
  }

  return (
    <Box maw={320} mx="auto">
      {form.submitError ? <Alert color="red">Submit error</Alert> : null}

      <form onSubmit={form.onSubmit(onSubmit)}>
        <TextInput label="Email" placeholder="Email" {...form.getInputProps('email')} />
        <PasswordInput
          mt="sm"
          label="Password"
          placeholder="Password"
          {...form.getInputProps('password')}
        />

        <Group>
          <Button mt="sm" type="submit" loading={form.submitting}>
            Login
          </Button>
        </Group>
      </form>
    </Box>
  );
}
`;

interface FormValues {
  email: string;
  password: string;
}

function Demo() {
  const form = useForm<FormValues>({ initialValues: { email: 'test@test.com', password: 'test' } });

  async function onSubmit() {
    await new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('random error')), 3000);
    });
  }

  return (
    <Box maw={320} mx="auto">
      {form.submitError ? <Alert color="red">Submit error</Alert> : null}

      <form onSubmit={form.onSubmit(onSubmit)}>
        <TextInput label="Email" placeholder="Email" {...form.getInputProps('email')} />
        <PasswordInput
          mt="sm"
          label="Password"
          placeholder="Password"
          {...form.getInputProps('password')}
        />

        <Group>
          <Button mt="sm" type="submit" loading={form.submitting}>
            Login
          </Button>
        </Group>
      </form>
    </Box>
  );
}

export const asyncSubmitting: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
