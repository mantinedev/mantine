import React from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Text } from '@mantine/core';

const code = `
import { useForm } from '@mantine/form';
import { TextInput, Text } from '@mantine/core';

function Demo() {
  const form = useForm({ initialValues: { text: 'initial value' } });

  return (
    <>
      <TextInput
        {...form.getInputProps('text')}
        label="Touched/dirty demo"
        placeholder="Touched/dirty demo"
      />

      <Text size="sm" mt="sm">
        Touched:{' '}
        <Text span color={form.isTouched('text') ? 'blue' : 'red'}>
          {form.isTouched('text') ? 'touched' : 'not touched'}
        </Text>
      </Text>

      <Text size="sm">
        Dirty:{' '}
        <Text span color={form.isDirty('text') ? 'blue' : 'red'}>
          {form.isDirty('text') ? 'dirty' : 'not dirty'}
        </Text>
      </Text>
    </>
  );
}
`;

function Demo() {
  const form = useForm({ initialValues: { text: 'initial value' } });

  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <TextInput
        {...form.getInputProps('text')}
        label="Touched/dirty demo"
        placeholder="Touched/dirty demo"
      />

      <Text size="sm" mt="sm">
        Touched:{' '}
        <Text span color={form.isTouched('text') ? 'blue' : 'red'}>
          {form.isTouched('text') ? 'touched' : 'not touched'}
        </Text>
      </Text>

      <Text size="sm">
        Dirty:{' '}
        <Text span color={form.isDirty('text') ? 'blue' : 'red'}>
          {form.isDirty('text') ? 'dirty' : 'not dirty'}
        </Text>
      </Text>
    </div>
  );
}

export const status: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
