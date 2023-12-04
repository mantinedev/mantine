import { act, renderHook } from '@testing-library/react';
import { useForm } from '../use-form';

describe('@mantine/form/errors', () => {
  it('initializes form with given initialErrors', () => {
    const hook = renderHook(() => useForm({ initialErrors: { a: true, b: true } }));
    expect(hook.result.current.errors).toStrictEqual({ a: true, b: true });
  });

  it('sets error to empty object if initialErrors value is not provided', () => {
    const hook = renderHook(() => useForm());
    expect(hook.result.current.errors).toStrictEqual({});
  });

  it('allows to set errors object with setErrors handler', () => {
    const hook = renderHook(() => useForm());
    act(() => hook.result.current.setErrors({ a: true, b: true }));
    expect(hook.result.current.errors).toStrictEqual({ a: true, b: true });
  });

  it('filters out initialErrors with null and undefined values', () => {
    const hook = renderHook(() =>
      useForm({ initialErrors: { a: 1, b: undefined, c: null, d: 2 } })
    );
    expect(hook.result.current.errors).toStrictEqual({ a: 1, d: 2 });
  });
});
