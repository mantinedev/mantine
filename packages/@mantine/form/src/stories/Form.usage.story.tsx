/* eslint-disable no-console */

import { useState } from 'react';
import { Button, Checkbox, Group, NativeSelect, Select, Textarea, TextInput } from '@mantine/core';
import { useForm } from '../use-form';
import { FormBase } from './_base';

export default { title: 'Form' };

export function Usage() {
  const [counter, setCounter] = useState(0);
  const form = useForm({
    mode: 'uncontrolled',
    validateInputOnChange: true,
    initialValues: { name: '', terms: false, area: '', select: '', nested: { field: 'test' } },
    validate: {
      name: (value) => (value.length === 0 ? 'Required' : null),
    },
  });

  form.watch('name', (value) => {
    setCounter((c) => c + 1);
    console.log('name', value, { counter });
  });

  form.watch('area', (value) => {
    console.log('area', value, { counter });
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

      <Button onClick={() => form.setValues({ name: 'test' })}>Set values</Button>
    </FormBase>
  );
}

export function ErrorOnSubmit() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: 'a@a',
    },
    validate: {
      email: (value) => (value.includes('@') ? null : 'Invalid email'),
    },
  });

  return (
    <form
      onSubmit={form.onSubmit(() => {
        form.setFieldError('email', 'Server error');
      })}
    >
      <TextInput label="Email" {...form.getInputProps('email')} />

      <Button type="submit">Submit</Button>
    </form>
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

  console.log('render');

  return (
    <FormBase form={form}>
      <Select
        label="select"
        defaultDropdownOpened
        data={['React', 'Angular']}
        key={form.key('select')}
        {...form.getInputProps('select')}
      />

      <TextInput label="Name" key={form.key('name')} {...form.getInputProps('name')} />
      <Checkbox
        mt="md"
        label="Accept terms of use"
        key={form.key('terms')}
        {...form.getInputProps('terms', { type: 'checkbox' })}
      />
      <Textarea label="area" key={form.key('area')} {...form.getInputProps('area')} />
      <Group mt="xl">
        <Button onClick={() => form.setFieldValue('name', 'test-name')}>Set name</Button>
        <Button
          onClick={() =>
            form.setValues({ name: 'updated', terms: true, area: 'updated', select: 'React' })
          }
        >
          Set form values
        </Button>
        <Button
          onClick={() =>
            form.initialize({ name: 'updated', terms: true, area: 'updated', select: 'React' })
          }
        >
          Initialize
        </Button>
      </Group>
    </FormBase>
  );
}

export function FocusOnError() {
  const [counter, setCounter] = useState(0);

  const form = useForm({
    mode: 'uncontrolled',
    validateInputOnChange: true,
    initialValues: { name: '', terms: false, area: '', select: '', nested: { field: 'test' } },
    validate: {
      name: (value) => (value.length === 0 ? 'Required' : null),
      area: (value) => (value.length === 0 ? 'Required' : null),
    },
  });

  form.watch('name', (value) => {
    setCounter((c) => c + 1);
    console.log('name', value, { counter });
  });

  form.watch('area', (value) => {
    console.log('area', value, { counter });
  });

  return (
    <form
      onSubmit={form.onSubmit(
        () => {},
        (errors) => {
          form.getInputNode(Object.keys(errors)[0])?.focus();
        }
      )}
    >
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

      <Button onClick={() => form.setValues({ name: 'test' })}>Set values</Button>
      <Button type="submit">Submit</Button>
    </form>
  );
}
