import { Button, Group, NativeSelect, NumberInput, TextInput } from '@mantine/core';
import {
  hasLength,
  isEmail,
  isInRange,
  isNotEmpty,
  isOneOf,
  isUrl,
  matches,
  useForm,
} from '@mantine/form';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches, isUrl, isOneOf } from '@mantine/form';
import { Button, Group, TextInput, NumberInput, NativeSelect } from '@mantine/core';

function Demo() {
  const form = useForm({
    initialValues: {
      name: '',
      job: '',
      email: '',
      favoriteColor: '',
      age: 18,
      website: '',
      role: '',
    },

    validate: {
      name: hasLength({ min: 2, max: 10 }, 'Name must be 2-10 characters long'),
      job: isNotEmpty('Enter your current job'),
      email: isEmail('Invalid email'),
      favoriteColor: matches(/^#([0-9a-f]{3}){1,2}$/, 'Enter a valid hex color'),
      age: isInRange({ min: 18, max: 99 }, 'You must be 18-99 years old to register'),
      website: isUrl('Invalid URL'),
      role: isOneOf(['developer', 'designer', 'manager'], 'Pick a valid role'),
    },
  });

  return (
    <form onSubmit={form.onSubmit(() => {})}>
      <TextInput
        label="Name"
        placeholder="Name"
        withAsterisk
        {...form.getInputProps('name')}
      />
      <TextInput
        label="Your job"
        placeholder="Your job"
        withAsterisk
        mt="md"
        {...form.getInputProps('job')}
      />
      <TextInput
        label="Your email"
        placeholder="Your email"
        withAsterisk
        mt="md"
        {...form.getInputProps('email')}
      />
      <TextInput
        label="Your favorite color"
        placeholder="Your favorite color"
        withAsterisk
        mt="md"
        {...form.getInputProps('favoriteColor')}
      />
      <NumberInput
        label="Your age"
        placeholder="Your age"
        withAsterisk
        mt="md"
        {...form.getInputProps('age')}
      />
      <TextInput
        label="Your website"
        placeholder="https://example.com"
        withAsterisk
        mt="md"
        {...form.getInputProps('website')}
      />
      <NativeSelect
        label="Your role"
        data={['', 'developer', 'designer', 'manager']}
        withAsterisk
        mt="md"
        {...form.getInputProps('role')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`;

function Demo() {
  const form = useForm({
    initialValues: {
      name: '',
      job: '',
      email: '',
      favoriteColor: '',
      age: 18,
      website: '',
      role: '',
    },

    validate: {
      name: hasLength({ min: 2, max: 10 }, 'Name must be 2-10 characters long'),
      job: isNotEmpty('Enter your current job'),
      email: isEmail('Invalid email'),
      favoriteColor: matches(/^#([0-9a-f]{3}){1,2}$/, 'Enter a valid hex color'),
      age: isInRange({ min: 18, max: 99 }, 'You must be 18-99 years old to register'),
      website: isUrl('Invalid URL'),
      role: isOneOf(['developer', 'designer', 'manager'], 'Pick a valid role'),
    },
  });

  return (
    <form onSubmit={form.onSubmit(() => {})}>
      <TextInput label="Name" placeholder="Name" withAsterisk {...form.getInputProps('name')} />
      <TextInput
        label="Your job"
        placeholder="Your job"
        withAsterisk
        mt="md"
        {...form.getInputProps('job')}
      />
      <TextInput
        label="Your email"
        placeholder="Your email"
        withAsterisk
        mt="md"
        {...form.getInputProps('email')}
      />
      <TextInput
        label="Your favorite color"
        placeholder="Your favorite color"
        withAsterisk
        mt="md"
        {...form.getInputProps('favoriteColor')}
      />
      <NumberInput
        label="Your age"
        placeholder="Your age"
        withAsterisk
        mt="md"
        {...form.getInputProps('age')}
      />
      <TextInput
        label="Your website"
        placeholder="https://example.com"
        withAsterisk
        mt="md"
        {...form.getInputProps('website')}
      />
      <NativeSelect
        label="Your role"
        data={['', 'developer', 'designer', 'manager']}
        withAsterisk
        mt="md"
        {...form.getInputProps('role')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export const validators: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
