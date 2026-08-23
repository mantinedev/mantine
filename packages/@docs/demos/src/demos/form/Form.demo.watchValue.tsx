import { Checkbox, Collapse, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Checkbox, Collapse, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      shipsInternationally: false,
      country: '',
    },
  });

  const shipsInternationally = form.useWatchValue('shipsInternationally');

  return (
    <Stack>
      <TextInput
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <Checkbox
        label="Ships internationally"
        key={form.key('shipsInternationally')}
        {...form.getInputProps('shipsInternationally', { type: 'checkbox' })}
      />

      <Collapse expanded={shipsInternationally}>
        <TextInput
          label="Country"
          placeholder="Country"
          key={form.key('country')}
          {...form.getInputProps('country')}
        />
      </Collapse>
    </Stack>
  );
}
`;

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      shipsInternationally: false,
      country: '',
    },
  });

  const shipsInternationally = form.useWatchValue('shipsInternationally');

  return (
    <Stack>
      <TextInput
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <Checkbox
        label="Ships internationally"
        key={form.key('shipsInternationally')}
        {...form.getInputProps('shipsInternationally', { type: 'checkbox' })}
      />

      <Collapse expanded={shipsInternationally}>
        <TextInput
          label="Country"
          placeholder="Country"
          key={form.key('country')}
          {...form.getInputProps('country')}
        />
      </Collapse>
    </Stack>
  );
}

export const watchValue: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
