import { act, renderHook } from '@testing-library/react';
import { useForm } from '../use-form';

describe('@mantine/form/reset', () => {
  it('resets errors and values with reset handler', () => {
    const hook = renderHook(() =>
      useForm({ initialErrors: { a: 1, b: 2 }, initialValues: { c: 3, d: 4 } })
    );
    expect(hook.result.current.errors).toStrictEqual({ a: 1, b: 2 });
    expect(hook.result.current.values).toStrictEqual({ c: 3, d: 4 });

    act(() => hook.result.current.setValues({ c: 5, d: 6 }));
    act(() => hook.result.current.setErrors({ a: 7, b: 8 }));
    expect(hook.result.current.values).toStrictEqual({ c: 5, d: 6 });
    expect(hook.result.current.errors).toStrictEqual({ a: 7, b: 8 });

    act(() => hook.result.current.reset());
    expect(hook.result.current.errors).toStrictEqual({});
    expect(hook.result.current.values).toStrictEqual({ c: 3, d: 4 });
  });

  it('resets touched and dirty state', () => {
    const hook = renderHook(() =>
      useForm({ initialValues: { a: 1 }, initialDirty: { a: true }, initialTouched: { a: true } })
    );

    expect(hook.result.current.isDirty()).toBe(true);
    expect(hook.result.current.isTouched()).toBe(true);

    act(() => hook.result.current.reset());
    expect(hook.result.current.isDirty()).toBe(false);
    expect(hook.result.current.isTouched()).toBe(false);
  });
});
