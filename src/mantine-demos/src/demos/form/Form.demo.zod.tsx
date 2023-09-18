/* eslint-disable no-console */
import { MantineDemo } from '@mantine/ds';
import { SchemaBase } from './_schema-base';

const code = `
import { z } from 'zod';
import { useForm, zodResolver } from '@mantine/form';
import { NumberInput, TextInput, Button, Box, Group } from '@mantine/core';

const schema = z.object({
  name: z.string().min(2, { message: 'Name should have at least 2 letters' }),
  email: z.string().email({ message: 'Invalid email' }),
  age: z.number().min(18, { message: 'You must be at least 18 to create an account' }),
});

function Demo() {
  const form = useForm({
    validate: zodResolver(schema),
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

export const zod: MantineDemo = {
  type: 'code',
  component: SchemaBase,
  code,
};
