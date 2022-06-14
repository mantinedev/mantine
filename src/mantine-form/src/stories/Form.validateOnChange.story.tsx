import React from 'react';
import { TextInput, Checkbox } from '@mantine/core';
import { FormBase } from './_base';
import { useForm } from '../use-form';

export default { title: 'Form' };

export function ValidateOnChange() {
  const form = useForm({
    initialValues: { name: '', email: '', terms: false },
    validateInputOnChange: ['email'],
    clearInputErrorOnChange: false,
    validate: {
      name: (value) => (value.length < 6 ? 'Less than 6' : null),
      email: (value) => (value.length > 6 ? 'More than 6' : null),
    },
  });

  return (
    <FormBase form={form}>
      <TextInput label="Name" {...form.getInputProps('name')} />
      <TextInput label="Email" {...form.getInputProps('email')} />
      <Checkbox
        mt="md"
        label="Accept terms of use"
        {...form.getInputProps('terms', { type: 'checkbox' })}
      />
    </FormBase>
  );
}
