import { act, renderHook } from '@testing-library/react';
import { useForm } from '../use-form';

describe('@mantine/form/setErrors', () => {
  it('filters out errors with undefined and null with setErrors handler', () => {
    const hook = renderHook(() => useForm());
    act(() => hook.result.current.setErrors({ a: 1, b: undefined, c: null, d: 2 }));
    expect(hook.result.current.errors).toStrictEqual({ a: 1, d: 2 });
  });
});
