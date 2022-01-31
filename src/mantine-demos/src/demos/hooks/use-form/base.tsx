import React from 'react';
import { TextInput, Group, Button, Checkbox, useMantineTheme } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import { CodeDemo } from '../../../components/Demo/Demo';

const code = `import { TextInput, Checkbox, Button } from '@mantine/core';
import { useForm } from '@mantine/hooks';

export function Demo() {
  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validationRules: {
      email: (value) => /^\\S+@\\S+$/.test(value),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput
        required
        label="Email"
        placeholder="your@email.com"
        {...form.getInputProps('email')}
      />

      <Checkbox
        mt="md"
        label="I agree to sell my privacy to this corporation"
        {...form.getInputProps('termsOfService', { type: 'checkbox' })}
      />

      <Button type="submit">Submit</Button>
    </form>
  );
}
`;

export function UseFormBaseDemo() {
  const theme = useMantineTheme();

  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validationRules: {
      email: (value) => /^\S+@\S+$/.test(value),
    },
  });

  return (
    <CodeDemo
      code={code}
      language="tsx"
      demoBackground={theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}
    >
      <div style={{ maxWidth: 360, margin: 'auto' }}>
        <form onSubmit={form.onSubmit(() => {})}>
          <TextInput
            required
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps('email')}
          />

          <Checkbox
            mt="md"
            label="I agree to sell my privacy to this corporation"
            {...form.getInputProps('termsOfService', { type: 'checkbox' })}
          />

          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </div>
    </CodeDemo>
  );
}
