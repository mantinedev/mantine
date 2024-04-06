/* eslint-disable no-console */
import React from 'react';
import { Button, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useForm } from '@mantine/form';
import { TextInput, Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: '', email: '' },
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const handleError = (errors: typeof form.errors) => {
    if (errors.name) {
      notifications.show({ message: 'Please fill name field', color: 'red' });
    } else if (errors.email) {
      notifications.show({ message: 'Please provide a valid email', color: 'red' });
    }
  };

  return (
    <form onSubmit={form.onSubmit(console.log, handleError)}>
      <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
      <TextInput mt="sm" label="Email" placeholder="Email" {...form.getInputProps('email')} />
      <Button type="submit" mt="sm">
        Submit
      </Button>
    </form>
  );
}
`;

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: '', email: '' },
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const handleError = (errors: typeof form.errors) => {
    if (errors.name) {
      notifications.show({ message: 'Please fill name field', color: 'red' });
    } else if (errors.email) {
      notifications.show({ message: 'Please provide a valid email', color: 'red' });
    }
  };

  return (
    <form onSubmit={form.onSubmit(console.log, handleError)}>
      <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
      <TextInput mt="sm" label="Email" placeholder="Email" {...form.getInputProps('email')} />
      <Button type="submit" mt="sm">
        Submit
      </Button>
    </form>
  );
}

export const onSubmitErrors: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
