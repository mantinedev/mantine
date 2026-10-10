import { useState } from 'react';
import { Alert, List, Stack, TextInput } from '@mantine/core';
import { FormErrors, isNotEmpty, matches, TransformedValues, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { SubmitBar } from './SubmitBar';
import { Payload, Values } from './types';

function sendPayload(payload: Payload) {
  return new Promise<Payload>((resolve) => {
    setTimeout(() => resolve(payload), 800);
  });
}

export function TypedForm() {
  const [errorList, setErrorList] = useState<string[]>([]);

  const form = useForm<Values, Payload>({
    initialValues: {
      name: '',
      age: '',
      tags: '',
    },
    validate: {
      name: isNotEmpty('Name is required'),
      age: matches(/^\d+$/, 'Age must be a whole number'),
    },
    transformValues: (values) => ({
      name: values.name.trim(),
      age: Number(values.age),
      tags: values.tags
        .split(',')
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0),
    }),
  });

  // Same type as Payload, derived from the form instead of declared by hand
  type SubmitValues = TransformedValues<typeof form>;

  const handleSubmit = async (values: SubmitValues) => {
    setErrorList([]);
    const payload = await sendPayload(values);
    notifications.show({
      title: 'Profile saved',
      message: `${payload.name}, age ${payload.age}, tags ${payload.tags.join(', ')}`,
    });
  };

  const showErrors = (errors: FormErrors) => {
    setErrorList(Object.entries(errors).map(([path, error]) => `${path}: ${error}`));
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit, showErrors)}>
      <Stack>
        <TextInput
          label="Name"
          placeholder="Jane Doe"
          withAsterisk
          {...form.getInputProps('name')}
        />

        <TextInput label="Age" placeholder="32" withAsterisk {...form.getInputProps('age')} />

        <TextInput
          label="Tags"
          placeholder="react, forms, typescript"
          description="Comma separated"
          {...form.getInputProps('tags')}
        />

        {errorList.length > 0 && (
          <Alert color="red" title="Fix the following errors">
            <List size="sm">
              {errorList.map((error) => (
                <List.Item key={error}>{error}</List.Item>
              ))}
            </List>
          </Alert>
        )}

        <SubmitBar form={form} />
      </Stack>
    </form>
  );
}
