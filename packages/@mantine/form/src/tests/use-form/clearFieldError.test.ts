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
}

describe('@mantine/form/clearFieldError-controlled', () => {
  tests('controlled');
});

describe('@mantine/form/clearFieldError-uncontrolled', () => {
  tests('uncontrolled');
});
