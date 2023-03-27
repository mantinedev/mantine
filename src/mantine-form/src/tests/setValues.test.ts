import { act, renderHook } from '@testing-library/react';
import { useForm } from '../use-form';

interface Values {
  a: number;
  b: number;
}

describe('@mantine/form/setValues', () => {
  it('resets errors when setValues is called', () => {
    const hook = renderHook(() => useForm<Values>({ initialErrors: { a: 1, b: 2 } }));
    expect(hook.result.current.errors).toStrictEqual({ a: 1, b: 2 });
    act(() => hook.result.current.setValues({ a: 1, b: 2 }));
    expect(hook.result.current.errors).toStrictEqual({});
  });

  it('does not reset errors when setValues is called if clearInputErrorOnChange is false', () => {
    const hook = renderHook(() =>
      useForm<Values>({
        initialErrors: { a: 1, b: 2 },
        clearInputErrorOnChange: false,
      })
    );

    expect(hook.result.current.errors).toStrictEqual({ a: 1, b: 2 });
    act(() => hook.result.current.setValues({ a: 1, b: 2 }));
    expect(hook.result.current.errors).toStrictEqual({ a: 1, b: 2 });
  });

  it('allows setting values partial', () => {
    const hook = renderHook(() => useForm<Values>({ initialValues: { a: 1, b: 2 } }));
    act(() => hook.result.current.setValues({ a: 3 }));
    expect(hook.result.current.values).toStrictEqual({ a: 3, b: 2 });
  });
});
