/* eslint-disable no-console */
import React, { useState } from 'react';
import { Button, Checkbox, NativeSelect, Textarea, TextInput } from '@mantine/core';
import { useForm } from '../use-form';
import { FormBase } from './_base';

export default { title: 'Form' };

export function Usage() {
  const form = useForm({
    validateInputOnChange: true,
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

interface FormValues {
  name: string;
  terms: boolean;
  area: string;
  select: string;
}

export function Initialize() {
  const form = useForm<FormValues>({
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

      <Button
        onClick={() =>
          form.initialize({
            name: 'Mantine',
            terms: true,
            area: 'Some area',
            select: 'React',
          })
        }
      >
        Initialize
      </Button>
    </FormBase>
  );
}

export function ControlMode() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: 'initial', terms: false, area: 'test', select: 'Angular' },
    validate: {
      name: (value) => (value.length === 0 ? 'Required' : null),
    },
  });

  const [key, setKey] = useState('initial');

  console.log('render');

  return (
    <FormBase form={form}>
      <TextInput label="Name" key={key} {...form.getInputProps('name')} />
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

      <Button onClick={() => console.log(form.getValues())} mt="xl">
        Get form values
      </Button>
      <Button onClick={() => console.log(form.getTouched())} mt="xl">
        Get touched values
      </Button>
      <Button onClick={() => console.log(form.getDirty())} mt="xl">
        Get dirty values
      </Button>
      <Button
        onClick={() => {
          form.setFieldValue('name', 'updated');
          setKey(Math.random().toString());
        }}
        mt="xl"
      >
        Set name
      </Button>
    </FormBase>
  );
}
