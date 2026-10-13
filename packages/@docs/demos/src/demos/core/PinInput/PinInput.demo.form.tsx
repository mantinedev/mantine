import { useState } from 'react';
import {
  Button,
  Code,
  Group,
  Input,
  PinInput,
  PinInputProps,
  Stack,
  Text,
  usePinInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import {
  Button,
  Code,
  Group,
  Input,
  PinInput,
  PinInputProps,
  Stack,
  Text,
  usePinInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';

function PinField({
  value,
  defaultValue,
  onChange,
  onComplete,
  length,
  error,
  ...others
}: Omit<PinInputProps, 'controller' | 'error'> & { error?: React.ReactNode }) {
  const controller = usePinInput({ value, defaultValue, onChange, onComplete, length });

  const handleClear = () => {
    controller.clear();
    controller.focus(0);
  };

  return (
    <Stack gap="xs">
      <Group>
        <PinInput controller={controller} error={!!error} {...others} />
        <Button variant="default" onClick={handleClear} disabled={!controller.getValue()}>
          Clear
        </Button>
      </Group>
      {error && <Input.Error>{error}</Input.Error>}
    </Stack>
  );
}

function Demo() {
  const [submitted, setSubmitted] = useState<string | null>(null);
  const form = useForm({
    initialValues: { code: '' },
    validate: { code: (value) => (value.length === 6 ? null : 'Enter all 6 digits') },
  });

  return (
    <form onSubmit={form.onSubmit((values) => setSubmitted(values.code))}>
      <Stack>
        <PinField length={6} type="number" {...form.getInputProps('code')} />

        <Text size="sm">
          Submitted code: <Code>{submitted ?? 'none'}</Code>
        </Text>

        <Group>
          <Button type="submit">Submit</Button>
          <Button variant="default" onClick={() => form.setFieldValue('code', '123456')}>
            Set 123456
          </Button>
          <Button variant="default" onClick={form.reset}>
            Reset
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
`;

function PinField({
  value,
  defaultValue,
  onChange,
  onComplete,
  length,
  error,
  ...others
}: Omit<PinInputProps, 'controller' | 'error'> & { error?: React.ReactNode }) {
  const controller = usePinInput({ value, defaultValue, onChange, onComplete, length });

  const handleClear = () => {
    controller.clear();
    controller.focus(0);
  };

  return (
    <Stack gap="xs">
      <Group>
        <PinInput controller={controller} error={!!error} {...others} />
        <Button variant="default" onClick={handleClear} disabled={!controller.getValue()}>
          Clear
        </Button>
      </Group>
      {error && <Input.Error>{error}</Input.Error>}
    </Stack>
  );
}

function Demo() {
  const [submitted, setSubmitted] = useState<string | null>(null);
  const form = useForm({
    initialValues: { code: '' },
    validate: { code: (value) => (value.length === 6 ? null : 'Enter all 6 digits') },
  });

  return (
    <form onSubmit={form.onSubmit((values) => setSubmitted(values.code))}>
      <Stack>
        <PinField length={6} type="number" {...form.getInputProps('code')} />

        <Text size="sm">
          Submitted code: <Code>{submitted ?? 'none'}</Code>
        </Text>

        <Group>
          <Button type="submit">Submit</Button>
          <Button variant="default" onClick={() => form.setFieldValue('code', '123456')}>
            Set 123456
          </Button>
          <Button variant="default" onClick={form.reset}>
            Reset
          </Button>
        </Group>
      </Stack>
    </form>
  );
}

export const form: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
