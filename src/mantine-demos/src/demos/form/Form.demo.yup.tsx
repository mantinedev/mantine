/* eslint-disable no-console */
import { MantineDemo } from '@mantine/ds';
import { SchemaBase } from './_schema-base';

const code = `
import * as Yup from 'yup';
import { useForm, yupResolver } from '@mantine/form';
import { NumberInput, TextInput, Button, Box, Group } from '@mantine/core';

const schema = Yup.object().shape({
  name: Yup.string().min(2, 'Name should have at least 2 letters'),
  email: Yup.string().email('Invalid email'),
  age: Yup.number().min(18, 'You must be at least 18 to create an account'),
});

function Demo() {
  const form = useForm({
    validate: yupResolver(schema),
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

export const yup: MantineDemo = {
  type: 'code',
  component: SchemaBase,
  code,
};
