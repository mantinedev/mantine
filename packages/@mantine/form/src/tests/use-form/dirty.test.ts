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
    act(() => hook.result.current.setFieldValue('a.0', { b: 3 }));
    expect(hook.result.current.isDirty('a.0')).toBe(true);
    expect(hook.result.current.isDirty('a')).toBe(true);

    act(() => hook.result.current.setFieldValue('a', [{ b: 1 }, { b: 2 }]));
    expect(hook.result.current.isDirty('a.0')).toBe(false);
    expect(hook.result.current.isDirty('a')).toBe(false);

    act(() => hook.result.current.insertListItem('a', { b: 3 }));
    expect(hook.result.current.isDirty('a.2')).toBe(true);
    expect(hook.result.current.isDirty('a')).toBe(true);

    act(() => hook.result.current.removeListItem('a', 2));
    expect(hook.result.current.isDirty('a.2')).toBe(false);
    expect(hook.result.current.isDirty('a')).toBe(false);
  });

  it('keeps list changes dirty when an unrelated field is restored', () => {
    const hook = renderHook(() => useForm({ mode, initialValues: { rows: [1, 2], name: 'x' } }));
    const form = hook.result.current;

    act(() => form.insertListItem('rows', 3));
    act(() => form.setFieldValue('name', 'changed'));
    act(() => form.setFieldValue('name', 'x'));
    expect(form.isDirty()).toBe(true);
    act(() => form.removeListItem('rows', 2));
    expect(form.isDirty()).toBe(false);

    act(() => form.removeListItem('rows', 0));
    expect(form.isDirty()).toBe(true);
    act(() => form.insertListItem('rows', 1, 0));
    expect(form.isDirty()).toBe(false);

    act(() => form.reorderListItem('rows', { from: 0, to: 1 }));
    expect(form.isDirty()).toBe(true);
    act(() => form.reorderListItem('rows', { from: 1, to: 0 }));
    expect(form.isDirty()).toBe(false);
  });

  it('recalculates list dirty state when individual rows are restored', () => {
    const rows = [{ name: 'one' }, { name: 'two' }];
    const hook = renderHook(() => useForm({ mode, initialValues: { rows, name: 'x' } }));
    const form = hook.result.current;

    act(() => form.setFieldValue('name', 'x'));
    act(() => form.replaceListItem('rows', 0, { name: 'changed' }));
    act(() => form.replaceListItem('rows', 1, { name: 'changed' }));
    expect(form.isDirty()).toBe(true);
    act(() => form.setFieldValue('rows.0', rows[0]));
    expect(form.isDirty('rows')).toBe(true);
    act(() => form.setFieldValue('rows.1.name', 'two'));
    expect(form.isDirty('rows')).toBe(false);
    expect(form.isDirty()).toBe(false);

    act(() => form.replaceListItem('rows', 0, { name: 'changed' }));
    act(() => form.resetField('rows.0'));
    expect(form.isDirty()).toBe(false);
  });
}

describe('@mantine/form/dirty-controlled', () => {
  tests('controlled');
});

describe('@mantine/form/dirty-uncontrolled', () => {
  tests('uncontrolled');
});
