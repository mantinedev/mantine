/* eslint-disable no-console */

import { Button, Group, Loader, TextInput } from '@mantine/core';
import { isEmail, useForm } from '@mantine/form';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Group, Loader, TextInput } from '@mantine/core';
import { isEmail, useForm } from '@mantine/form';

// Simulates an async API call to check if the username is available
function checkUsernameAvailability(username: string, signal?: AbortSignal): Promise<string | null> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      const taken = ['admin', 'user', 'test', 'mantine'];
      resolve(taken.includes(username.toLowerCase()) ? 'Username is already taken' : null);
    }, 800);

    signal?.addEventListener('abort', () => {
      clearTimeout(timer);
      reject(new DOMException('Aborted', 'AbortError'));
    });
  });
}

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { username: '', email: '' },
    validate: {
      username: async (value, _values, _path, signal) => {
        if (value.trim().length < 3) {
          return 'Username must be at least 3 characters';
        }
        return checkUsernameAvailability(value, signal);
      },
      email: isEmail('Invalid email'),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput
        withAsterisk
        label="Username"
        placeholder="Pick a username"
        key={form.key('username')}
        disabled={form.submitting}
        rightSection={form.validating ? <Loader size={16} /> : null}
        {...form.getInputProps('username')}
      />

      <TextInput
        withAsterisk
        mt="md"
        label="Email"
        placeholder="your@email.com"
        key={form.key('email')}
        disabled={form.submitting}
        {...form.getInputProps('email')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit" loading={form.submitting}>
          Submit
        </Button>
      </Group>
    </form>
  );
}
`;

function checkUsernameAvailability(username: string, signal?: AbortSignal): Promise<string | null> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      const taken = ['admin', 'user', 'test', 'mantine'];
      resolve(taken.includes(username.toLowerCase()) ? 'Username is already taken' : null);
    }, 800);

    signal?.addEventListener('abort', () => {
      clearTimeout(timer);
      reject(new DOMException('Aborted', 'AbortError'));
    });
  });
}

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { username: '', email: '' },
    validate: {
      username: async (value, _values, _path, signal) => {
        if (value.trim().length < 3) {
          return 'Username must be at least 3 characters';
        }
        return checkUsernameAvailability(value, signal);
      },
      email: isEmail('Invalid email'),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput
        withAsterisk
        label="Username"
        placeholder="Pick a username"
        key={form.key('username')}
        disabled={form.submitting}
        rightSection={form.validating ? <Loader size={16} /> : null}
        {...form.getInputProps('username')}
      />

      <TextInput
        withAsterisk
        mt="md"
        label="Email"
        placeholder="your@email.com"
        key={form.key('email')}
        disabled={form.submitting}
        {...form.getInputProps('email')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit" loading={form.submitting}>
          Submit
        </Button>
      </Group>
    </form>
  );
}

export const asyncValidation: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
