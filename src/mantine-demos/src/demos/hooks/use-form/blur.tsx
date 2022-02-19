import React from 'react';
import { TextInput } from '@mantine/core';
import { useForm } from '@mantine/hooks';

const code = `
import { TextInput } from '@mantine/core';
import { useForm } from '@mantine/hooks';

function Demo() {
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

function Demo() {
  const form = useForm({
    initialValues: { email: '' },
    validationRules: { email: (value) => /^\S+@\S+$/.test(value) },
    errorMessages: { email: 'Invalid email' },
  });

  return (
    <div style={{ maxWidth: 360, margin: 'auto' }}>
      <TextInput
        required
        label="Email"
        placeholder="your@email.com"
        onBlur={() => form.validateField('email')}
        {...form.getInputProps('email')}
      />
    </div>
  );
}

export const useFormBlur: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
