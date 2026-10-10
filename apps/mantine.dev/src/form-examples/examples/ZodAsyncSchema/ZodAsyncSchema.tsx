import { z } from 'zod';
import { Button, Group, PasswordInput, Stack, TextInput } from '@mantine/core';
import { schemaResolver, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';

interface SignUpValues {
  username: string;
  email: string;
  password: string;
}

const TAKEN_USERNAMES = ['admin', 'mantine', 'john'];
const TAKEN_EMAILS = ['taken@mantine.dev'];

function isUsernameTaken(username: string) {
  return new Promise<boolean>((resolve) => {
    setTimeout(() => resolve(TAKEN_USERNAMES.includes(username.toLowerCase())), 600);
  });
}

function isEmailTaken(email: string) {
  return new Promise<boolean>((resolve) => {
    setTimeout(() => resolve(TAKEN_EMAILS.includes(email.toLowerCase())), 600);
  });
}

function signUp(values: SignUpValues) {
  return new Promise<SignUpValues>((resolve) => {
    setTimeout(() => resolve(values), 1000);
  });
}

// abort: true skips the async check when the sync check fails
const schema = z.object({
  username: z
    .string()
    .min(3, { error: 'Username must have at least 3 characters', abort: true })
    .refine(async (value) => !(await isUsernameTaken(value)), { error: 'Username is taken' }),
  email: z
    .email({ error: 'Invalid email', abort: true })
    .refine(async (value) => !(await isEmailTaken(value)), {
      error: 'Email is already registered',
    }),
  password: z.string().min(8, { error: 'Password must have at least 8 characters' }),
});

export function ZodAsyncSchema() {
  const form = useForm<SignUpValues>({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validateInputOnChange: ['username', 'email'],
    validateDebounce: 400,
    validate: schemaResolver(schema),
  });

  const handleSubmit = async (values: SignUpValues) => {
    const user = await signUp(values);
    notifications.show({
      title: 'Account created',
      message: `Welcome, ${user.username}! A confirmation email was sent to ${user.email}`,
    });
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <TextInput
          label="Username"
          placeholder="your_username"
          withAsterisk
          loading={form.isValidating('username')}
          {...form.getInputProps('username')}
        />

        <TextInput
          label="Email"
          placeholder="you@mantine.dev"
          withAsterisk
          loading={form.isValidating('email')}
          {...form.getInputProps('email')}
        />

        <PasswordInput
          label="Password"
          placeholder="At least 8 characters"
          withAsterisk
          {...form.getInputProps('password')}
        />

        <Group justify="flex-end">
          <Button type="submit" loading={form.validating || form.submitting}>
            Create account
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
