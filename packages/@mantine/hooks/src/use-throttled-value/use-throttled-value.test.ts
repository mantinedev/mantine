import { act, renderHook } from '@testing-library/react';
import { useThrottledValue } from './use-throttled-value';

describe('useThrottledValue', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('returns the initial value', () => {
    const { result } = renderHook(() => useThrottledValue(10, 100));
    expect(result.current).toBe(10);
  });

  it('updates the throttled value after delay', () => {
    const { result, rerender } = renderHook(({ value, delay }) => useThrottledValue(value, delay), {
      initialProps: { value: 10, delay: 100 },
    });

    expect(result.current).toBe(10);

    act(() => {
      rerender({ value: 20, delay: 100 });
      jest.advanceTimersByTime(50);
    });

    expect(result.current).toBe(10);

    act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(result.current).toBe(20);
  });

  it('does not update the throttled value if value changes frequently', () => {
    const { result, rerender } = renderHook(({ value, delay }) => useThrottledValue(value, delay), {
      initialProps: { value: 10, delay: 100 },
    });

    expect(result.current).toBe(10);

    act(() => {
      rerender({ value: 20, delay: 100 });
      jest.advanceTimersByTime(50);
    });

    expect(result.current).toBe(10);

    act(() => {
      rerender({ value: 30, delay: 100 });
      jest.advanceTimersByTime(50);
    });

    expect(result.current).toBe(10);
  });
});
