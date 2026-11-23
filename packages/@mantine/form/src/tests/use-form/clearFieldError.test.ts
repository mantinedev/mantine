import { act, renderHook } from '@testing-library/react';
import { FormMode } from '../../types';
import { useForm } from '../../use-form';

function tests(mode: FormMode) {
  it('clears error of given field with clearFieldError handler', () => {
    const hook = renderHook(() => useForm({ mode, initialErrors: { a: 1, b: 2 } }));
    expect(hook.result.current.errors).toStrictEqual({ a: 1, b: 2 });

    act(() => hook.result.current.clearFieldError('a'));
    expect(hook.result.current.errors).toStrictEqual({ b: 2 });

    act(() => hook.result.current.clearFieldError('b'));
    expect(hook.result.current.errors).toStrictEqual({});
  });

  it('clears error set in the same tick as another state update', () => {
    const hook = renderHook(() => useForm({ mode, initialValues: { email: '' } }));

    act(() => {
      hook.result.current.setValues({ email: 'test@example.com' });
      hook.result.current.setErrors({ email: 'Email is taken' });
      hook.result.current.clearFieldError('email');
    });

    expect(hook.result.current.errors).toStrictEqual({});
  });

  it('clears error set with setFieldError in the same tick as another state update', () => {
    const hook = renderHook(() => useForm({ mode, initialValues: { email: '' } }));

    act(() => {
      hook.result.current.setValues({ email: 'test@example.com' });
      hook.result.current.setFieldError('email', 'Email is taken');
      hook.result.current.clearFieldError('email');
    });

    expect(hook.result.current.errors).toStrictEqual({});
  });

  it('does not notify subscribers when cleared field has no error', () => {
    const hook = renderHook(() => useForm({ mode, initialErrors: { a: 1 } }));
    expect(hook.result.current.errors).toStrictEqual({ a: 1 });

    const before = hook.result.current.clearFieldError;
    act(() => hook.result.current.clearFieldError('non-existent'));
    expect(hook.result.current.errors).toStrictEqual({ a: 1 });
    expect(hook.result.current.clearFieldError).toBe(before);
  });
}

describe('@mantine/form/clearFieldError-controlled', () => {
  tests('controlled');
});

describe('@mantine/form/clearFieldError-uncontrolled', () => {
  tests('uncontrolled');
});
