import { act, renderHook } from '@testing-library/react';
import {
  useThrottledCallback,
  useThrottledCallbackWithClearTimeout,
} from './use-throttled-callback';

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

  it('throttles calls made from the callback itself', () => {
    const callback = jest.fn((value: number) => {
      if (value < 3) {
        result.current(value + 1);
      }
    });
    const { result } = renderHook(() => useThrottledCallback(callback, 100));

    act(() => result.current(1));
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenLastCalledWith(1);

    act(() => jest.advanceTimersByTime(100));
    expect(callback).toHaveBeenCalledTimes(2);
    expect(callback).toHaveBeenLastCalledWith(2);

    act(() => jest.advanceTimersByTime(100));
    expect(callback).toHaveBeenCalledTimes(3);
    expect(callback).toHaveBeenLastCalledWith(3);
  });

  it('allows another call after the callback throws', () => {
    const error = new Error('callback failed');
    const callback = jest.fn().mockImplementationOnce(() => {
      throw error;
    });
    const { result } = renderHook(() => useThrottledCallback(callback, 100));

    expect(() => result.current(1)).toThrow(error);
    act(() => result.current(2));
    expect(callback).toHaveBeenCalledTimes(2);
    expect(callback).toHaveBeenLastCalledWith(2);
  });

  it('allows another call after a trailing callback throws', () => {
    const error = new Error('trailing callback failed');
    const callback = jest
      .fn()
      .mockImplementationOnce(() => {})
      .mockImplementationOnce(() => {
        throw error;
      });
    const { result } = renderHook(() => useThrottledCallback(callback, 100));

    act(() => {
      result.current(1);
      result.current(2);
    });
    expect(() => jest.advanceTimersByTime(100)).toThrow(error);
    act(() => result.current(3));
    expect(callback).toHaveBeenCalledTimes(3);
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

  it('resets active state and permits subsequent calls after clearTimeout', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useThrottledCallbackWithClearTimeout(callback, 100));

    act(() => {
      result.current[0](1);
    });
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(1);

    act(() => {
      result.current[1]();
    });

    act(() => {
      result.current[0](2);
    });
    expect(callback).toHaveBeenCalledTimes(2);
    expect(callback).toHaveBeenCalledWith(2);
  });
});
