import { act, renderHook } from '@testing-library/react';
import { useForm } from '../use-form';

const getFormEvent = () => ({ preventDefault: jest.fn() } as any);

describe('@mantine/form/onReset', () => {
  it('resets form with onReset handler', () => {
    const event = getFormEvent();
    const hook = renderHook(() =>
      useForm({
        clearInputErrorOnChange: false,
        initialValues: { a: 1, b: 2 },
        initialErrors: { a: 'error-a', b: 'error-b' },
      })
    );

    act(() => hook.result.current.setValues({ a: 10, b: 20 }));
    expect(hook.result.current.values).toStrictEqual({ a: 10, b: 20 });
    expect(hook.result.current.errors).toStrictEqual({ a: 'error-a', b: 'error-b' });

    act(() => hook.result.current.onReset(event));
    expect(hook.result.current.values).toStrictEqual({ a: 1, b: 2 });
    expect(hook.result.current.errors).toStrictEqual({});
  });
});
