import React from 'react';
import { useForm } from '@mantine/hooks';
import { TextInput, PasswordInput, ElementsGroup, Checkbox, Button } from '@mantine/core';

const atLeastTwoCharacters = (value: string) => value.trim().length >= 2;

export default function AuthenticationForm() {
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

  return (
    <form onSubmit={form.onSubmit((values) => values)}>
      <ElementsGroup spacing={20} grow>
        <TextInput
          required
          placeholder="Your first name"
          label="First name"
          {...form.getInputProps({
            field: 'firstName',
            error: 'First name should include at least 2 characters',
          })}
        />

        <TextInput
          required
          placeholder="Your last name"
          label="Last name"
          {...form.getInputProps({
            field: 'lastName',
            error: 'Last name should include at least 2 characters',
          })}
        />
      </ElementsGroup>

      <TextInput
        style={{ marginTop: 15 }}
        required
        placeholder="Your email"
        label="Email"
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
        {...form.getInputProps({
          field: 'password',
          error: 'Password should contain 1 number, 1 letter and at least 6 characters',
        })}
      />

      <Checkbox
        style={{ marginTop: 15 }}
        label="I agree to sell my soul and privacy to this corporation"
        value={form.values.termsOfService}
        onChange={(value) => form.setField('termsOfService', value)}
      />

      <ElementsGroup position="right" style={{ marginTop: 10 }}>
        <Button color="blue" type="submit">
          Register
        </Button>
      </ElementsGroup>
    </form>
  );
}
