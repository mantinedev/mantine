/* eslint-disable no-console */
import { Button, Text } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { useUncontrolled } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Text } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { useUncontrolled } from '@mantine/hooks';

interface CustomInputProps extends Omit<React.ComponentPropsWithoutRef<'input'>, 'onChange'> {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  error?: React.ReactNode;
}

function CustomInput({ value, defaultValue, onChange, error, ...others }: CustomInputProps) {
  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: '',
    onChange,
  });

  return (
    <div>
      <input value={_value} onChange={(event) => setValue(event.currentTarget.value)} {...others} />
      <Text c="red">{error}</Text>
    </div>
  );
}

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      customInput: '',
    },
    validate: {
      customInput: isNotEmpty('This field is required'),
    },
  });

  return (
    <form onSubmit={form.onSubmit(console.log)}>
      <CustomInput
        {...form.getInputProps('customInput')}
        key={form.key('customInput')}
        placeholder="Custom input"
      />

      <Button type="submit" mt="md">
        Submit
      </Button>
    </form>
  );
}
`;

interface CustomInputProps extends Omit<React.ComponentPropsWithoutRef<'input'>, 'onChange'> {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  error?: React.ReactNode;
}

function CustomInput({ value, defaultValue, onChange, error, ...others }: CustomInputProps) {
  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: '',
    onChange,
  });

  return (
    <div>
      <input value={_value} onChange={(event) => setValue(event.currentTarget.value)} {...others} />
      <Text c="red">{error}</Text>
    </div>
  );
}

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      customInput: '',
    },
    validate: {
      customInput: isNotEmpty('This field is required'),
    },
  });

  return (
    <form onSubmit={form.onSubmit(console.log)}>
      <CustomInput
        {...form.getInputProps('customInput')}
        key={form.key('customInput')}
        placeholder="Custom input"
      />

      <Button type="submit" mt="md">
        Submit
      </Button>
    </form>
  );
}

export const CustomInputUseFormDemo: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
