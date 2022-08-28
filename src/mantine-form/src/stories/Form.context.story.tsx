import { TextInput } from '@mantine/core';
import React from 'react';
import { useForm, createFormProvider } from '../index';

export default { title: 'Form' };

interface FormValues {
  a: number;
  b: string;
}

const [FormProvider, useFormContext] = createFormProvider<FormValues>();

function CustomField() {
  const form = useFormContext();
  return <TextInput {...form.getInputProps('b')} />;
}

export function Context() {
  const form = useForm<FormValues>({
    initialValues: {
      a: 0,
      b: '',
    },
  });

  return (
    <div style={{ padding: 40 }}>
      <FormProvider form={form}>
        <CustomField />
        {JSON.stringify(form.values)}
      </FormProvider>
    </div>
  );
}
