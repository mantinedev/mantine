import { renderHook, act } from '@testing-library/react';
import { useForm } from '../use-form';

describe('@mantine/form/values', () => {
  it('sets given initial values', () => {
    const hook = renderHook(() => useForm({ initialValues: { a: 1, b: 2 } }));
    expect(hook.result.current.values).toStrictEqual({ a: 1, b: 2 });
  });

  it('allows to initialize form without initial values', () => {
    const hook = renderHook(() => useForm<{ a: 1; b: 2 }>());
    expect(hook.result.current.values).toStrictEqual({});
  });

  it('sets values with setValues handler after initialization with initialValues', () => {
    const hook = renderHook(() => useForm({ initialValues: { a: 1, b: 2 } }));
    act(() => hook.result.current.setValues({ a: 3, b: 4 }));
    expect(hook.result.current.values).toStrictEqual({ a: 3, b: 4 });
  });

  it('sets values with setValues handler after initialization without initialValues', () => {
    const hook = renderHook(() => useForm<{ a: number; b: number }>());
    act(() => hook.result.current.setValues({ a: 3, b: 4 }));
    expect(hook.result.current.values).toStrictEqual({ a: 3, b: 4 });
  });
});
