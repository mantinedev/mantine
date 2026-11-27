import { act, renderHook } from '@testing-library/react';
import { useField } from '../../use-field';
import { isNotEmpty } from '../../validators';

function validateAsync(value: string): Promise<string | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value === 'test' ? 'error' : null);
    }, 1000);
  });
}

describe('@mantine/form/use-field/validate', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('supports sync validation', async () => {
    const hook = renderHook(() =>
      useField({ initialValue: 'test', validate: (value) => (value === 'test' ? 'error' : null) })
    );
    await act(() => hook.result.current.validate());
    expect(hook.result.current.error).toBe('error');

    await act(() => hook.result.current.setValue('new value'));
    await act(() => hook.result.current.validate());
    expect(hook.result.current.error).toBe(null);
  });

  it.each(['manual', 'change', 'blur'])('uses updated validation for %s calls', async (trigger) => {
    const hook = renderHook(
      ({ message }) =>
        useField({
          initialValue: 'test',
          validate: () => message,
          validateOnChange: trigger === 'change',
          validateOnBlur: trigger === 'blur',
        }),
      { initialProps: { message: 'old rule' } }
    );

    hook.rerender({ message: 'new rule' });
    await act(async () => {
      if (trigger === 'manual') {
        await hook.result.current.validate();
      } else if (trigger === 'change') {
        hook.result.current.getInputProps().onChange('updated');
      } else {
        hook.result.current.getInputProps().onBlur();
      }
    });

    expect(hook.result.current.error).toBe('new rule');
  });

  it('uses the updated resolver for a rejected validation', async () => {
    const validate = () => Promise.reject(new Error('invalid'));
    const hook = renderHook(
      ({ prefix }) =>
        useField({
          initialValue: 'test',
          validate,
          resolveValidationError: (error) => `${prefix}: ${(error as Error).message}`,
        }),
      { initialProps: { prefix: 'old' } }
    );

    hook.rerender({ prefix: 'new' });
    await act(() => hook.result.current.validate());

    expect(hook.result.current.error).toBe('new: invalid');
  });

  it.each([false, true])('responds to validateOnChange changing from %s', async (initial) => {
    const validate = jest.fn(() => null);
    const hook = renderHook(
      ({ validateOnChange }) => useField({ initialValue: 'test', validate, validateOnChange }),
      { initialProps: { validateOnChange: initial } }
    );

    hook.rerender({ validateOnChange: !initial });
    await act(() => hook.result.current.getInputProps().onChange('updated'));

    expect(validate).toHaveBeenCalledTimes(initial ? 0 : 1);
  });

  it('supports async validation', async () => {
    const hook = renderHook(() => useField({ initialValue: 'test', validate: validateAsync }));
    await act(() => {
      const validate = hook.result.current.validate();
      jest.advanceTimersByTime(1000);
      return validate;
    });
    expect(hook.result.current.error).toBe('error');

    await act(() => hook.result.current.setValue('new value'));
    await act(() => {
      const validate = hook.result.current.validate();
      jest.advanceTimersByTime(1000);
      return validate;
    });
    expect(hook.result.current.error).toBe(null);
  });

  it('works correctly with validators', async () => {
    const hook = renderHook(() =>
      useField({ initialValue: '', validate: isNotEmpty('test error') })
    );

    await act(() => hook.result.current.validate());
    expect(hook.result.current.error).toBe('test error');

    await act(() => hook.result.current.setValue('test'));
    await act(() => hook.result.current.validate());
    expect(hook.result.current.error).toBe(null);
  });

  it('validates field on value change if validateOnChange is set to true', async () => {
    const hook = renderHook(() =>
      useField({
        initialValue: 'test',
        validateOnChange: true,
        validate: (value) => (value === 'test' ? 'error' : null),
      })
    );

    await act(() => hook.result.current.getInputProps().onChange('new value'));
    expect(hook.result.current.error).toBe(null);

    act(() => hook.result.current.getInputProps().onChange('test'));
    expect(hook.result.current.error).toBe('error');
  });

  it('validate filed on blur if validateOnBlur is set to true', async () => {
    const hook = renderHook(() =>
      useField({
        initialValue: 'test',
        validateOnBlur: true,
        validate: (value) => (value === 'test' ? 'error' : null),
      })
    );

    await act(() => hook.result.current.getInputProps().onBlur());
    expect(hook.result.current.error).toBe('error');

    act(() => hook.result.current.getInputProps().onChange('new value'));
    await act(() => hook.result.current.getInputProps().onBlur());
    expect(hook.result.current.error).toBe(null);
  });
});
