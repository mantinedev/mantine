/* eslint-disable no-console */
import React from 'react';
import { FormBase } from './_base';
import { useForm } from '../use-form';

export default { title: 'Form' };

function Input(props: any) {
  console.log('render', props.name);
  return <input {...props} />;
}

// Rerenders every time, no idea how to fix
export function Rendering() {
  const form = useForm({ initialValues: { a: '', b: '', c: '' } });

  return (
    <FormBase form={form}>
      <Input {...form.getInputProps('a')} name="a" />
      <Input {...form.getInputProps('b')} name="b" />
      <Input {...form.getInputProps('c')} name="c" />
    </FormBase>
  );
}
