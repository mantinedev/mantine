import React, { useState } from 'react';
import { TextInput, Group, Button, LoadingOverlay } from '@mantine/core';
import { useForm } from '@mantine/hooks';

const code = `
import { useState } from 'react';
import { TextInput, Button, LoadingOverlay } from '@mantine/core';
import { useForm } from '@mantine/hooks';

function Demo() {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string>(null);
  const form = useForm({
    initialValues: { email: 'test@mantine.dev' },
    validationRules: {
      email: (value) => /^\\S+@\\S+$/.test(value),
    },
  });

  const handleSubmit = (values: typeof form['values']) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (values.email === 'test@mantine.dev') {
        setServerError('Email already taken');
        form.setFieldError('email', true);
      }
    }, 1500);
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)} style={{ position: 'relative' }}>
      <LoadingOverlay visible={loading} />
      <TextInput
        required
        label="Email"
        placeholder="your@email.com"
        error={form.errors.email && (serverError || 'Please specify valid email')}
        value={form.values.email}
        onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
        onFocus={() => {
          setServerError(null);
          form.setFieldError('email', false);
        }}
      />

      <Button type="submit">Register</Button>
    </form>
  );
}
`;

function Demo() {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string>(null);

  const form = useForm({
    initialValues: { email: 'test@mantine.dev' },
    validationRules: {
      email: (value) => /^\S+@\S+$/.test(value),
    },
  });

  const handleSubmit = (values: typeof form['values']) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (values.email === 'test@mantine.dev') {
        setServerError('Email already taken');
        form.setFieldError('email', true);
      }
    }, 1500);
  };

  return (
    <div style={{ maxWidth: 360, margin: 'auto' }}>
      <form onSubmit={form.onSubmit(handleSubmit)} style={{ position: 'relative' }}>
        <LoadingOverlay visible={loading} />
        <TextInput
          required
          label="Email"
          placeholder="your@email.com"
          error={form.errors.email && (serverError || 'Please specify valid email')}
          value={form.values.email}
          onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
          onFocus={() => {
            setServerError(null);
            form.setFieldError('email', false);
          }}
        />

        <Group position="right" style={{ marginTop: 15 }}>
          <Button type="submit">Register</Button>
        </Group>
      </form>
    </div>
  );
}

export const useFormValidation: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
