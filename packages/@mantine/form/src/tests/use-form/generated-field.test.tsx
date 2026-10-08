import { act } from '@testing-library/react';
import { TextInput } from '@mantine/core';
import { render, screen, userEvent } from '@mantine-tests/core';
import { FormMode, UseFormReturnType } from '../../types';
import { useForm } from '../../use-form';

interface Values {
  name: string;
  key: string;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

function Form({
  mode,
  onRender,
  formRef,
}: {
  mode: FormMode;
  onRender: () => void;
  formRef: { current: UseFormReturnType<Values> | null };
}) {
  const form = useForm<Values>({
    mode,
    touchTrigger: 'focus',
    initialValues: { name: '', key: '' },
  });

  formRef.current = form;
  onRender();

  form.watch('name', ({ value }) => {
    if (!form.isTouched('key')) {
      form.setFieldValue('key', slugify(value), { forceUpdate: false });
    }
  });

  return (
    <>
      <TextInput aria-label="name" {...form.getInputProps('name')} />
      <TextInput aria-label="key" {...form.getInputProps('key')} />
    </>
  );
}

function setup(mode: FormMode) {
  const onRender = jest.fn();
  const formRef = { current: null as UseFormReturnType<Values> | null };
  render(<Form mode={mode} onRender={onRender} formRef={formRef} />);
  return {
    onRender,
    form: () => formRef.current!,
    name: () => screen.getByLabelText('name') as HTMLInputElement,
    key: () => screen.getByLabelText('key') as HTMLInputElement,
  };
}

describe.each<FormMode>(['uncontrolled', 'controlled'])('generated field (%s)', (mode) => {
  it('generates key from name until the key input is focused', async () => {
    const { name, key, form } = setup(mode);

    await userEvent.type(name(), 'Hello World! Mantine 10');
    expect(key().value).toBe('hello-world-mantine-10');
    expect(form().getValues()).toStrictEqual({
      name: 'Hello World! Mantine 10',
      key: 'hello-world-mantine-10',
    });

    await userEvent.type(key(), '-custom');
    expect(form().isTouched('key')).toBe(true);

    await userEvent.type(name(), ' Extra');
    expect(key().value).toBe('hello-world-mantine-10-custom');
    expect(form().getValues().key).toBe('hello-world-mantine-10-custom');
  });

  it('generates key for programmatic name changes and resumes after reset', async () => {
    const { name, key, form } = setup(mode);

    await userEvent.type(key(), 'manual');
    act(() => form().setFieldValue('name', 'Set From Code'));
    expect(key().value).toBe('manual');

    act(() => form().reset());
    expect(key().value).toBe('');
    expect(form().isTouched('key')).toBe(false);

    act(() => form().setFieldValue('name', 'After Reset'));
    expect(name().value).toBe('After Reset');
    expect(key().value).toBe('after-reset');
  });
});

it('generated field: uncontrolled mode does not rerender the form while typing', async () => {
  const { name, key, onRender } = setup('uncontrolled');
  const rendersAfterMount = onRender.mock.calls.length;

  await userEvent.type(name(), 'Hello World');
  expect(key().value).toBe('hello-world');
  expect(onRender).toHaveBeenCalledTimes(rendersAfterMount);
});
