import { act, renderHook } from '@testing-library/react';
import { useThrottledValue } from './use-throttled-value';

describe('useThrottledValue', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should return the initial value', () => {
    const { result } = renderHook(() => useThrottledValue('initial', 1000));
    expect(result.current).toBe('initial');
  });

  it('should throttle the value update', () => {
    const { result, rerender } = renderHook(({ value, delay }) => useThrottledValue(value, delay), {
      initialProps: { value: 'initial', delay: 1000 },
    });

    act(() => {
      rerender({ value: 'updated', delay: 1000 });
    });

    expect(result.current).toBe('updated');

    jest.advanceTimersByTime(1000);

    act(() => {
      rerender({ value: 'updated-2', delay: 1000 });
    });

    act(() => {
      rerender({ value: 'updated-3', delay: 1000 });
    });

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(result.current).toBe('updated-3');
  });

  it('should clear timeout on unmount', () => {
    const clearTimeoutSpy = jest.spyOn(window, 'clearTimeout');
    const { result, rerender, unmount } = renderHook(
      ({ value, delay }) => useThrottledValue(value, delay),
      {
        initialProps: { value: 'initial', delay: 1000 },
      }
    );

    act(() => {
      rerender({ value: 'updated', delay: 1000 });
    });

    act(() => {
      rerender({ value: 'updated-2', delay: 1000 });
    });

    unmount();
    jest.advanceTimersByTime(1000);

    expect(result.current).toBe('updated');
    expect(clearTimeoutSpy).toHaveBeenCalledTimes(1);
  });
});
