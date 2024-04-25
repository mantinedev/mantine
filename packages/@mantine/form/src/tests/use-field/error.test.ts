import { act, renderHook } from '@testing-library/react';
import { useField } from '../../use-field';

describe('@mantine/form/use-field/error', () => {
  it('correctly sets initial error', () => {
    const hook = renderHook(() => useField({ initialValue: 'test', initialError: 'test-error' }));
    expect(hook.result.current.error).toBe('test-error');
  });

  it('changes error with setError handler', () => {
    const hook = renderHook(() => useField({ initialValue: 'test', initialError: 'test-error' }));
    expect(hook.result.current.error).toBe('test-error');
    act(() => hook.result.current.setError('new error'));
    expect(hook.result.current.error).toBe('new error');
  });

  it('resets error to null with reset handler', () => {
    const hook = renderHook(() => useField({ initialValue: 'test', initialError: 'test-error' }));
    expect(hook.result.current.error).toBe('test-error');
    act(() => hook.result.current.setError('new error'));
    expect(hook.result.current.error).toBe('new error');
    act(() => hook.result.current.reset());
    expect(hook.result.current.error).toBe(null);
  });

  it('handles resolveValidationError error function', async () => {
    const hook = renderHook(() =>
      useField({
        initialValue: 'test',
        validate: () => Promise.reject(new Error('test-error')),
        resolveValidationError: (error) => (error instanceof Error ? error.message : null),
      })
    );

    expect(hook.result.current.error).toBe(null);
    await act(() => hook.result.current.validate());
    expect(hook.result.current.error).toBe('test-error');
  });

  it('clears error when value is set if clearErrorOnChange is set to true', async () => {
    const hook = renderHook(() =>
      useField({ initialValue: 'test', validate: (value) => (value === 'test' ? 'error' : null) })
    );

    expect(hook.result.current.error).toBe(null);
    await act(() => hook.result.current.setValue('test'));
    await act(() => hook.result.current.validate());
    expect(hook.result.current.error).toBe('error');

    await act(() => hook.result.current.setValue('new value'));
    expect(hook.result.current.error).toBe(null);
  });

  it('does not clear error when value is set if clearErrorOnChange is set to false', async () => {
    const hook = renderHook(() =>
      useField({
        initialValue: 'test',
        validate: (value) => (value === 'test' ? 'error' : null),
        clearErrorOnChange: false,
      })
    );

    expect(hook.result.current.error).toBe(null);
    await act(() => hook.result.current.setValue('test'));
    await act(() => hook.result.current.validate());
    expect(hook.result.current.error).toBe('error');

    await act(() => hook.result.current.setValue('new value'));
    expect(hook.result.current.error).toBe('error');
  });
});
