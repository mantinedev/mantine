import React from 'react';
import { useForm } from '@mantine/form';
import { MantineDemo } from '@mantine/ds';
import { TextInput, Text, Box } from '@mantine/core';

const code = `
import { useForm } from '@mantine/form';
import { TextInput, Text, Box } from '@mantine/core';

function Demo() {
  const form = useForm({ initialValues: { text: 'initial value' } });

  return (
    <Box maw={400} mx="auto">
      <TextInput
        {...form.getInputProps('text')}
        label="Touched/dirty demo"
        placeholder="Touched/dirty demo"
      />

      <Text size="sm" mt="sm">
        Touched:{' '}
        <Text span c={form.isTouched('text') ? 'blue' : 'red'}>
          {form.isTouched('text') ? 'touched' : 'not touched'}
        </Text>
      </Text>

      <Text size="sm">
        Dirty:{' '}
        <Text span c={form.isDirty('text') ? 'blue' : 'red'}>
          {form.isDirty('text') ? 'dirty' : 'not dirty'}
        </Text>
      </Text>
    </Box>
  );
}
`;

function Demo() {
  const form = useForm({ initialValues: { text: 'initial value' } });

  return (
    <Box maw={400} mx="auto">
      <TextInput
        {...form.getInputProps('text')}
        label="Touched/dirty demo"
        placeholder="Touched/dirty demo"
      />

      <Text size="sm" mt="sm">
        Touched:{' '}
        <Text span c={form.isTouched('text') ? 'blue' : 'red'}>
          {form.isTouched('text') ? 'touched' : 'not touched'}
        </Text>
      </Text>

      <Text size="sm">
        Dirty:{' '}
        <Text span c={form.isDirty('text') ? 'blue' : 'red'}>
          {form.isDirty('text') ? 'dirty' : 'not dirty'}
        </Text>
      </Text>
    </Box>
  );
}

export const status: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
