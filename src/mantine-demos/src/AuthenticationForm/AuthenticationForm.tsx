import React, { useState } from 'react';
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

const atLeastTwoCharacters = (value: string) => value.trim().length >= 2;

export default function AuthenticationForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>(null);

  const form = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      termsOfService: true,
    },

    validationRules: {
      firstName: atLeastTwoCharacters,
      lastName: atLeastTwoCharacters,
      email: (value) => /^\S+@\S+$/.test(value),
      password: (value) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(value),
    },
  });

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setError('User with this email already exists');
    }, 3000);
  };

  return (
    <Paper padding="lg" shadow="sm">
      <form onSubmit={form.onSubmit(handleSubmit)} style={{ position: 'relative' }}>
        <LoadingOverlay visible={loading} />
        <div style={{ display: 'flex' }}>
          <TextInput
            required
            placeholder="Your first name"
            label="First name"
            style={{ marginRight: 20, flex: '0 0 calc(50% - 10px)' }}
            {...form.getInputProps({
              field: 'firstName',
              error: 'First name should include at least 2 characters',
            })}
          />

          <TextInput
            required
            placeholder="Your last name"
            label="Last name"
            style={{ flex: '0 0 calc(50% - 10px)' }}
            {...form.getInputProps({
              field: 'lastName',
              error: 'Last name should include at least 2 characters',
            })}
          />
        </div>

        <TextInput
          style={{ marginTop: 15 }}
          required
          placeholder="Your email"
          label="Email"
          icon={<EnvelopeClosedIcon />}
          {...form.getInputProps({
            field: 'email',
            error: 'Field should contain a valid email',
          })}
        />

        <PasswordInput
          style={{ marginTop: 15 }}
          required
          placeholder="Password"
          label="Password"
          showPasswordLabel="Show password"
          hidePasswordLabel="Hide password"
          icon={<LockClosedIcon />}
          {...form.getInputProps({
            field: 'password',
            error: 'Password should contain 1 number, 1 letter and at least 6 characters',
          })}
        />

        <Checkbox
          style={{ marginTop: 20 }}
          label="I agree to sell my soul and privacy to this corporation"
          value={form.values.termsOfService}
          onChange={(value) => form.setField('termsOfService', value)}
        />

        {error && (
          <Text color="red" style={{ marginTop: 10 }}>
            {error}
          </Text>
        )}

        <ElementsGroup position="apart" style={{ marginTop: 25 }}>
          <Button variant="link" color="gray">
            Have an account? Login
          </Button>

          <Button color="blue" type="submit">
            Register
          </Button>
        </ElementsGroup>
      </form>
    </Paper>
  );
}
