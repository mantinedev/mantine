/* eslint-disable no-console */
import React from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button } from '@mantine/core';
import { showNotification } from '@mantine/notifications';

const code = `
import { useForm } from '@mantine/form';
import { TextInput, Button } from '@mantine/core';
import { showNotification } from '@mantine/notifications';

function Demo() {
  const form = useForm({
    initialValues: { name: '', email: '' },
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const handleError = (errors: typeof form.errors) => {
    if (errors.name) {
      showNotification({ message: 'Please fill name field', color: 'red' });
    } else if (errors.email) {
      showNotification({ message: 'Please provide a valid email', color: 'red' });
    }
  };

  const handleSubmit = (values: typeof form.values) => {};

  return (
    <form onSubmit={form.onSubmit(handleSubmit, handleError)}>
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
    initialValues: { name: '', email: '' },
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const handleError = (errors: typeof form.errors) => {
    if (errors.name) {
      showNotification({ message: 'Please fill name field', color: 'red' });
    } else if (errors.email) {
      showNotification({ message: 'Please provide a valid email', color: 'red' });
    }
  };

  return (
    <form
      style={{ maxWidth: 320, margin: 'auto' }}
      onSubmit={form.onSubmit(console.log, handleError)}
    >
      <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
      <TextInput mt="sm" label="Email" placeholder="Email" {...form.getInputProps('email')} />
      <Button type="submit" mt="sm">
        Submit
      </Button>
    </form>
  );
}

export const onSubmitErrors: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
