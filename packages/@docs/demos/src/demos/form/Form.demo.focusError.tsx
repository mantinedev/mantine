/* eslint-disable no-console */

import { Button, Group, TextInput } from '@mantine/core';
import { isEmail, isNotEmpty, useForm } from '@mantine/form';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Group, TextInput } from '@mantine/core';
import { isEmail, isNotEmpty, useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
    },

    validate: {
      name: isNotEmpty('Name is required'),
      email: isEmail('Invalid email'),
    },
  });

  return (
    <form
      onSubmit={form.onSubmit(
        (values) => console.log(values),
        (errors) => {
          const firstErrorPath = Object.keys(errors)[0];
          form.getInputNode(firstErrorPath)?.focus();
        }
      )}
    >
      <TextInput
        withAsterisk
        label="Your name"
        placeholder="Your name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />

      <TextInput
        withAsterisk
        label="Your email"
        placeholder="your@email.com"
        mt="md"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`;

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
    },

    validate: {
      name: isNotEmpty('Name is required'),
      email: isEmail('Invalid email'),
    },
  });

  return (
    <form
      onSubmit={form.onSubmit(
        (values) => console.log(values),
        (errors) => {
          const firstErrorPath = Object.keys(errors)[0];
          form.getInputNode(firstErrorPath)?.focus();
        }
      )}
    >
      <TextInput
        withAsterisk
        label="Your name"
        placeholder="Your name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />

      <TextInput
        withAsterisk
        label="Your email"
        placeholder="your@email.com"
        mt="md"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export const focusError: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
