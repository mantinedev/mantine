import { act, renderHook } from '@testing-library/react';
import { FormMode } from '../../types';
import { useForm } from '../../use-form';

const getFormEvent = () => ({ preventDefault: jest.fn() }) as any;

function tests(mode: FormMode) {
  it('resets form with onReset handler', () => {
    const event = getFormEvent();
    const hook = renderHook(() =>
      useForm({
        mode,
        clearInputErrorOnChange: false,
        initialValues: { a: 1, b: 2 },
        initialErrors: { a: 'error-a', b: 'error-b' },
      })
    );

    act(() => hook.result.current.setValues({ a: 10, b: 20 }));
    expect(hook.result.current.getValues()).toStrictEqual({ a: 10, b: 20 });
    expect(hook.result.current.errors).toStrictEqual({ a: 'error-a', b: 'error-b' });

    act(() => hook.result.current.onReset(event));
    expect(hook.result.current.getValues()).toStrictEqual({ a: 1, b: 2 });
    expect(hook.result.current.errors).toStrictEqual({});
  });
}

describe('@mantine/form/onReset-controlled', () => {
  tests('controlled');
});

describe('@mantine/form/onReset-uncontrolled', () => {
  tests('uncontrolled');
});
