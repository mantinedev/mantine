import { act, renderHook } from '@testing-library/react';
import { useForm } from '../use-form';

describe('@mantine/form/initialize', () => {
  it('initializes form with given values with form.initialize', () => {
    const hook = renderHook(() => useForm({ initialValues: { a: 1, b: 2 } }));
    expect(hook.result.current.values).toStrictEqual({ a: 1, b: 2 });

    act(() => hook.result.current.initialize({ a: 3, b: 4 }));
    expect(hook.result.current.values).toStrictEqual({ a: 3, b: 4 });
    expect(hook.result.current.initialized).toBe(true);

    act(() => hook.result.current.setValues({ a: 1, b: 2 }));
    act(() => hook.result.current.initialize({ a: 5, b: 6 }));
    expect(hook.result.current.values).toStrictEqual({ a: 1, b: 2 });
  });
});
