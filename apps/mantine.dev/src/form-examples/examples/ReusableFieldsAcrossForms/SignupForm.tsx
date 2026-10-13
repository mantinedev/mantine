import { Button, Group, PasswordInput, Stack, TextInput } from '@mantine/core';
import { FormErrors, hasLength, isNotEmpty, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { EmailField, emailRule } from './EmailField';

interface SignupValues {
  fullName: string;
  email: string;
  password: string;
}

export function SignupForm() {
  const form = useForm<SignupValues>({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
    },
    validate: {
      fullName: isNotEmpty('Full name is required'),
      email: emailRule,
      password: hasLength({ min: 8 }, 'Password must be at least 8 characters'),
    },
  });

  const handleSubmit = (values: SignupValues) => {
    notifications.show({
      title: 'Account created',
      message: `Welcome, ${values.fullName}. We sent a confirmation link to ${values.email}`,
    });
  };

  const handleErrors = (errors: FormErrors) => {
    form.getInputNode(Object.keys(errors)[0])?.focus();
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit, handleErrors)}>
      <Stack>
        <TextInput
          size="md"
          label="Full name"
          placeholder="Jane Doe"
          withAsterisk
          {...form.getInputProps('fullName')}
        />

        <EmailField field={form.getField('email')} withAsterisk />

        <PasswordInput
          size="md"
          label="Password"
          placeholder="At least 8 characters"
          withAsterisk
          {...form.getInputProps('password')}
        />

        <Group justify="flex-end">
          <Button size="md" type="submit">
            Create account
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
