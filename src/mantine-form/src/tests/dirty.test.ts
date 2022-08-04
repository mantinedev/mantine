import { act, renderHook } from '@testing-library/react';
import { useForm } from '../use-form';

describe('@mantine/form/dirty', () => {
  it('accepts initial dirty state', () => {
    const hook = renderHook(() => useForm({ initialDirty: { a: true, b: false } }));
    expect(hook.result.current.isDirty('a')).toBe(true);
    expect(hook.result.current.isDirty('b')).toBe(false);
    expect(hook.result.current.isDirty()).toBe(true);
  });

  it('sets field as dirty if value changes', () => {
    const hook = renderHook(() => useForm({ initialValues: { a: 1 } }));
    expect(hook.result.current.isDirty('a')).toBe(false);
    expect(hook.result.current.isDirty()).toBe(false);

    act(() => hook.result.current.setFieldValue('a', 5));
    expect(hook.result.current.isDirty('a')).toBe(true);
    expect(hook.result.current.isDirty()).toBe(true);

    act(() => hook.result.current.setFieldValue('a', 1));
    expect(hook.result.current.isDirty('a')).toBe(false);
    expect(hook.result.current.isDirty()).toBe(false);
  });

  it('allows to set dirty state with setDirty handler', () => {
    const hook = renderHook(() => useForm());
    expect(hook.result.current.isDirty()).toBe(false);
    expect(hook.result.current.isDirty('a')).toBe(false);

    act(() => hook.result.current.setDirty({ a: true }));
    expect(hook.result.current.isDirty()).toBe(true);
    expect(hook.result.current.isDirty('a')).toBe(true);
  });
});
