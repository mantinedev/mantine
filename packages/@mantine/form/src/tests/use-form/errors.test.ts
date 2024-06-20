import { act, renderHook } from '@testing-library/react';
import { FormMode } from '../../types';
import { useForm } from '../../use-form';

function tests(mode: FormMode) {
  it('initializes form with given initialErrors', () => {
    const hook = renderHook(() => useForm({ mode, initialErrors: { a: true, b: true } }));
    expect(hook.result.current.errors).toStrictEqual({ a: true, b: true });
  });

  it('sets error to empty object if initialErrors value is not provided', () => {
    const hook = renderHook(() => useForm({ mode }));
    expect(hook.result.current.errors).toStrictEqual({});
  });

  it('allows to set errors object with setErrors handler', () => {
    const hook = renderHook(() => useForm({ mode }));
    act(() => hook.result.current.setErrors({ a: true, b: true }));
    expect(hook.result.current.errors).toStrictEqual({ a: true, b: true });
  });

  it('filters out initialErrors with null and undefined values', () => {
    const hook = renderHook(() =>
      useForm({ mode, initialErrors: { a: 1, b: undefined, c: null, d: 2 } })
    );
    expect(hook.result.current.errors).toStrictEqual({ a: 1, d: 2 });
  });
}

describe('@mantine/form/errors-controlled', () => {
  tests('controlled');
});

describe('@mantine/form/errors-uncontrolled', () => {
  tests('uncontrolled');
});
