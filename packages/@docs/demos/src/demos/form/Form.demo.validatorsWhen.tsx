import { Button, Checkbox, Group, TextInput } from '@mantine/core';
import { isNotEmpty, useForm, when } from '@mantine/form';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Checkbox, Group, TextInput } from '@mantine/core';
import { isNotEmpty, useForm, when } from '@mantine/form';

function Demo() {
  const form = useForm({
    initialValues: {
      isCompany: false,
      companyName: '',
    },

    validate: {
      companyName: when(
        (values) => values.isCompany,
        isNotEmpty('Company name is required')
      ),
    },
  });

  return (
    <form onSubmit={form.onSubmit(() => {})}>
      <Checkbox
        label="I am buying for a company"
        {...form.getInputProps('isCompany', { type: 'checkbox' })}
      />

      <TextInput
        label="Company name"
        placeholder="Company name"
        mt="md"
        {...form.getInputProps('companyName')}
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
      isCompany: false,
      companyName: '',
    },

    validate: {
      companyName: when((values) => values.isCompany, isNotEmpty('Company name is required')),
    },
  });

  return (
    <form onSubmit={form.onSubmit(() => {})}>
      <Checkbox
        label="I am buying for a company"
        {...form.getInputProps('isCompany', { type: 'checkbox' })}
      />

      <TextInput
        label="Company name"
        placeholder="Company name"
        mt="md"
        {...form.getInputProps('companyName')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export const validatorsWhen: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
