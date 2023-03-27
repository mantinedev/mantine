import { act, renderHook } from '@testing-library/react';
import { useForm } from '../use-form';

describe('@mantine/form/touched', () => {
  it('accepts initial touched state', () => {
    const hook = renderHook(() => useForm({ initialTouched: { a: true, b: false } }));
    expect(hook.result.current.isTouched('a')).toBe(true);
    expect(hook.result.current.isTouched('b')).toBe(false);
    expect(hook.result.current.isTouched()).toBe(true);
  });

  it('sets field as touched if value changes', () => {
    const hook = renderHook(() => useForm({ initialValues: { a: 1 } }));
    expect(hook.result.current.isTouched('a')).toBe(false);
    expect(hook.result.current.isTouched()).toBe(false);

    act(() => hook.result.current.setFieldValue('a', 5));
    expect(hook.result.current.isTouched('a')).toBe(true);
    expect(hook.result.current.isTouched()).toBe(true);
  });

  it('allows to set touched state with setTouched handler', () => {
    const hook = renderHook(() => useForm());
    expect(hook.result.current.isTouched()).toBe(false);
    expect(hook.result.current.isTouched('a')).toBe(false);

    act(() => hook.result.current.setTouched({ a: true }));
    expect(hook.result.current.isTouched()).toBe(true);
    expect(hook.result.current.isTouched('a')).toBe(true);
  });

  it('resets status with resetTouched handler', () => {
    const hook = renderHook(() => useForm({ initialTouched: { a: true } }));
    expect(hook.result.current.isTouched()).toBe(true);

    act(() => hook.result.current.resetTouched());
    expect(hook.result.current.isTouched()).toBe(false);
  });

  it('sets field as touched with getInputProps onFocus', () => {
    const hook = renderHook(() => useForm({ initialValues: { a: 1 } }));
    expect(hook.result.current.isTouched()).toBe(false);
    expect(hook.result.current.isTouched('a')).toBe(false);

    act(() => hook.result.current.getInputProps('a').onFocus());
    expect(hook.result.current.isTouched()).toBe(true);
    expect(hook.result.current.isTouched('a')).toBe(true);
  });
});
