import { Anchor, Button, Checkbox, Group, PasswordInput, Stack, TextInput } from '@mantine/core';
import { hasLength, isEmail, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';

interface LoginValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

function login(values: LoginValues) {
  return new Promise<LoginValues>((resolve) => {
    setTimeout(() => resolve(values), 1500);
  });
}

export function LoginForm() {
  const form = useForm<LoginValues>({
    mode: 'uncontrolled',
    initialValues: { email: '', password: '', rememberMe: false },
    validate: {
      email: isEmail('Invalid email'),
      password: hasLength({ min: 8 }, 'Password must be at least 8 characters'),
    },
  });

  const handleSubmit = async (values: LoginValues) => {
    const user = await login(values);
    notifications.show({
      title: 'Signed in',
      message: `Welcome back, ${user.email}${user.rememberMe ? ', you will stay signed in on this device' : ''}`,
    });
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <TextInput
          label="Email"
          placeholder="you@mantine.dev"
          withAsterisk
          {...form.getInputProps('email')}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          withAsterisk
          {...form.getInputProps('password')}
        />
        <Group justify="space-between">
          <Checkbox
            label="Remember me"
            {...form.getInputProps('rememberMe', { type: 'checkbox' })}
          />
          <Anchor component="button" type="button" size="sm">
            Forgot password?
          </Anchor>
        </Group>
        <Group justify="flex-end">
          <Button type="submit" loading={form.submitting}>
            Sign in
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
