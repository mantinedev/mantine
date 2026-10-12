import {
  Button,
  Checkbox,
  Group,
  PasswordInput,
  SimpleGrid,
  Stack,
  TextInput,
} from '@mantine/core';
import { FormErrors, isEmail, isNotEmpty, matchesField, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { PasswordInputWithRequirements, validatePassword } from './PasswordInputWithRequirements';

interface RegistrationValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

function register(values: RegistrationValues) {
  return new Promise<RegistrationValues>((resolve) => {
    setTimeout(() => resolve(values), 1500);
  });
}

export function RegistrationForm() {
  const form = useForm<RegistrationValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
    validate: {
      firstName: isNotEmpty('First name is required'),
      lastName: isNotEmpty('Last name is required'),
      email: isEmail('Invalid email'),
      password: validatePassword,
      confirmPassword: matchesField('password', 'Passwords do not match'),
      terms: isNotEmpty('You must accept terms and conditions'),
    },
  });

  form.watch('password', () => {
    if (form.errors.confirmPassword) {
      form.validateField('confirmPassword');
    }
  });

  const handleSubmit = async (values: RegistrationValues) => {
    const user = await register(values);
    notifications.show({
      title: 'Account created',
      message: `${user.firstName} ${user.lastName} (${user.email}) can now sign in`,
    });
  };

  const handleErrors = (errors: FormErrors) => {
    form.getInputNode(Object.keys(errors)[0])?.focus();
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit, handleErrors)}>
      <Stack>
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <TextInput
            size="md"
            label="First name"
            placeholder="John"
            withAsterisk
            {...form.getInputProps('firstName')}
          />

          <TextInput
            size="md"
            label="Last name"
            placeholder="Doe"
            withAsterisk
            {...form.getInputProps('lastName')}
          />
        </SimpleGrid>

        <TextInput
          size="md"
          label="Email"
          placeholder="you@mantine.dev"
          withAsterisk
          {...form.getInputProps('email')}
        />

        <PasswordInputWithRequirements form={form} />

        <PasswordInput
          size="md"
          label="Confirm password"
          placeholder="Repeat your password"
          withAsterisk
          {...form.getInputProps('confirmPassword')}
        />

        <Checkbox
          size="md"
          label="I accept terms and conditions"
          {...form.getInputProps('terms', { type: 'checkbox' })}
        />

        <Group justify="flex-end">
          <Button size="md" type="submit" loading={form.submitting}>
            Create account
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
