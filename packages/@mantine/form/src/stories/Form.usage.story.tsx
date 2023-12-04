import React from 'react';
import { TextInput, Textarea, Checkbox, NativeSelect } from '@mantine/core';
import { FormBase } from './_base';
import { useForm } from '../use-form';

export default { title: 'Form' };

export function Usage() {
  const form = useForm({
    initialValues: { name: '', terms: false, area: '', select: '' },
    validate: {
      name: (value) => (value.length === 0 ? 'Required' : null),
    },
  });

  return (
    <FormBase form={form}>
      <TextInput label="Name" {...form.getInputProps('name')} />
      <Checkbox
        mt="md"
        label="Accept terms of use"
        {...form.getInputProps('terms', { type: 'checkbox' })}
      />
      <Textarea label="area" {...form.getInputProps('area')} />
      <NativeSelect
        label="native select"
        data={['React', 'Angular']}
        {...form.getInputProps('select')}
      />
    </FormBase>
  );
}
