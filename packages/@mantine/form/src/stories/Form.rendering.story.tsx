import { Button, TextInput } from '@mantine/core';
import { useForm } from '../use-form';
import { FormBase } from './_base';

export default { title: 'Form' };

function Input(props: any) {
  console.log('render', props.name);
  return <input {...props} />;
}

// Rerenders every time, no idea how to fix
export function Rendering() {
  const form = useForm({ initialValues: { a: '', b: '', c: '' } });

  return (
    <FormBase form={form}>
      <Input {...form.getInputProps('a')} name="a" />
      <Input {...form.getInputProps('b')} name="b" />
      <Input {...form.getInputProps('c')} name="c" />
    </FormBase>
  );
}

export function UncontrolledResetField() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      foo: 'foo',
    },
  });

  return (
    <FormBase form={form}>
      <TextInput {...form.getInputProps('foo')} key={form.key('foo')} />
      <Button onClick={() => form.resetField('foo')}>Reset Field</Button>
      <Button onClick={() => form.setFieldValue('foo', 'foo')}>Set Field</Button>
    </FormBase>
  );
}
