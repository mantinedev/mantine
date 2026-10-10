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

  it('returns validation result from validate handler', async () => {
    const sync = renderHook(() =>
      useField({ initialValue: 'test', validate: (value) => (value === 'test' ? 'error' : null) })
    );
    await expect(act(() => sync.result.current.validate())).resolves.toBe('error');

    const async = renderHook(() => useField({ initialValue: 'test', validate: validateAsync }));
    let result: unknown;
    await act(async () => {
      const validate = async.result.current.validate();
      jest.advanceTimersByTime(1000);
      result = await validate;
    });
    expect(result).toBe('error');

    await act(() => async.result.current.setValue('new value'));
    await act(async () => {
      const validate = async.result.current.validate();
      jest.advanceTimersByTime(1000);
      result = await validate;
    });
    expect(result).toBe(null);
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
