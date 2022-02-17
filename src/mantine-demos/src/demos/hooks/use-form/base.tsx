/* eslint-disable no-console */
import React from 'react';
import { TextInput, Group, Button, Checkbox } from '@mantine/core';
import { useForm } from '@mantine/hooks';

const code = `
import { TextInput, Checkbox, Button } from '@mantine/core';
import { useForm } from '@mantine/hooks';

function Demo() {
  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validationRules: {
      email: (value) => /^\\S+@\\S+$/.test(value),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput
        required
        label="Email"
        placeholder="your@email.com"
        {...form.getInputProps('email')}
      />

      <Checkbox
        mt="md"
        label="I agree to sell my privacy to this corporation"
        {...form.getInputProps('termsOfService', { type: 'checkbox' })}
      />

      <Button type="submit">Submit</Button>
    </form>
  );
}
`;

function Demo() {
  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validationRules: {
      email: (value) => /^\S+@\S+$/.test(value),
    },
  });

  return (
    <div style={{ maxWidth: 360, margin: 'auto' }}>
      <form onSubmit={form.onSubmit(console.log)}>
        <TextInput
          required
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />

        <Checkbox
          mt="md"
          label="I agree to sell my privacy to this corporation"
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </div>
  );
}

export const useFormBase: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
