import React from 'react';
import { TextInput, Checkbox } from '@mantine/core';
import { FormBase } from './_base';
import { useForm } from '../use-form2';

export default { title: 'Form' };

export function Usage() {
  const form = useForm({ initialValues: { name: '', terms: false } });

  return (
    <FormBase form={form}>
      <TextInput label="Name" {...form.getInputProps('name')} />
      <Checkbox
        mt="md"
        label="Accept terms of use"
        {...form.getInputProps('terms', { type: 'checkbox' })}
      />
    </FormBase>
  );
}
