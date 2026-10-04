import { act, renderHook } from '@testing-library/react';
import { FormMode } from '../../types';
import { useForm } from '../../use-form';

function tests(mode: FormMode) {
  it('clears dirty state of the field when resetField is called', () => {
    const hook = renderHook(() => useForm({ mode, initialValues: { a: 'x', b: 'y' } }));

    act(() => hook.result.current.setFieldValue('a', 'changed'));
    expect(hook.result.current.isDirty('a')).toBe(true);

    act(() => hook.result.current.resetField('a'));
    expect(hook.result.current.getValues().a).toBe('x');
    expect(hook.result.current.isDirty('a')).toBe(false);
    expect(hook.result.current.isDirty()).toBe(false);
  });

  it('keeps dirty state of other fields when resetField is called', () => {
    const hook = renderHook(() => useForm({ mode, initialValues: { a: 'x', b: 'y' } }));

    act(() => hook.result.current.setFieldValue('a', 'changed'));
    act(() => hook.result.current.setFieldValue('b', 'changed'));
    act(() => hook.result.current.resetField('a'));

    expect(hook.result.current.isDirty('a')).toBe(false);
    expect(hook.result.current.isDirty('b')).toBe(true);
    expect(hook.result.current.isDirty()).toBe(true);
  });
}

describe('@mantine/form/reset-field-dirty-controlled', () => {
  tests('controlled');
});

describe('@mantine/form/reset-field-dirty-uncontrolled', () => {
  tests('uncontrolled');
});
