import { useState } from 'react';
import { Button, Group, SimpleGrid, Stack, Textarea, TextInput } from '@mantine/core';
import { FormErrors, hasLength, isEmail, isNotEmpty, isUrl, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { ErrorSummary } from './ErrorSummary';

interface ProfileValues {
  firstName: string;
  lastName: string;
  email: string;
  website: string;
  bio: string;
}

const LABELS: Record<keyof ProfileValues, string> = {
  firstName: 'First name',
  lastName: 'Last name',
  email: 'Email',
  website: 'Website',
  bio: 'Bio',
};

export function ValidateOnBlur() {
  const [showSummary, setShowSummary] = useState(false);

  const form = useForm<ProfileValues>({
    mode: 'uncontrolled',
    validateInputOnBlur: true,
    initialValues: { firstName: '', lastName: '', email: '', website: '', bio: '' },
    validate: {
      firstName: isNotEmpty('First name is required'),
      lastName: isNotEmpty('Last name is required'),
      email: isEmail('Invalid email'),
      website: isUrl('Invalid URL'),
      bio: hasLength({ min: 10 }, 'Bio must be at least 10 characters'),
    },
  });

  const focusField = (path: string) => form.getInputNode(path)?.focus();

  const handleSubmit = (values: ProfileValues) => {
    setShowSummary(false);
    notifications.show({
      title: 'Profile saved',
      message: `${values.firstName} ${values.lastName}, your profile is up to date`,
    });
  };

  const handleErrors = (errors: FormErrors) => {
    setShowSummary(true);
    focusField(Object.keys(errors)[0]);
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit, handleErrors)}>
      <Stack>
        {showSummary && (
          <ErrorSummary errors={form.errors} labels={LABELS} onFocusField={focusField} />
        )}
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <TextInput
            label="First name"
            placeholder="John"
            withAsterisk
            {...form.getInputProps('firstName')}
          />
          <TextInput
            label="Last name"
            placeholder="Doe"
            withAsterisk
            {...form.getInputProps('lastName')}
          />
        </SimpleGrid>
        <TextInput
          label="Email"
          placeholder="john@mantine.dev"
          withAsterisk
          {...form.getInputProps('email')}
        />
        <TextInput
          label="Website"
          placeholder="https://mantine.dev"
          withAsterisk
          {...form.getInputProps('website')}
        />
        <Textarea
          label="Bio"
          placeholder="A few words about yourself"
          withAsterisk
          autosize
          minRows={3}
          {...form.getInputProps('bio')}
        />
        <Group justify="flex-end">
          <Button type="submit">Save profile</Button>
        </Group>
      </Stack>
    </form>
  );
}
