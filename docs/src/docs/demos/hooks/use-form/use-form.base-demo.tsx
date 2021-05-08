import React from 'react';
import { TextInput, ElementsGroup, Button, Checkbox, useMantineTheme } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { TextInput, Button } from '@mantine/core';
import { useForm } from '@mantine/hooks';

export function UseFormDemo() {
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
        error={form.errors.email && 'Please specify valid email'}
        value={form.values.email}
        onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
      />

      <TextInput
        label="Name"
        value={form.values.name}
        onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
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
            error={form.errors.email && 'Please specify valid email'}
            value={form.values.email}
            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
          />

          <Checkbox
            style={{ marginTop: 15 }}
            label="I agree to seel my privacy to this corporation"
            checked={form.values.termsOfService}
            onChange={(event) => form.setFieldValue('termsOfService', event.currentTarget.checked)}
          />

          <ElementsGroup position="right" style={{ marginTop: 15 }}>
            <Button type="submit">Submit</Button>
          </ElementsGroup>
        </form>
      </div>
    </CodeDemo>
  );
}
