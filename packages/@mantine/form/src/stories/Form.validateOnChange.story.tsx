import React from 'react';
import { TextInput, Checkbox } from '@mantine/core';
import { FormBase } from './_base';
import { useForm } from '../use-form';
import { FORM_INDEX } from '../form-index';

export default { title: 'Form' };

export function ValidateOnChange() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      terms: false,
      array: [
        { item: '1', noValidate: '' },
        { item: '2', noValidate: '' },
      ],
    },
    validateInputOnChange: ['email', `array.${FORM_INDEX}.item`],
    validate: {
      name: (value) => (value.length < 6 ? 'Less than 6' : null),
      email: (value) => (value.length > 6 ? 'More than 6' : null),
      array: {
        item: (value) => (value === '1' ? 'Invalid 1' : null),
      },
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

      <TextInput label="Array 1" {...form.getInputProps('array.0.item')} />
      <TextInput label="Array 2" {...form.getInputProps('array.1.item')} />
    </FormBase>
  );
}
