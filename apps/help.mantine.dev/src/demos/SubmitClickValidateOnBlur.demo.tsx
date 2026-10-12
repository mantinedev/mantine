import { useState } from 'react';
import { Button, Group, Text, TextInput } from '@mantine/core';
import { FormErrors, isEmail, isNotEmpty, useForm } from '@mantine/form';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Button, Group, Text, TextInput } from '@mantine/core';
import { FormErrors, isEmail, isNotEmpty, useForm } from '@mantine/form';

function Demo() {
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);

  const form = useForm({
    validateInputOnBlur: true,
    initialValues: {
      name: '',
      email: '',
    },

    validate: {
      name: isNotEmpty('Name is required'),
      email: isEmail('Invalid email'),
    },
  });

  const handleErrors = (errors: FormErrors) => {
    setSubmittedEmail(null);
    form.getInputNode(Object.keys(errors)[0])?.focus();
  };

  return (
    <form
      onSubmit={form.onSubmit((values) => setSubmittedEmail(values.email), handleErrors)}
    >
      <TextInput
        withAsterisk
        label="Your name"
        placeholder="Your name"
        {...form.getInputProps('name')}
      />

      <TextInput
        withAsterisk
        label="Your email"
        placeholder="your@email.com"
        mt="md"
        {...form.getInputProps('email')}
      />

      <Group justify="space-between" mt="md">
        <Text size="sm">{submittedEmail && \`Submitted: \${submittedEmail}\`}</Text>
        <Button type="submit" onMouseDown={(event) => event.preventDefault()}>
          Submit
        </Button>
      </Group>
    </form>
  );
}
`;

function Demo() {
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);

  const form = useForm({
    validateInputOnBlur: true,
    initialValues: {
      name: '',
      email: '',
    },

    validate: {
      name: isNotEmpty('Name is required'),
      email: isEmail('Invalid email'),
    },
  });

  const handleErrors = (errors: FormErrors) => {
    setSubmittedEmail(null);
    form.getInputNode(Object.keys(errors)[0])?.focus();
  };

  return (
    <form onSubmit={form.onSubmit((values) => setSubmittedEmail(values.email), handleErrors)}>
      <TextInput
        withAsterisk
        label="Your name"
        placeholder="Your name"
        {...form.getInputProps('name')}
      />

      <TextInput
        withAsterisk
        label="Your email"
        placeholder="your@email.com"
        mt="md"
        {...form.getInputProps('email')}
      />

      <Group justify="space-between" mt="md">
        <Text size="sm">{submittedEmail && `Submitted: ${submittedEmail}`}</Text>
        <Button type="submit" onMouseDown={(event) => event.preventDefault()}>
          Submit
        </Button>
      </Group>
    </form>
  );
}

export const SubmitClickValidateOnBlur: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
