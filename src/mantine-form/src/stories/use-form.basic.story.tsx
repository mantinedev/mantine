import React from 'react';
import { storiesOf } from '@storybook/react';
import { TextInput } from '@mantine/core';
import { FormStoryBase } from './FormStoryBase';
import { useForm } from '../index';

function BasicForm() {
  const form = useForm({
    initialValues: {
      email: '',
    },
  });

  return (
    <FormStoryBase form={form}>
      <TextInput
        value={form.values.email}
        onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
        label="Email"
        placeholder="email"
        required
      />
    </FormStoryBase>
  );
}

function GetInputProps() {
  const form = useForm({
    initialValues: {
      email: '',
    },
  });

  return (
    <FormStoryBase form={form}>
      <TextInput {...form.getInputProps('email')} label="Email" placeholder="email" required />
    </FormStoryBase>
  );
}

storiesOf('@mantine/form/basic', module)
  .add('Basic form', () => <BasicForm />)
  .add('Get input props', () => <GetInputProps />);
