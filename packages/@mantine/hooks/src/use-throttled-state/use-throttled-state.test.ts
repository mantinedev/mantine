import { renderHook } from '@testing-library/react';
import { useThrottledState } from './use-throttled-state';

describe('@mantine/hooks/use-throttled-state', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('throttles state updates with given delay', () => {
    const { result, rerender } = renderHook(() => useThrottledState(1, 100));
    expect(result.current).toBe(1);
    rerender();
    expect(result.current).toBe(1);
    rerender();
    expect(result.current).toBe(1);
    jest.advanceTimersByTime(100);
    rerender();
    expect(result.current).toBe(1);
  });

  it('updates state with correct value', () => {
    const { result, rerender } = renderHook(() => useThrottledState(1, 100));
    rerender();
    rerender();
    rerender();
    jest.advanceTimersByTime(100);
    rerender();
    expect(result.current).toBe(1);
  });
});
