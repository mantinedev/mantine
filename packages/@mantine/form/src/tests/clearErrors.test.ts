import { act, renderHook } from '@testing-library/react';
import { useForm } from '../use-form';

describe('@mantine/form/clearErrors', () => {
  it('clears errors when clearErrors handler is called', () => {
    const hook = renderHook(() => useForm({ initialErrors: { a: 1, b: 2 } }));
    expect(hook.result.current.errors).toStrictEqual({ a: 1, b: 2 });
    act(() => hook.result.current.clearErrors());
    expect(hook.result.current.errors).toStrictEqual({});
  });
});
