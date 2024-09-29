import { useState } from 'react';
import { Button, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Button, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const [disabled, setDisabled] = useState(false);

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: '', email: '' },
    enhanceGetInputProps: () => ({ disabled }),
  });

  return (
    <form>
      <TextInput
        label="Your name"
        placeholder="Your name"
        {...form.getInputProps('name')}
        key={form.key('name')}
      />
      <TextInput
        label="Your email"
        placeholder="Your email"
        mt="md"
        {...form.getInputProps('email')}
        key={form.key('email')}
      />
      <Button mt="md" onClick={() => setDisabled((d) => !d)}>
        Toggle disabled
      </Button>
    </form>
  );
}
`;

function Demo() {
  const [disabled, setDisabled] = useState(false);

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: '', email: '' },
    enhanceGetInputProps: () => ({ disabled }),
  });

  return (
    <form>
      <TextInput
        label="Your name"
        placeholder="Your name"
        {...form.getInputProps('name')}
        key={form.key('name')}
      />
      <TextInput
        label="Your email"
        placeholder="Your email"
        mt="md"
        {...form.getInputProps('email')}
        key={form.key('email')}
      />
      <Button mt="md" onClick={() => setDisabled((d) => !d)}>
        Toggle disabled
      </Button>
    </form>
  );
}

export const EnhanceDisableInputs: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
