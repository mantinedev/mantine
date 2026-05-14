/* oxlint-disable no-console */
import { Button, MaskInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, MaskInput } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { phone: '' },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <MaskInput
        mask="(999) 999-9999"
        placeholder="(___) ___-____"
        label="Phone"
        onChangeRaw={(raw) => form.setFieldValue('phone', raw)}
      />

      <Button type="submit" mt="md">
        Submit
      </Button>
    </form>
  );
}
`;

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { phone: '' },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <MaskInput
        mask="(999) 999-9999"
        placeholder="(___) ___-____"
        label="Phone"
        onChangeRaw={(raw) => form.setFieldValue('phone', raw)}
      />

      <Button type="submit" mt="md">
        Submit
      </Button>
    </form>
  );
}

export const withUseForm: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
