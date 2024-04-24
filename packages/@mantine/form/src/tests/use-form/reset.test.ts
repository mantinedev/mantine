import { act, renderHook } from '@testing-library/react';
import { FormMode } from '../../types';
import { useForm } from '../../use-form';

function tests(mode: FormMode) {
  it('resets errors and values with reset handler', () => {
    const hook = renderHook(() =>
      useForm({ mode, initialErrors: { a: 1, b: 2 }, initialValues: { c: 3, d: 4 } })
    );
    expect(hook.result.current.errors).toStrictEqual({ a: 1, b: 2 });
    expect(hook.result.current.getValues()).toStrictEqual({ c: 3, d: 4 });

    act(() => hook.result.current.setValues({ c: 5, d: 6 }));
    act(() => hook.result.current.setErrors({ a: 7, b: 8 }));
    expect(hook.result.current.getValues()).toStrictEqual({ c: 5, d: 6 });
    expect(hook.result.current.errors).toStrictEqual({ a: 7, b: 8 });

    act(() => hook.result.current.reset());
    expect(hook.result.current.errors).toStrictEqual({});
    expect(hook.result.current.getValues()).toStrictEqual({ c: 3, d: 4 });
  });

  it('resets touched and dirty state', () => {
    const hook = renderHook(() =>
      useForm({
        mode,
        initialValues: { a: 1 },
        initialDirty: { a: true },
        initialTouched: { a: true },
      })
    );

    expect(hook.result.current.isDirty()).toBe(true);
    expect(hook.result.current.isTouched()).toBe(true);

    act(() => hook.result.current.reset());
    expect(hook.result.current.isDirty()).toBe(false);
    expect(hook.result.current.isTouched()).toBe(false);
  });

  it('resets values without keeping added values', () => {
    const hook = renderHook(() =>
      useForm<{ a: number; b?: number; c?: number }>({ mode, initialValues: { a: 1, b: 2 } })
    );

    act(() => hook.result.current.setFieldValue('c', 3));
    expect(hook.result.current.isDirty()).toBe(true);
    expect(hook.result.current.getValues()).toStrictEqual({ a: 1, b: 2, c: 3 });

    act(() => hook.result.current.reset());
    expect(hook.result.current.isDirty()).toBe(false);
    expect(hook.result.current.getValues()).toStrictEqual({ a: 1, b: 2 });
  });

  it('resets values correctly after updating initial values', () => {
    const hook = renderHook(() => useForm({ mode, initialValues: { a: 1, b: 2 } }));
    const newInitialState = { a: 3, b: 4 };

    act(() => hook.result.current.setValues({ a: 100, b: 200 }));
    act(() => hook.result.current.setInitialValues(newInitialState));
    act(() => hook.result.current.reset());

    expect(hook.result.current.getValues()).toStrictEqual(newInitialState);
  });
}

describe('@mantine/form/reset-controlled', () => {
  tests('controlled');
});

describe('@mantine/form/reset-uncontrolled', () => {
  tests('uncontrolled');
});
