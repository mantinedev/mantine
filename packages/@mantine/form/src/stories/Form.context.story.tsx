import { TextInput } from '@mantine/core';
import { createFormContext } from '../index';

export default { title: 'Form' };

interface FormValues {
  a: number;
  b: string;
}

const [FormProvider, useFormContext, useForm] = createFormContext<FormValues>();

function CustomField() {
  const form = useFormContext();
  return <TextInput {...form.getInputProps('b')} />;
}

function ValuesPreview() {
  const form = useFormContext();
  const a = form.useWatchValue('a');
  const b = form.useWatchValue('b');
  return <div>{JSON.stringify({ a, b })}</div>;
}

export function Context() {
  const form = useForm({
    initialValues: {
      a: 0,
      b: '',
    },
  });

  return (
    <div style={{ padding: 40 }}>
      <FormProvider form={form}>
        <CustomField />
        <ValuesPreview />
      </FormProvider>
    </div>
  );
}
