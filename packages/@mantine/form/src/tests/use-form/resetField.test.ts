import { act, renderHook } from '@testing-library/react';
import { FormMode } from '../../types';
import { useForm } from '../../use-form';

function tests(mode: FormMode) {
  it('should reset field', () => {
    const hook = renderHook(() => useForm({ mode, initialValues: { a: 1, b: 2 } }));
    expect(hook.result.current.values).toStrictEqual({ a: 1, b: 2 });

    act(() => hook.result.current.setFieldValue('a', 10));
    expect(hook.result.current.values).toStrictEqual({ a: 10, b: 2 });

    act(() => hook.result.current.resetField('a'));
    expect(hook.result.current.values).toStrictEqual({ a: 1, b: 2 });

    act(() => hook.result.current.setFieldValue('b', 20));
    expect(hook.result.current.values).toStrictEqual({ a: 1, b: 20 });

    act(() => hook.result.current.resetField('b'));
    expect(hook.result.current.values).toStrictEqual({ a: 1, b: 2 });

    act(() => hook.result.current.resetField('c'));
    expect(hook.result.current.values).toStrictEqual({ a: 1, b: 2 });
  });
}

describe('@mantine/form/resetField-controlled', () => {
  tests('controlled');
});

describe('@mantine/form/resetField-uncontrolled', () => {
  tests('uncontrolled');
});
