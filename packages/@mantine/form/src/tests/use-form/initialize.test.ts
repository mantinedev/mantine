import { act, renderHook } from '@testing-library/react';
import { FormMode } from '../../types';
import { useForm } from '../../use-form';

function tests(mode: FormMode) {
  it('initializes form with given values with form.initialize', () => {
    const hook = renderHook(() => useForm({ mode, initialValues: { a: 1, b: 2 } }));
    expect(hook.result.current.getValues()).toStrictEqual({ a: 1, b: 2 });

    act(() => hook.result.current.initialize({ a: 3, b: 4 }));
    expect(hook.result.current.getValues()).toStrictEqual({ a: 3, b: 4 });
    expect(hook.result.current.initialized).toBe(true);

    act(() => hook.result.current.setValues({ a: 1, b: 2 }));
    act(() => hook.result.current.initialize({ a: 5, b: 6 }));
    expect(hook.result.current.getValues()).toStrictEqual({ a: 1, b: 2 });
  });
}

describe('@mantine/form/initialize-controlled', () => {
  tests('controlled');
});

describe('@mantine/form/initialize-uncontrolled', () => {
  tests('uncontrolled');
});
