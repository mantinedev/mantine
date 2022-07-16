import { renderHook, act } from '@testing-library/react';
import { useForm } from '../use-form';

describe('@mantine/form/isDirty', () => {
  it('returns true if the form value does not match the initial value', () => {
    const hook = renderHook(() =>
      useForm({
        initialValues: { a: 1, b: 2 },
        initialErrors: { a: 'error-a', b: 'error-b' },
      })
    );

    act(() => hook.result.current.setValues({ a: 10, b: 20 }));
    expect(hook.result.current.isDirty()).toBe(true);
  });
  it('returns false if the form value matches the initial value', () => {
    const hook = renderHook(() =>
      useForm({
        initialValues: { a: 1, b: 2 },
        initialErrors: { a: 'error-a', b: 'error-b' },
      })
    );

    act(() => hook.result.current.setValues({ a: 1, b: 2 }));
    expect(hook.result.current.isDirty()).toBe(false);
  });
});
