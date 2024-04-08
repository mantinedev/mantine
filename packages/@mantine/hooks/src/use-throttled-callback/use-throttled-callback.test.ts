import { renderHook } from '@testing-library/react';
import { useThrottledCallback } from './use-throttled-callback';

describe('@mantine/hooks/use-throttled-callback', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('throttles callback with given delay', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useThrottledCallback(callback, 100));
    result.current();
    result.current();
    result.current();
    expect(callback).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(100);
    result.current();
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it('calls callback with correct arguments', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useThrottledCallback(callback, 100));
    result.current(1);
    result.current(2);
    result.current(3);
    jest.advanceTimersByTime(100);
    expect(callback).toHaveBeenCalledWith(1);
  });
});
