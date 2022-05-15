import { act, renderHook } from '@testing-library/react';
import { useForm, formList, isFormList } from '../index';

describe('@mantine/form/use-form reset', () => {
  it('resets values to initial state with reset handler', () => {
    const hook = renderHook(() =>
      useForm({ initialValues: { banana: 'initial banana', orange: 20, apple: { nested: true } } })
    );

    act(() =>
      hook.result.current.setValues({
        banana: 'modified banana',
        orange: 21,
        apple: { nested: false },
      })
    );

    expect(hook.result.current.values).toStrictEqual({
      banana: 'modified banana',
      orange: 21,
      apple: { nested: false },
    });

    act(() => hook.result.current.reset());

    expect(hook.result.current.values).toStrictEqual({
      banana: 'initial banana',
      orange: 20,
      apple: { nested: true },
    });
  });

  it('keeps form lists after reset', () => {
    const hook = renderHook(() =>
      useForm({ initialValues: { fruits: formList([{ name: 'banana' }, { name: 'orange' }]) } })
    );

    expect(isFormList(hook.result.current.values.fruits)).toBe(true);
    act(() => hook.result.current.reset());
    expect(isFormList(hook.result.current.values.fruits)).toBe(true);
  });

  it('clears errors with reset handler', () => {
    const hook = renderHook(() =>
      useForm({
        initialValues: { apple: 1, banana: 2 },
        initialErrors: { apple: 'apple-error', banana: 'banana-error' },
      })
    );

    expect(hook.result.current.errors).toStrictEqual({
      apple: 'apple-error',
      banana: 'banana-error',
    });

    act(() => hook.result.current.reset());

    expect(hook.result.current.errors).toStrictEqual({});
  });
});
