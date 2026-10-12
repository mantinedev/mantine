import { Button, Group, Stack, TextInput } from '@mantine/core';
import { isEmail, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';

interface SignUpValues {
  username: string;
  email: string;
}

const TAKEN_USERNAMES = ['admin', 'mantine', 'john'];
const USERNAME_PATTERN = /^[a-z0-9_]{3,}$/;

function checkUsername(username: string, signal?: AbortSignal) {
  return new Promise<string | null>((resolve, reject) => {
    const timer = setTimeout(() => {
      resolve(TAKEN_USERNAMES.includes(username) ? 'Username is taken' : null);
    }, 800);

    signal?.addEventListener('abort', () => {
      clearTimeout(timer);
      reject(new DOMException('Aborted', 'AbortError'));
    });
  });
}

function checkEmail(email: string) {
  return new Promise<string | null>((resolve, reject) => {
    setTimeout(() => {
      if (email === 'fail@mantine.dev') {
        reject(new Error('Network error'));
      } else {
        resolve(null);
      }
    }, 800);
  });
}

function signUp(values: SignUpValues) {
  return new Promise<SignUpValues>((resolve) => {
    setTimeout(() => resolve(values), 1000);
  });
}

export function UsernameAvailability() {
  const form = useForm<SignUpValues>({
    initialValues: {
      username: '',
      email: '',
    },
    validateInputOnChange: ['username'],
    validateDebounce: 400,
    resolveValidationError: (error) =>
      error instanceof Error ? error.message : 'Validation failed',
    validate: {
      username: (value, _values, _path, signal) => {
        // Sync check first, the API is called only for well-formed usernames
        if (!USERNAME_PATTERN.test(value)) {
          return 'Use at least 3 lowercase letters, numbers or underscores';
        }

        return checkUsername(value, signal);
      },
      email: (value) => {
        const formatError = isEmail('Invalid email')(value);
        return formatError ? formatError : checkEmail(value);
      },
    },
  });

  const username = form.useWatchValue('username');
  const usernameValidating = form.isValidating('username');
  const usernameAvailable =
    USERNAME_PATTERN.test(username) && !usernameValidating && !form.errors.username;

  const handleSubmit = async (values: SignUpValues) => {
    const user = await signUp(values);
    notifications.show({
      title: 'Welcome aboard',
      message: `Account ${user.username} created`,
    });
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack maw={420} mx="auto">
        <TextInput
          size="md"
          label="Username"
          placeholder="your_username"
          withAsterisk
          loading={usernameValidating}
          success={usernameAvailable ? 'Username is available' : null}
          {...form.getInputProps('username')}
          error={usernameValidating ? null : form.errors.username}
        />

        <TextInput
          size="md"
          label="Email"
          placeholder="you@mantine.dev"
          withAsterisk
          {...form.getInputProps('email')}
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
