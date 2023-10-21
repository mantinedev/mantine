/* eslint-disable no-console */
import { MantineDemo } from '@mantine/ds';
import { SchemaBase } from './_schema-base';

const code = `
import { Box, Button, Group, NumberInput, TextInput } from '@mantine/core';
import { useForm, valibotResolver } from '@mantine/form';
import { Input, minLength, object, string } from 'valibot';

const schema = object({
  username: string('Username is required', [
    minLength(8, 'Username must have at least 8 characters'),
  ]),
  password: string('Password is required', [
    minLength(8, 'Password must have at least 8 characters'),
  ]),
});

export type FormData = Input<typeof schema>;

function Demo() {
  const form = useForm({
    validate: valibotResolver(schema),
    initialValues: {
      name: '',
      email: '',
      age: 18,
    },
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

export const valibot: MantineDemo = {
  type: 'code',
  component: SchemaBase,
  code,
};
