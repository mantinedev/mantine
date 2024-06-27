import { act, renderHook } from '@testing-library/react';
import { useThrottledCallback } from './use-throttled-callback';

describe('useThrottledCallback', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should throttle the callback', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useThrottledCallback(callback, 100));

    act(() => {
      result.current(1);
      result.current(2);
      jest.advanceTimersByTime(50);
      result.current(3);
      jest.advanceTimersByTime(100);
    });

    expect(callback).toHaveBeenCalledTimes(2);
    expect(callback).toHaveBeenLastCalledWith(3);
  });

  it('should allow callback after throttle period', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useThrottledCallback(callback, 100));

    act(() => {
      result.current();
      jest.advanceTimersByTime(100);
      result.current();
    });

    expect(callback).toHaveBeenCalledTimes(2);
  });

  it('should call the callback with correct arguments', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useThrottledCallback(callback, 100));

    act(() => {
      result.current('test');
      jest.advanceTimersByTime(100);
    });

    expect(callback).toHaveBeenCalledWith('test');
  });
});
