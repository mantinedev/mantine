import { useState } from 'react';
import { Button, Code, Group, Stack, Text } from '@mantine/core';
import { TimePicker, TimePickerProps, useTimePicker } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Button, Code, Group, Stack, Text } from '@mantine/core';
import { TimePicker, TimePickerProps, useTimePicker } from '@mantine/dates';
import { useForm } from '@mantine/form';

function TimeField({
  value,
  defaultValue,
  onChange,
  type,
  format,
  amPmLabels,
  withSeconds,
  min,
  max,
  pasteSplit,
  error,
  ...others
}: Omit<TimePickerProps, 'controller'>) {
  const controller = useTimePicker({
    value,
    defaultValue,
    onChange,
    type,
    format,
    amPmLabels,
    withSeconds,
    min,
    max,
    pasteSplit,
  });

  return (
    <TimePicker
      controller={controller}
      error={error && controller.hasValue() ? 'Finish entering the time' : error}
      {...others}
    />
  );
}

function Demo() {
  const [submitted, setSubmitted] = useState<string | null>(null);
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { time: '' },
    validate: { time: (value) => (value ? null : 'Time is required') },
  });

  return (
    <form onSubmit={form.onSubmit((values) => setSubmitted(values.time))}>
      <Stack>
        <TimeField label="Start time" key={form.key('time')} {...form.getInputProps('time')} />

        <Text size="sm">
          Submitted value: <Code>{submitted || 'none'}</Code>
        </Text>

        <Group>
          <Button type="submit">Submit</Button>
          <Button variant="default" onClick={() => form.setFieldValue('time', '09:30')}>
            Set 09:30
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

function TimeField({
  value,
  defaultValue,
  onChange,
  type,
  format,
  amPmLabels,
  withSeconds,
  min,
  max,
  pasteSplit,
  error,
  ...others
}: Omit<TimePickerProps, 'controller'>) {
  const controller = useTimePicker({
    value,
    defaultValue,
    onChange,
    type,
    format,
    amPmLabels,
    withSeconds,
    min,
    max,
    pasteSplit,
  });

  return (
    <TimePicker
      controller={controller}
      error={error && controller.hasValue() ? 'Finish entering the time' : error}
      {...others}
    />
  );
}

function Demo() {
  const [submitted, setSubmitted] = useState<string | null>(null);
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { time: '' },
    validate: { time: (value) => (value ? null : 'Time is required') },
  });

  return (
    <form onSubmit={form.onSubmit((values) => setSubmitted(values.time))}>
      <Stack>
        <TimeField label="Start time" key={form.key('time')} {...form.getInputProps('time')} />

        <Text size="sm">
          Submitted value: <Code>{submitted || 'none'}</Code>
        </Text>

        <Group>
          <Button type="submit">Submit</Button>
          <Button variant="default" onClick={() => form.setFieldValue('time', '09:30')}>
            Set 09:30
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
  code,
  component: Demo,
  maxWidth: 400,
  centered: true,
};
