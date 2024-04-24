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

    act(() => hook.result.current.setValue('new value'));
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

    act(() => hook.result.current.setValue('new value'));
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

    act(() => hook.result.current.setValue('test'));
    await act(() => hook.result.current.validate());
    expect(hook.result.current.error).toBe(null);
  });
});
