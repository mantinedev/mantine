import { useState } from 'react';
import { Button, Code, Group, Stack, Text } from '@mantine/core';
import { MaskedDateInput, MaskedDateInputProps, useMaskedDateInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Button, Code, Group, Stack, Text } from '@mantine/core';
import { MaskedDateInput, MaskedDateInputProps, useMaskedDateInput } from '@mantine/dates';
import { useForm } from '@mantine/form';

function DateField({
  value,
  defaultValue,
  onChange,
  withTime,
  withSeconds,
  format,
  amPmLabels,
  minDate,
  maxDate,
  pasteSplit,
  error,
  ...others
}: Omit<MaskedDateInputProps, 'controller'>) {
  const controller = useMaskedDateInput({
    value,
    defaultValue,
    onChange,
    withTime,
    withSeconds,
    format,
    amPmLabels,
    minDate,
    maxDate,
    pasteSplit,
  });
  const dateFieldsFilled =
    controller.getDay() !== null &&
    controller.getMonth() !== null &&
    (controller.getYear() ?? 0) >= 1000;
  const entryError = dateFieldsFilled
    ? 'Date is outside of the allowed range'
    : 'Finish entering the date';

  return (
    <MaskedDateInput
      controller={controller}
      error={error && controller.hasValue() ? entryError : error}
      {...others}
    />
  );
}

function Demo() {
  const [submitted, setSubmitted] = useState<string | null>(null);
  const form = useForm({
    initialValues: { birthday: null as string | null },
    validate: { birthday: (value) => (value ? null : 'Date of birth is required') },
  });

  return (
    <form onSubmit={form.onSubmit((values) => setSubmitted(values.birthday))}>
      <Stack>
        <DateField
          label="Date of birth"
          minDate="1924-01-01"
          maxDate="2024-12-31"
          withDropdown={false}
          {...form.getInputProps('birthday')}
        />

        <Text size="sm">
          Submitted value: <Code>{submitted ?? 'none'}</Code>
        </Text>

        <Group>
          <Button type="submit">Submit</Button>
          <Button variant="default" onClick={() => form.setFieldValue('birthday', '1990-06-15')}>
            Set 1990-06-15
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

function DateField({
  value,
  defaultValue,
  onChange,
  withTime,
  withSeconds,
  format,
  amPmLabels,
  minDate,
  maxDate,
  pasteSplit,
  error,
  ...others
}: Omit<MaskedDateInputProps, 'controller'>) {
  const controller = useMaskedDateInput({
    value,
    defaultValue,
    onChange,
    withTime,
    withSeconds,
    format,
    amPmLabels,
    minDate,
    maxDate,
    pasteSplit,
  });
  const dateFieldsFilled =
    controller.getDay() !== null &&
    controller.getMonth() !== null &&
    (controller.getYear() ?? 0) >= 1000;
  const entryError = dateFieldsFilled
    ? 'Date is outside of the allowed range'
    : 'Finish entering the date';

  return (
    <MaskedDateInput
      controller={controller}
      error={error && controller.hasValue() ? entryError : error}
      {...others}
    />
  );
}

function Demo() {
  const [submitted, setSubmitted] = useState<string | null>(null);
  const form = useForm({
    initialValues: { birthday: null as string | null },
    validate: { birthday: (value) => (value ? null : 'Date of birth is required') },
  });

  return (
    <form onSubmit={form.onSubmit((values) => setSubmitted(values.birthday))}>
      <Stack>
        <DateField
          label="Date of birth"
          minDate="1924-01-01"
          maxDate="2024-12-31"
          withDropdown={false}
          {...form.getInputProps('birthday')}
        />

        <Text size="sm">
          Submitted value: <Code>{submitted ?? 'none'}</Code>
        </Text>

        <Group>
          <Button type="submit">Submit</Button>
          <Button variant="default" onClick={() => form.setFieldValue('birthday', '1990-06-15')}>
            Set 1990-06-15
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
