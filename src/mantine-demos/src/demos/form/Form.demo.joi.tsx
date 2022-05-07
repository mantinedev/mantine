/* eslint-disable no-console */
import { SchemaBase } from './_schema-base';

const code = `
import Joi from 'joi';
import { useForm, joiResolver } from '@mantine/form';
import { NumberInput, TextInput, Button, Box, Group } from '@mantine/core';

const schema = Joi.object({
  name: Joi.string().min(2).message('Name should have at least 2 letters'),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .message('Invalid email'),
  age: Joi.number().min(18).message('You must be at least 18 to create an account'),
});

function Demo() {
  const form = useForm({
    schema: joiResolver(schema),
    initialValues: {
      name: '',
      email: '',
      age: 18,
    },
  });

  return (
    <Box sx={{ maxWidth: 340 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          required
          label="Email"
          placeholder="example@mail.com"
          {...form.getInputProps('email')}
        />
        <TextInput
          required
          label="Name"
          placeholder="John Doe"
          mt="sm"
          {...form.getInputProps('name')}
        />
        <NumberInput
          required
          label="Age"
          placeholder="Your age"
          mt="sm"
          {...form.getInputProps('age')}
        />

        <Group position="right" mt="xl">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
`;

export const joi: MantineDemo = {
  type: 'demo',
  component: SchemaBase,
  code,
};
