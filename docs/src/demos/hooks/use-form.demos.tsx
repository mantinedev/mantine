import OpenColor from 'open-color';
import React from 'react';
import { TextInput, ElementsGroup, Button, Checkbox } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import { AuthenticationForm } from '@mantine/demos';
import CodeDemo from '../../components/CodeDemo/CodeDemo';

const validationCode = `import React from 'react';
import { TextInput, Button, Checkbox } from '@mantine/core';
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

export function UseFormValidationDemo() {
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
    <CodeDemo code={validationCode} language="tsx">
      <div style={{ maxWidth: 360, margin: 'auto' }}>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
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

const complexCode = `import React, { useState } from 'react';
import { useForm } from '@mantine/hooks';
import { EnvelopeClosedIcon, LockClosedIcon } from '@modulz/radix-icons';
import {
  TextInput,
  PasswordInput,
  ElementsGroup,
  Checkbox,
  Button,
  Paper,
  Text,
  LoadingOverlay,
} from '@mantine/core';

function AuthenticationForm() {
  const [formType, setFormType] = useState<'register' | 'login'>('register');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>(null);

  const toggleFormType = () => {
    setFormType((current) => (current === 'register' ? 'login' : 'register'));
    setError(null);
  };

  const form = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      termsOfService: true,
    },

    validationRules: {
      firstName: (value) => formType === 'login' || value.trim().length >= 2,
      lastName: (value) => formType === 'login' || value.trim().length >= 2,
      email: (value) => /^\\S+@\\S+$/.test(value),
      password: (value) => /^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$/.test(value),
    },
  });

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setError(
        formType === 'register'
          ? 'User with this email already exists'
          : 'User with this email does not exist'
      );
    }, 3000);
  };

  return (
    <Paper padding="lg" shadow="sm">
      <form onSubmit={form.onSubmit(handleSubmit)} style={{ position: 'relative' }}>
        <LoadingOverlay visible={loading} />
        {formType === 'register' && (
          <div style={{ display: 'flex', marginBottom: 15 }}>
            <TextInput
              required
              placeholder="Your first name"
              label="First name"
              style={{ marginRight: 20, flex: '0 0 calc(50% - 10px)' }}
              value={form.values.firstName}
              onChange={(event) => form.setFieldValue('firstName', event.currentTarget.value)}
              onFocus={() => form.setFieldError('firstName', false)}
              error={form.errors.firstName && 'First name should include at least 2 characters'}
            />

            <TextInput
              required
              placeholder="Your last name"
              label="Last name"
              style={{ flex: '0 0 calc(50% - 10px)' }}
              value={form.values.lastName}
              onChange={(event) => form.setFieldValue('lastName', event.currentTarget.value)}
              onFocus={() => form.setFieldError('lastName', false)}
              error={form.errors.lastName && 'Last name should include at least 2 characters'}
            />
          </div>
        )}

        <TextInput
          required
          placeholder="Your email"
          label="Email"
          icon={<EnvelopeClosedIcon />}
          value={form.values.email}
          onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
          onFocus={() => form.setFieldError('email', false)}
          error={form.errors.email && 'Field should contain a valid email'}
        />

        <PasswordInput
          style={{ marginTop: 15 }}
          required
          placeholder="Password"
          label="Password"
          showPasswordLabel="Show password"
          hidePasswordLabel="Hide password"
          icon={<LockClosedIcon />}
          value={form.values.password}
          onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
          onFocus={() => form.setFieldError('password', false)}
          error={
            form.errors.password &&
            'Password should contain 1 number, 1 letter and at least 6 characters'
          }
        />

        {formType === 'register' && (
          <Checkbox
            style={{ marginTop: 20 }}
            label="I agree to sell my soul and privacy to this corporation"
            checked={form.values.termsOfService}
            onChange={(event) => form.setFieldValue('termsOfService', event.currentTarget.checked)}
          />
        )}

        {error && (
          <Text color="red" size="sm" style={{ marginTop: 10 }}>
            {error}
          </Text>
        )}

        <ElementsGroup position="apart" style={{ marginTop: 25 }}>
          <Button variant="link" color="gray" onClick={toggleFormType}>
            {formType === 'register' ? 'Have an account? Login' : "Don't have an account? Register"}
          </Button>

          <Button color="blue" type="submit">
            {formType === 'register' ? 'Register' : 'Login'}
          </Button>
        </ElementsGroup>
      </form>
    </Paper>
  );
}
`;

export function UseFormComplexDemo() {
  return (
    <CodeDemo code={complexCode} language="tsx" demoBackground={OpenColor.gray[0]}>
      <div style={{ maxWidth: 400, margin: 'auto' }}>
        <AuthenticationForm />
      </div>
    </CodeDemo>
  );
}
