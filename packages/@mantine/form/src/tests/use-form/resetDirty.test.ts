import { act, renderHook } from '@testing-library/react';
import { FormMode } from '../../types';
import { useForm } from '../../use-form';

function tests(mode: FormMode) {
  it('memoizes values that were used in resetDirty', () => {
    const hook = renderHook(() => useForm({ mode, initialValues: { a: 1, b: 2 } }));
    expect(hook.result.current.isDirty()).toBe(false);

    act(() => hook.result.current.setFieldValue('a', 3));
    expect(hook.result.current.isDirty()).toBe(true);

    act(() => hook.result.current.resetDirty());
    expect(hook.result.current.isDirty()).toBe(false);

    act(() => hook.result.current.setFieldValue('a', 1));
    expect(hook.result.current.isDirty()).toBe(true);

    act(() => hook.result.current.setFieldValue('a', 3));
    expect(hook.result.current.isDirty()).toBe(false);
  });

  it('correctly handles partial values', () => {
    const hook = renderHook(() =>
      useForm<{ a: number; b?: number }>({ mode, initialValues: { a: 1, b: 2 } })
    );

    expect(hook.result.current.isDirty()).toBe(false);

    act(() => {
      hook.result.current.setValues({ a: 2 });
      hook.result.current.resetDirty({ a: 2 });
    });

    expect(hook.result.current.isDirty()).toBe(false);
  });

  it('should handle reseting with new values', () => {
    const hook = renderHook(() => useForm({ mode, initialValues: { a: 1, b: 2 } }));
    expect(hook.result.current.isDirty()).toBe(false);

    act(() => hook.result.current.resetDirty({ a: 2, b: 2 }));
    expect(hook.result.current.isDirty()).toBe(true);
  });
}

describe('@mantine/form/resetDirty-controlled', () => {
  tests('controlled');
});

describe('@mantine/form/resetDirty-uncontrolled', () => {
  tests('uncontrolled');
});
