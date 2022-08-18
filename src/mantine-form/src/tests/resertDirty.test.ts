import { act, renderHook } from '@testing-library/react';
import { useForm } from '../use-form';

describe('@mantine/form/resetDirty', () => {
  it('memoizes values that were used in resetDirty', () => {
    const hook = renderHook(() => useForm({ initialValues: { a: 1, b: 2 } }));
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
});
