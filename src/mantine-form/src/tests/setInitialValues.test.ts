import { act, renderHook } from '@testing-library/react';
import { useForm } from '../use-form';

interface Values {
  a: number;
  b: number;
}

describe('@mantine/form/setInitalValues', () => {
  it('reset initial values normal', () => {
    const hook = renderHook(() => useForm<Values>({ initialValues: { a: 1, b: 2 } }));
    act(() => {
      hook.result.current.setValues({ a: 5, b: 6 });
      hook.result.current.setInitialValues({ a: 3, b: 4 });
    });
    expect(hook.result.current.values).toStrictEqual({ a: 5, b: 6 });
    act(() => {
      hook.result.current.reset();
    });
    expect(hook.result.current.values).toStrictEqual({ a: 3, b: 4 });
  });

  it('allows setting initial values partial', () => {
    const hook = renderHook(() => useForm<Values>({ initialValues: { a: 1, b: 2 } }));
    act(() => {
      hook.result.current.setValues({ a: 5 });
      hook.result.current.setInitialValues({ a: 3 });
    });
    expect(hook.result.current.values).toStrictEqual({ a: 5, b: 2 });
    act(() => {
      hook.result.current.reset();
    });
    expect(hook.result.current.values).toStrictEqual({ a: 3, b: 2 });
  });
});
