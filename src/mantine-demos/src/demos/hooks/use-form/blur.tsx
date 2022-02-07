import React from 'react';
import { TextInput, useMantineTheme } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import { CodeDemo } from '../../../components/Demo/Demo';

const code = `import { TextInput } from '@mantine/core';
import { useForm } from '@mantine/hooks';

export function Demo() {
  const form = useForm({
    initialValues: { email: '' },
    validationRules: { email: (value) => /^\\S+@\\S+$/.test(value) },
    errorMessages: { email: 'Invalid email' },
  });

  return (
    <TextInput
      required
      label="Email"
      placeholder="your@email.com"
      onBlur={() => form.validateField('email')}
      {...form.getInputProps('email')}
    />
  );
}
`;

export function UseFormBlurValidateDemo() {
  const theme = useMantineTheme();
  const form = useForm({
    initialValues: { email: '' },
    validationRules: { email: (value) => /^\S+@\S+$/.test(value) },
    errorMessages: { email: 'Invalid email' },
  });

  return (
    <CodeDemo
      code={code}
      language="tsx"
      demoBackground={theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}
    >
      <div style={{ maxWidth: 360, margin: 'auto' }}>
        <TextInput
          required
          label="Email"
          placeholder="your@email.com"
          onBlur={() => form.validateField('email')}
          {...form.getInputProps('email')}
        />
      </div>
    </CodeDemo>
  );
}
