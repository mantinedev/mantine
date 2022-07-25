import { act, renderHook } from '@testing-library/react';
import { useForm } from '../use-form';

describe('@mantine/form/setFieldValue', () => {
  it('sets given value with root path', () => {
    const hook = renderHook(() => useForm({ initialValues: { a: 1, b: 2 } }));

    act(() => hook.result.current.setFieldValue('a', 10));
    expect(hook.result.current.values).toStrictEqual({ a: 10, b: 2 });

    act(() => hook.result.current.setFieldValue('b', 20));
    expect(hook.result.current.values).toStrictEqual({ a: 10, b: 20 });
  });

  it('sets given value at composite path', () => {
    const hook = renderHook(() => useForm({ initialValues: { a: { d: 2, b: { c: 1 } } } }));

    act(() => hook.result.current.setFieldValue('a.b.c', 10));
    expect(hook.result.current.values).toStrictEqual({ a: { d: 2, b: { c: 10 } } });

    act(() => hook.result.current.setFieldValue('a.d', 20));
    expect(hook.result.current.values).toStrictEqual({ a: { d: 20, b: { c: 10 } } });
  });

  it('sets given value at array path', () => {
    const hook = renderHook(() => useForm({ initialValues: { a: [{ b: 1 }, { b: 2 }] } }));

    act(() => hook.result.current.setFieldValue('a.1.b', 20));
    expect(hook.result.current.values).toStrictEqual({ a: [{ b: 1 }, { b: 20 }] });

    act(() => hook.result.current.setFieldValue('a.0.b', 10));
    expect(hook.result.current.values).toStrictEqual({ a: [{ b: 10 }, { b: 20 }] });
  });

  it('sets given value at mixed nested path', () => {
    const hook = renderHook(() =>
      useForm({ initialValues: { a: [{ b: { c: 1 } }, { b: { c: 2 } }] } })
    );

    act(() => hook.result.current.setFieldValue('a.1.b.c', 20));
    expect(hook.result.current.values).toStrictEqual({ a: [{ b: { c: 1 } }, { b: { c: 20 } }] });

    act(() => hook.result.current.setFieldValue('a.0.b.c', 10));
    expect(hook.result.current.values).toStrictEqual({ a: [{ b: { c: 10 } }, { b: { c: 20 } }] });
  });
});
