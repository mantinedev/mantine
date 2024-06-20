import { act, renderHook } from '@testing-library/react';
import { FormMode } from '../../types';
import { useForm } from '../../use-form';

interface Values {
  a: number;
  b: number;
}

function tests(mode: FormMode) {
  it('resets errors when setValues is called', () => {
    const hook = renderHook(() => useForm<Values>({ mode, initialErrors: { a: 1, b: 2 } }));
    expect(hook.result.current.errors).toStrictEqual({ a: 1, b: 2 });
    act(() => hook.result.current.setValues({ a: 1, b: 2 }));
    expect(hook.result.current.errors).toStrictEqual({});
  });

  it('does not reset errors when setValues is called if clearInputErrorOnChange is false', () => {
    const hook = renderHook(() =>
      useForm<Values>({
        mode,
        initialErrors: { a: 1, b: 2 },
        clearInputErrorOnChange: false,
      })
    );

    expect(hook.result.current.errors).toStrictEqual({ a: 1, b: 2 });
    act(() => hook.result.current.setValues({ a: 1, b: 2 }));
    expect(hook.result.current.errors).toStrictEqual({ a: 1, b: 2 });
  });

  it('allows setting values partial', () => {
    const hook = renderHook(() => useForm<Values>({ mode, initialValues: { a: 1, b: 2 } }));
    act(() => hook.result.current.setValues({ a: 3 }));
    expect(hook.result.current.getValues()).toStrictEqual({ a: 3, b: 2 });
  });
}

describe('@mantine/form/setValues-controlled', () => {
  tests('controlled');
});

describe('@mantine/form/setValues-uncontrolled', () => {
  tests('uncontrolled');
});
