import { Alert, Button, Group, PasswordInput, Stack, TextInput } from '@mantine/core';
import { hasLength, isEmail, isNotEmpty, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';

interface SignUpValues {
  username: string;
  email: string;
  password: string;
}

type SignUpResponse = { ok: true } | { ok: false; status: number; errors: Record<string, string> };

function signUp(values: SignUpValues) {
  return new Promise<SignUpResponse>((resolve) => {
    setTimeout(() => {
      if (values.username === 'taken') {
        resolve({
          ok: false,
          status: 422,
          errors: { username: 'This username is already taken' },
        });
      } else if (values.email === 'blocked@mantine.dev') {
        resolve({
          ok: false,
          status: 403,
          errors: { root: 'Sign-ups are temporarily disabled for this domain' },
        });
      } else {
        resolve({ ok: true });
      }
    }, 1000);
  });
}

export function ServerErrors() {
  const form = useForm<SignUpValues>({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validate: {
      username: isNotEmpty('Username is required'),
      email: isEmail('Invalid email'),
      password: hasLength({ min: 8 }, 'Password must be at least 8 characters'),
    },
    // root is not a field, so it is not cleared by clearInputErrorOnChange
    onValuesChange: () => form.clearFieldError('root'),
  });

  const handleSubmit = async (values: SignUpValues) => {
    const response = await signUp(values);

    if (response.ok) {
      notifications.show({
        title: 'Account created',
        message: `Welcome, ${values.username}! A confirmation email was sent to ${values.email}`,
      });
    } else {
      form.setErrors(response.errors);
    }
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <TextInput
          size="md"
          label="Username"
          placeholder="your_username"
          withAsterisk
          {...form.getInputProps('username')}
        />

        <TextInput
          size="md"
          label="Email"
          placeholder="you@mantine.dev"
          withAsterisk
          {...form.getInputProps('email')}
        />

        <PasswordInput
          size="md"
          label="Password"
          placeholder="At least 8 characters"
          withAsterisk
          {...form.getInputProps('password')}
        />
        {form.errors.root && (
          <Alert color="red" title="Sign-up failed">
            {form.errors.root}
          </Alert>
        )}
        <Group justify="flex-end">
          <Button size="md" type="submit" loading={form.submitting}>
            Create account
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
