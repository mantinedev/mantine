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
});
