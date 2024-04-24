import { act, renderHook } from '@testing-library/react';
import { FormMode } from '../../types';
import { useForm } from '../../use-form';

function tests(mode: FormMode) {
  it('clears errors when clearErrors handler is called', () => {
    const hook = renderHook(() => useForm({ mode, initialErrors: { a: 1, b: 2 } }));
    expect(hook.result.current.errors).toStrictEqual({ a: 1, b: 2 });
    act(() => hook.result.current.clearErrors());
    expect(hook.result.current.errors).toStrictEqual({});
  });
}

describe('@mantine/form/clearErrors-controlled', () => {
  tests('controlled');
});

describe('@mantine/form/clearErrors-uncontrolled', () => {
  tests('uncontrolled');
});
