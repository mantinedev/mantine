import { act, renderHook } from '@testing-library/react';
import { FormMode } from '../../types';
import { useForm } from '../../use-form';

function tests(mode: FormMode) {
  it('accepts initial dirty state', () => {
    const hook = renderHook(() => useForm({ mode, initialDirty: { a: true, b: false } }));
    expect(hook.result.current.isDirty('a')).toBe(true);
    expect(hook.result.current.isDirty('b')).toBe(false);
    expect(hook.result.current.isDirty()).toBe(true);
  });

  it('sets field as dirty if value changes', () => {
    const hook = renderHook(() => useForm({ mode, initialValues: { a: 1 } }));
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

  it('resets status with resetDirty handler', () => {
    const hook = renderHook(() => useForm({ mode, initialDirty: { a: true } }));
    expect(hook.result.current.isDirty()).toBe(true);

    act(() => hook.result.current.resetDirty());
    expect(hook.result.current.isDirty()).toBe(false);
  });

  it('sets list field as dirty if list item changes', () => {
    const hook = renderHook(() => useForm({ mode, initialValues: { a: [{ b: 1 }, { b: 2 }] } }));
    act(() => hook.result.current.setFieldValue('a.0', 3));
    expect(hook.result.current.isDirty('a.0')).toBe(true);
    expect(hook.result.current.isDirty('a')).toBe(true);

    act(() => hook.result.current.setFieldValue('a', [{ b: 1 }, { b: 2 }]));
    expect(hook.result.current.isDirty('a.0')).toBe(false);
    expect(hook.result.current.isDirty('a')).toBe(false);

    act(() => hook.result.current.insertListItem('a', [{ b: 3 }]));
    expect(hook.result.current.isDirty('a.2')).toBe(true);
    expect(hook.result.current.isDirty('a')).toBe(true);

    act(() => hook.result.current.removeListItem('a', 2));
    expect(hook.result.current.isDirty('a.2')).toBe(false);
    expect(hook.result.current.isDirty('a')).toBe(false);
  });
}

describe('@mantine/form/dirty-controlled', () => {
  tests('controlled');
});

describe('@mantine/form/dirty-uncontrolled', () => {
  tests('uncontrolled');
});
