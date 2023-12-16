import { act, renderHook } from '@testing-library/react';
import { useForm } from '../use-form';

describe('@mantine/form/enhanceGetInputProps', () => {
  it('allows overriding getInputProps properties', () => {
    const hook = renderHook(() =>
      useForm({
        initialValues: { fruit: 'banana', vegetable: 'carrot' },
        enhanceGetInputProps: (field) => {
          if (field === 'fruit') {
            return { value: 'apple' };
          }

          return {};
        },
      })
    );

    expect(hook.result.current.getInputProps('fruit')).toStrictEqual({
      value: 'apple',
      error: undefined,
      onBlur: expect.any(Function),
      onChange: expect.any(Function),
      onFocus: expect.any(Function),
    });

    expect(hook.result.current.getInputProps('vegetable')).toStrictEqual({
      value: 'carrot',
      error: undefined,
      onBlur: expect.any(Function),
      onChange: expect.any(Function),
      onFocus: expect.any(Function),
    });
  });

  it('allows adding new properties to getInputProps', () => {
    const hook = renderHook(() =>
      useForm({
        initialValues: { fruit: 'banana', vegetable: 'carrot' },
        enhanceGetInputProps: () => ({ readOnly: true }),
      })
    );

    expect(hook.result.current.getInputProps('fruit')).toStrictEqual({
      value: 'banana',
      error: undefined,
      readOnly: true,
      onBlur: expect.any(Function),
      onChange: expect.any(Function),
      onFocus: expect.any(Function),
    });

    expect(hook.result.current.getInputProps('vegetable')).toStrictEqual({
      value: 'carrot',
      error: undefined,
      readOnly: true,
      onBlur: expect.any(Function),
      onChange: expect.any(Function),
      onFocus: expect.any(Function),
    });
  });

  it('allows referencing form object in enhanceGetInputProps', () => {
    const hook = renderHook(() =>
      useForm({
        initialValues: { fruit: 'banana', vegetable: 'carrot' },
        enhanceGetInputProps: (_field, _options, form) => ({
          readOnly: !form.initialized,
        }),
      })
    );

    expect(hook.result.current.getInputProps('fruit')).toStrictEqual({
      value: 'banana',
      error: undefined,
      readOnly: true,
      onBlur: expect.any(Function),
      onChange: expect.any(Function),
      onFocus: expect.any(Function),
    });

    expect(hook.result.current.getInputProps('vegetable')).toStrictEqual({
      value: 'carrot',
      error: undefined,
      readOnly: true,
      onBlur: expect.any(Function),
      onChange: expect.any(Function),
      onFocus: expect.any(Function),
    });

    act(() => {
      hook.result.current.initialize({
        fruit: 'apple',
        vegetable: 'carrot',
      });
    });

    expect(hook.result.current.getInputProps('fruit')).toStrictEqual({
      value: 'apple',
      error: undefined,
      readOnly: false,
      onBlur: expect.any(Function),
      onChange: expect.any(Function),
      onFocus: expect.any(Function),
    });

    expect(hook.result.current.getInputProps('vegetable')).toStrictEqual({
      value: 'carrot',
      error: undefined,
      readOnly: false,
      onBlur: expect.any(Function),
      onChange: expect.any(Function),
      onFocus: expect.any(Function),
    });
  });

  it('allows referencing getInputProps options in enhanceGetInputProps', () => {
    const hook = renderHook(() =>
      useForm({
        initialValues: { fruit: 'banana', vegetable: 'carrot' },
        enhanceGetInputProps: (_field, options) => ({
          readOnly: options.readOnly,
        }),
      })
    );

    expect(hook.result.current.getInputProps('fruit')).toStrictEqual({
      value: 'banana',
      error: undefined,
      readOnly: undefined,
      onBlur: expect.any(Function),
      onChange: expect.any(Function),
      onFocus: expect.any(Function),
    });

    expect(hook.result.current.getInputProps('vegetable', { readOnly: true })).toStrictEqual({
      value: 'carrot',
      error: undefined,
      readOnly: true,
      onBlur: expect.any(Function),
      onChange: expect.any(Function),
      onFocus: expect.any(Function),
    });
  });
});
