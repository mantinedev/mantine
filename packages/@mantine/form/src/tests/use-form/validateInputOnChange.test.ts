import { act, renderHook } from '@testing-library/react';
import { FormMode } from '../../types';
import { useForm } from '../../use-form';

function tests(mode: FormMode) {
  it('validates root property on change', () => {
    const hook = renderHook(() =>
      useForm({
        mode,
        validateInputOnChange: true,
        initialValues: { a: '', b: '' },
        validate: {
          a: (value) => (value.length < 2 ? 'error-a' : null),
          b: (value) => (value.length < 2 ? 'error-b' : null),
        },
      })
    );

    expect(hook.result.current.errors).toStrictEqual({});

    act(() => hook.result.current.setFieldValue('a', '1'));
    expect(hook.result.current.errors).toStrictEqual({ a: 'error-a' });

    act(() => hook.result.current.setFieldValue('b', '1'));
    expect(hook.result.current.errors).toStrictEqual({ a: 'error-a', b: 'error-b' });

    act(() => {
      hook.result.current.setFieldValue('a', 'valid');
      hook.result.current.setFieldValue('b', 'valid');
    });

    expect(hook.result.current.errors).toStrictEqual({});
  });

  it('validates only specified fields', () => {
    const hook = renderHook(() =>
      useForm({
        mode,
        validateInputOnChange: ['a'],
        initialValues: { a: '', b: '' },
        validate: {
          a: (value) => (value.length < 2 ? 'error-a' : null),
          b: (value) => (value.length < 2 ? 'error-b' : null),
        },
      })
    );

    expect(hook.result.current.errors).toStrictEqual({});

    act(() => hook.result.current.setFieldValue('a', '1'));
    expect(hook.result.current.errors).toStrictEqual({ a: 'error-a' });

    act(() => hook.result.current.setFieldValue('b', '1'));
    expect(hook.result.current.errors).toStrictEqual({ a: 'error-a' });

    act(() => {
      hook.result.current.setFieldValue('a', 'valid');
      hook.result.current.setFieldValue('b', 'valid');
    });

    expect(hook.result.current.errors).toStrictEqual({});
  });

  it('validates nested property on change', () => {
    const hook = renderHook(() =>
      useForm({
        mode,
        validateInputOnChange: true,
        initialValues: { nested: { a: '', b: '' } },
        validate: {
          nested: {
            a: (value) => (value.length < 2 ? 'error-a' : null),
            b: (value) => (value.length < 2 ? 'error-b' : null),
          },
        },
      })
    );

    expect(hook.result.current.errors).toStrictEqual({});

    act(() => hook.result.current.setFieldValue('nested.a', '1'));
    expect(hook.result.current.errors).toStrictEqual({ 'nested.a': 'error-a' });

    act(() => hook.result.current.setFieldValue('nested.b', '1'));
    expect(hook.result.current.errors).toStrictEqual({
      'nested.a': 'error-a',
      'nested.b': 'error-b',
    });

    act(() => {
      hook.result.current.setFieldValue('nested.a', 'valid');
      hook.result.current.setFieldValue('nested.b', 'valid');
    });

    expect(hook.result.current.errors).toStrictEqual({});
  });
}

describe('@mantine/form/validateInputOnChange-controlled', () => {
  tests('controlled');
});

describe('@mantine/form/validateInputOnChange-uncontrolled', () => {
  tests('uncontrolled');
});
