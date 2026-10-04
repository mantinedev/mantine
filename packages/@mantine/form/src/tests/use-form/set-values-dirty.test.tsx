import { act, renderHook } from '@testing-library/react';
import { FormMode } from '../../types';
import { useForm } from '../../use-form';

function tests(mode: FormMode) {
  it('recalculates dirty state when setValues is called after a field was changed back', () => {
    const hook = renderHook(() => useForm({ mode, initialValues: { a: 'x', b: 'y' } }));

    act(() => hook.result.current.setFieldValue('a', 'changed'));
    act(() => hook.result.current.setFieldValue('a', 'x'));
    expect(hook.result.current.isDirty('a')).toBe(false);

    act(() => hook.result.current.setValues({ a: 'demo', b: 'demo' }));
    expect(hook.result.current.isDirty('a')).toBe(true);
    expect(hook.result.current.isDirty('b')).toBe(true);
    expect(hook.result.current.isDirty()).toBe(true);
  });

  it('clears dirty state when setValues sets values back to initial', () => {
    const hook = renderHook(() => useForm({ mode, initialValues: { a: 'x', b: 'y' } }));

    act(() => hook.result.current.setFieldValue('a', 'changed'));
    act(() => hook.result.current.setValues((current) => ({ ...current, a: 'x' })));

    expect(hook.result.current.isDirty('a')).toBe(false);
    expect(hook.result.current.isDirty()).toBe(false);
  });
}

describe('@mantine/form/set-values-dirty-controlled', () => {
  tests('controlled');
});

describe('@mantine/form/set-values-dirty-uncontrolled', () => {
  tests('uncontrolled');
});
