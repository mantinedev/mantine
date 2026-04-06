/* oxlint-disable no-console */

import { Button, Group, Radio, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Group, Radio, Text } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      color: 'red',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Text fw={500} size="sm">
        Pick your favorite color
      </Text>

      <Group mt={5}>
        <Radio
          label="Red"
          name="color"
          {...form.getInputProps('color', { type: 'radio', value: 'red' })}
        />
        <Radio
          label="Blue"
          name="color"
          {...form.getInputProps('color', { type: 'radio', value: 'blue' })}
        />
        <Radio
          label="Green"
          name="color"
          {...form.getInputProps('color', { type: 'radio', value: 'green' })}
        />
      </Group>
      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`;

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      color: 'red',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Text fw={500} size="sm">
        Pick your favorite color
      </Text>

      <Group mt={5}>
        <Radio
          label="Red"
          name="color"
          {...form.getInputProps('color', { type: 'radio', value: 'red' })}
        />
        <Radio
          label="Blue"
          name="color"
          {...form.getInputProps('color', { type: 'radio', value: 'blue' })}
        />
        <Radio
          label="Green"
          name="color"
          {...form.getInputProps('color', { type: 'radio', value: 'green' })}
        />
      </Group>
      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export const radioGetInputProps: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
