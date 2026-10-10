import { Button, Group, PasswordInput, Stack } from '@mantine/core';
import { matchesField, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { PasswordInputWithStrength } from './PasswordInputWithStrength';
import { validatePassword } from './requirements';

interface PasswordValues {
  password: string;
  confirmPassword: string;
}

function updatePassword(values: PasswordValues) {
  return new Promise<PasswordValues>((resolve) => {
    setTimeout(() => resolve(values), 1000);
  });
}

export function PasswordStrength() {
  const form = useForm<PasswordValues>({
    mode: 'uncontrolled',
    initialValues: { password: '', confirmPassword: '' },
    validate: {
      password: validatePassword,
      confirmPassword: matchesField('password', 'Passwords do not match'),
    },
  });

  const handleSubmit = async (values: PasswordValues) => {
    await updatePassword(values);
    notifications.show({
      title: 'Password updated',
      message: 'Use your new password the next time you sign in',
    });
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <PasswordInputWithStrength
          label="New password"
          placeholder="Your new password"
          withAsterisk
          {...form.getInputProps('password')}
        />
        <PasswordInput
          label="Confirm password"
          placeholder="Repeat your new password"
          withAsterisk
          {...form.getInputProps('confirmPassword')}
        />
        <Group justify="flex-end">
          <Button type="submit" loading={form.submitting}>
            Update password
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
