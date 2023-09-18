import React, { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { MantineDemo } from '@mantine/ds';
import { TextInput, Checkbox, Box } from '@mantine/core';

const code = `
import { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Checkbox, Box } from '@mantine/core';

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
  const form = useForm<FormValues>({ initialValues: { email: '', terms: false } });

  useEffect(() => {
    loadInitialValues().then((values) => {
      form.setValues(values);
      form.resetDirty(values);
    });
  }, []);

  return (
    <Box maw={320} mx="auto">
      <TextInput label="Email" placeholder="Email" {...form.getInputProps('email')} />
      <Checkbox
        mt="sm"
        label="I accept terms and conditions"
        {...form.getInputProps('terms', { type: 'checkbox' })}
      />
    </Box>
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
  const form = useForm<FormValues>({ initialValues: { email: '', terms: false } });

  useEffect(() => {
    loadInitialValues().then((values) => {
      form.setValues(values);
      form.resetDirty(values);
    });
  }, []);

  return (
    <Box maw={340} mx="auto">
      <TextInput label="Email" placeholder="Email" {...form.getInputProps('email')} />
      <Checkbox
        mt="sm"
        label="I accept terms and conditions"
        {...form.getInputProps('terms', { type: 'checkbox' })}
      />
    </Box>
  );
}

export const asyncSetValues: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
