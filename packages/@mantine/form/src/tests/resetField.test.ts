import { act, renderHook, waitFor } from '@testing-library/react';
import { useForm } from '../use-form';

describe('@mantine/form/resetField', () => {
  it('resets error and value with resetField handler', () => {
    const hook = renderHook(() =>
      useForm({ initialErrors: { a: 'too short', b: 'too long' }, initialValues: { a: 1, b: 2 } })
    );
    expect(hook.result.current.errors).toStrictEqual({ a: 'too short', b: 'too long' });
    expect(hook.result.current.values).toStrictEqual({ a: 1, b: 2 });

    act(() => hook.result.current.setValues({ a: 3, b: 4 }));
    act(() => hook.result.current.setErrors({ a: 'error 1', b: 'error 2' }));

    expect(hook.result.current.values).toStrictEqual({ a: 3, b: 4 });
    expect(hook.result.current.errors).toStrictEqual({ a: 'error 1', b: 'error 2' });

    act(() => hook.result.current.resetField('a'));

    expect(hook.result.current.errors).toStrictEqual({ b: 'error 2' });
    expect(hook.result.current.values).toStrictEqual({ a: 1, b: 4 });
  });

  it('resets touched and dirty state', async () => {
    const hook = renderHook(() =>
      useForm({ initialValues: { a: 1 }, initialDirty: { a: true }, initialTouched: { a: true } })
    );

    expect(hook.result.current.isDirty()).toBe(true);
    expect(hook.result.current.isTouched()).toBe(true);

    await waitFor(() => {
      act(() => hook.result.current.resetField('a'));
      expect(hook.result.current.isDirty()).toBe(false);
      expect(hook.result.current.isTouched()).toBe(false);
    });
  });

  it('resets value without keeping added value', () => {
    const hook = renderHook(() =>
      useForm<{ a: number; b?: number; c?: number }>({ initialValues: { a: 1, b: 2 } })
    );

    act(() => hook.result.current.setFieldValue('c', 3));
    expect(hook.result.current.isDirty()).toBe(true);
    expect(hook.result.current.values).toStrictEqual({ a: 1, b: 2, c: 3 });

    act(() => hook.result.current.resetField('c'));
    expect(hook.result.current.isDirty()).toBe(false);
    expect(hook.result.current.values).toStrictEqual({ a: 1, b: 2 });
  });

  it('resets value correctly after updating initial values', () => {
    const hook = renderHook(() => useForm({ initialValues: { a: 1, b: 2 } }));
    const newInitialState = { a: 3, b: 4 };

    act(() => hook.result.current.setValues({ a: 100, b: 200 }));
    act(() => hook.result.current.setInitialValues(newInitialState));
    act(() => hook.result.current.resetField('a'));

    expect(hook.result.current.values).toStrictEqual({ a: 3, b: 200 });
  });
});
