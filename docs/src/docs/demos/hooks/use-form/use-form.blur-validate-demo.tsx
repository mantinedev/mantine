import React from 'react';
import { TextInput } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { TextInput } from '@mantine/core';
import { useForm } from '@mantine/hooks';

export function UseFormDemo() {
  const form = useForm({
    initialValues: { email: '' },
    validationRules: {
      email: (value) => /^\\S+@\\S+$/.test(value),
    },
  });

  return (
    <TextInput
      required
      label="Email"
      error={form.errors.email && 'Please specify valid email'}
      value={form.values.email}
      onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
      onBlur={() => form.validateField('email')}
    />
  );
}
`;

export function UseFormBlurValidateDemo() {
  const form = useForm({
    initialValues: { email: '' },
    validationRules: {
      email: (value) => /^\S+@\S+$/.test(value),
    },
  });

  return (
    <CodeDemo code={code} language="tsx">
      <div style={{ maxWidth: 360, margin: 'auto' }}>
        <TextInput
          required
          label="Email"
          placeholder="your@email.com"
          error={form.errors.email && 'Please specify valid email'}
          value={form.values.email}
          onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
          onBlur={() => form.validateField('email')}
        />
      </div>
    </CodeDemo>
  );
}
