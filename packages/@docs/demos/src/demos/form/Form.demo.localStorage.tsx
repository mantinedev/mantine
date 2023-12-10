import React, { useEffect } from 'react';
import { Box, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Box } from '@mantine/core';

function Demo() {
  const form = useForm({ initialValues: { name: '', occupation: '' } });

  useEffect(() => {
    const storedValue = window.localStorage.getItem('user-form');
    if (storedValue) {
      try {
        form.setValues(JSON.parse(window.localStorage.getItem('user-form')!));
      } catch (e) {
        console.log('Failed to parse stored value');
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('user-form', JSON.stringify(form.values));
  }, [form.values]);

  return (
    <Box maw={340} mx="auto">
      <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
      <TextInput
        mt="md"
        label="Occupation"
        placeholder="Occupation"
        {...form.getInputProps('occupation')}
      />
    </Box>
  );
}
`;

function Demo() {
  const form = useForm({ initialValues: { name: '', occupation: '' } });

  useEffect(() => {
    const storedValue = window.localStorage.getItem('user-form');
    if (storedValue) {
      try {
        form.setValues(JSON.parse(window.localStorage.getItem('user-form')!));
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log('Failed to parse stored value');
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('user-form', JSON.stringify(form.values));
  }, [form.values]);

  return (
    <Box maw={340} mx="auto">
      <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
      <TextInput
        mt="md"
        label="Occupation"
        placeholder="Occupation"
        {...form.getInputProps('occupation')}
      />
    </Box>
  );
}

export const localStorage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
