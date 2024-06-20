import { act, renderHook } from '@testing-library/react';
import { FormMode } from '../../types';
import { useForm } from '../../use-form';

function tests(mode: FormMode) {
  it('filters out errors with undefined and null with setErrors handler', () => {
    const hook = renderHook(() => useForm({ mode }));
    act(() => hook.result.current.setErrors({ a: 1, b: undefined, c: null, d: 2 }));
    expect(hook.result.current.errors).toStrictEqual({ a: 1, d: 2 });
  });
}

describe('@mantine/form/setErrors-controlled', () => {
  tests('controlled');
});

describe('@mantine/form/setErrors-uncontrolled', () => {
  tests('uncontrolled');
});
