import { act, renderHook } from '@testing-library/react';
import { FormMode } from '../../types';
import { useForm } from '../../use-form';

function getInputProps(mode: FormMode, input: Record<string, any>) {
  const { value, error, ...others } = input;
  const result = {
    ...others,
    [mode === 'controlled' ? 'value' : 'defaultValue']: value,
    error,
    onBlur: expect.any(Function),
    onChange: expect.any(Function),
    onFocus: expect.any(Function),
    'data-path': expect.any(String),
  };

  return result;
}

function tests(mode: FormMode) {
  it('allows overriding getInputProps properties', () => {
    const hook = renderHook(() =>
      useForm({
        mode,
        initialValues: { fruit: 'banana', vegetable: 'carrot' },
        enhanceGetInputProps: ({ field }) => {
          if (field === 'fruit') {
            return { test: 'apple' };
          }

          return {};
        },
      })
    );

    expect(hook.result.current.getInputProps('fruit')).toStrictEqual(
      getInputProps(mode, { value: 'banana', test: 'apple' })
    );

    expect(hook.result.current.getInputProps('vegetable')).toStrictEqual(
      getInputProps(mode, { value: 'carrot' })
    );
  });

  it('allows adding new properties to getInputProps', () => {
    const hook = renderHook(() =>
      useForm({
        mode,
        initialValues: { fruit: 'banana', vegetable: 'carrot' },
        enhanceGetInputProps: () => ({ readOnly: true }),
      })
    );

    expect(hook.result.current.getInputProps('fruit')).toStrictEqual(
      getInputProps(mode, { value: 'banana', readOnly: true })
    );

    expect(hook.result.current.getInputProps('vegetable')).toStrictEqual(
      getInputProps(mode, { value: 'carrot', readOnly: true })
    );
  });

  it('allows referencing form object in enhanceGetInputProps', () => {
    const hook = renderHook(() =>
      useForm({
        mode,
        initialValues: { fruit: 'banana', vegetable: 'carrot' },
        enhanceGetInputProps: ({ form }) => ({
          readOnly: !form.initialized,
        }),
      })
    );

    expect(hook.result.current.getInputProps('fruit')).toStrictEqual(
      getInputProps(mode, { value: 'banana', readOnly: true })
    );

    expect(hook.result.current.getInputProps('vegetable')).toStrictEqual(
      getInputProps(mode, { value: 'carrot', readOnly: true })
    );

    act(() => hook.result.current.initialize({ fruit: 'apple', vegetable: 'carrot' }));

    expect(hook.result.current.getInputProps('fruit')).toStrictEqual(
      getInputProps(mode, { value: 'apple', readOnly: false })
    );

    expect(hook.result.current.getInputProps('vegetable')).toStrictEqual(
      getInputProps(mode, { value: 'carrot', readOnly: false })
    );
  });

  it('allows referencing getInputProps options in enhanceGetInputProps', () => {
    const hook = renderHook(() =>
      useForm({
        mode,
        initialValues: { fruit: 'banana', vegetable: 'carrot' },
        enhanceGetInputProps: ({ options }) => ({
          readOnly: options.readOnly,
        }),
      })
    );

    expect(hook.result.current.getInputProps('fruit')).toStrictEqual(
      getInputProps(mode, { value: 'banana', readOnly: undefined })
    );

    expect(hook.result.current.getInputProps('vegetable', { readOnly: true })).toStrictEqual(
      getInputProps(mode, { value: 'carrot', readOnly: true })
    );
  });

  it('allows referencing inputProps in enhanceGetInputProps', () => {
    const hook = renderHook(() =>
      useForm({
        mode,
        initialValues: { fruit: 'banana', vegetable: 'carrot' },
        enhanceGetInputProps: ({ inputProps }) => ({
          readOnly:
            (inputProps as any)[mode === 'controlled' ? 'value' : 'defaultValue'] === 'banana',
        }),
      })
    );

    expect(hook.result.current.getInputProps('fruit')).toStrictEqual(
      getInputProps(mode, { value: 'banana', readOnly: true })
    );

    expect(hook.result.current.getInputProps('vegetable', { readOnly: true })).toStrictEqual(
      getInputProps(mode, { value: 'carrot', readOnly: false })
    );
  });
}

describe('@mantine/form/enhanceGetInputProps-controlled', () => {
  tests('controlled');
});

describe('@mantine/form/enhanceGetInputProps-uncontrolled', () => {
  tests('uncontrolled');
});
