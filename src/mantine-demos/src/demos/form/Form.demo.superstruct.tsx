/* eslint-disable no-console */
import { MantineDemo } from '@mantine/ds';
import { SchemaBase } from './_schema-base';

const code = `
import { useForm, superstructResolver } from '@mantine/form';
import { NumberInput, TextInput, Button, Box, Group } from '@mantine/core';
import * as s from 'superstruct';
import isEmail from 'is-email';

const emailString = s.define('email', isEmail);
const schema = s.object({
  name: s.size(s.string(), 2, 30),
  email: emailString,
  age: s.min(s.number(), 18)
});

function Demo() {
  const form = useForm({
    validate: superstructResolver(schema),
    initialValues: {
      name: '',
      email: '',
      age: 18
    }
  });

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="example@mail.com"
          {...form.getInputProps('email')}
        />
        <TextInput
          withAsterisk
          label="Name"
          placeholder="John Doe"
          mt="sm"
          {...form.getInputProps('name')}
        />
        <NumberInput
          withAsterisk
          label="Age"
          placeholder="Your age"
          mt="sm"
          {...form.getInputProps('age')}
        />

        <Group justify="flex-end" mt="xl">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
`;

export const superstruct: MantineDemo = {
  type: 'code',
  component: SchemaBase,
  code,
};
