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

const usernameSchema = z
  .string()
  .min(3, { error: 'Username must have at least 3 characters', abort: true });
const emailSchema = z.email({ error: 'Invalid email', abort: true });

// abort: true skips the async check when the sync check fails
const schema = z.object({
  username: usernameSchema.refine(async (value) => !(await isUsernameTaken(value)), {
    error: 'Username is taken',
  }),
  email: emailSchema.refine(async (value) => !(await isEmailTaken(value)), {
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

  const username = form.useWatchValue('username');
  const email = form.useWatchValue('email');
  const usernameValidating = form.isValidating('username');
  const emailValidating = form.isValidating('email');

  const usernameAvailable =
    usernameSchema.safeParse(username).success && !usernameValidating && !form.errors.username;
  const emailAvailable =
    emailSchema.safeParse(email).success && !emailValidating && !form.errors.email;

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
          size="md"
          label="Username"
          placeholder="your_username"
          withAsterisk
          loading={usernameValidating}
          success={usernameAvailable ? 'Username is available' : null}
          {...form.getInputProps('username')}
        />

        <TextInput
          size="md"
          label="Email"
          placeholder="you@mantine.dev"
          withAsterisk
          loading={emailValidating}
          success={emailAvailable ? 'Email is available' : null}
          {...form.getInputProps('email')}
        />

        <PasswordInput
          size="md"
          label="Password"
          placeholder="At least 8 characters"
          withAsterisk
          {...form.getInputProps('password')}
        />

        <Group justify="flex-end">
          <Button size="md" type="submit" disabled={form.validating} loading={form.submitting}>
            Create account
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
