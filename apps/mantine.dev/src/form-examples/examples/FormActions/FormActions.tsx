import { Button, Group, NumberInput, Stack, TextInput } from '@mantine/core';
import { isEmail, isInRange, isNotEmpty, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { ExternalControls } from './ExternalControls';
import { DemoFormValues } from './form-actions';

function DemoForm() {
  const form = useForm<DemoFormValues>({
    // Required for createFormActions('demo-form') to reach this form
    name: 'demo-form',
    initialValues: {
      name: '',
      email: '',
      age: '',
    },
    validate: {
      name: isNotEmpty('Name is required'),
      email: isEmail('Invalid email'),
      age: isInRange({ min: 18, max: 120 }, 'Age must be between 18 and 120'),
    },
  });

  const handleSubmit = (values: DemoFormValues) => {
    notifications.show({
      title: 'Form submitted',
      message: `${values.name} (${values.email}), age ${values.age}`,
    });
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <TextInput
          size="md"
          label="Name"
          placeholder="Jane Doe"
          withAsterisk
          {...form.getInputProps('name')}
        />

        <TextInput
          size="md"
          label="Email"
          placeholder="jane@mantine.dev"
          withAsterisk
          {...form.getInputProps('email')}
        />

        <NumberInput
          size="md"
          label="Age"
          placeholder="Your age"
          min={0}
          max={120}
          withAsterisk
          {...form.getInputProps('age')}
        />

        <Group justify="flex-end">
          <Button size="md" type="submit">
            Submit
          </Button>
        </Group>
      </Stack>
    </form>
  );
}

export function FormActions() {
  return (
    <Stack>
      <ExternalControls />
      <DemoForm />
    </Stack>
  );
}
