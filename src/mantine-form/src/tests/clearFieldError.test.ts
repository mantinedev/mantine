import { act, renderHook } from '@testing-library/react';
import { useForm } from '../use-form';

describe('@mantine/form/clearFieldError', () => {
  it('clears error of given field with clearFieldError handler', () => {
    const hook = renderHook(() => useForm({ initialErrors: { a: 1, b: 2 } }));
    expect(hook.result.current.errors).toStrictEqual({ a: 1, b: 2 });

    act(() => hook.result.current.clearFieldError('a'));
    expect(hook.result.current.errors).toStrictEqual({ b: 2 });

    act(() => hook.result.current.clearFieldError('b'));
    expect(hook.result.current.errors).toStrictEqual({});
  });
});
