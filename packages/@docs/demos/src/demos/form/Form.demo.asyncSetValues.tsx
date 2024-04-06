/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { Checkbox, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Checkbox } from '@mantine/core';

interface FormValues {
  email: string;
  terms: boolean;
}

function loadInitialValues(): Promise<FormValues> {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ email: 'test@email', terms: true }), 2000);
  });
}

function Demo() {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: { email: '', terms: false },
  });

  useEffect(() => {
    loadInitialValues().then((values) => {
      form.setValues(values);
      form.resetDirty(values);
    });
  }, []);

  return (
    <form onSubmit={form.onSubmit(console.log)}>
      <TextInput label="Email" placeholder="Email" {...form.getInputProps('email')} />
      <Checkbox
        mt="sm"
        label="I accept terms and conditions"
        {...form.getInputProps('terms', { type: 'checkbox' })}
      />
    </form>
  );
}
`;

interface FormValues {
  email: string;
  terms: boolean;
}

function loadInitialValues(): Promise<FormValues> {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ email: 'test@email', terms: true }), 2000);
  });
}

function Demo() {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: { email: '', terms: false },
  });

  useEffect(() => {
    loadInitialValues().then((values) => {
      form.setValues(values);
      form.resetDirty(values);
    });
  }, []);

  return (
    <form onSubmit={form.onSubmit(console.log)}>
      <TextInput label="Email" placeholder="Email" {...form.getInputProps('email')} />
      <Checkbox
        mt="sm"
        label="I accept terms and conditions"
        {...form.getInputProps('terms', { type: 'checkbox' })}
      />
    </form>
  );
}

export const asyncSetValues: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
