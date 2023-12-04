import React from 'react';
import { TextInput, Checkbox } from '@mantine/core';
import { FormBase } from './_base';
import { useForm } from '../use-form';

export default { title: 'Form' };

export function NestedObject() {
  const form = useForm({
    initialValues: {
      user: { name: '' },
      terms: false,
      users: [
        {
          name: 'Dan Abramov',
          key: 'randomId()',
          tags: [{ tag: 'React', key: 'randomId()' }],
        },
      ],
    },
    validate: {
      user: {
        name: (value) => (value.length === 0 ? 'Required' : null),
      },

      users: {
        tags: {
          tag: (value, _values) => (_values ? 'Required' : null),
        },
      },
    },
  });

  return (
    <FormBase form={form}>
      <TextInput label="Name" {...form.getInputProps('user.name')} />
      <Checkbox
        mt="md"
        label="Accept terms of use"
        {...form.getInputProps('terms', { type: 'checkbox' })}
      />
    </FormBase>
  );
}
