import { act, renderHook } from '@testing-library/react';
import { useThrottledState } from './use-throttled-state';

describe('@mantine/hooks/use-throttled-state', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test('should return initial value', () => {
    const { result } = renderHook(() => useThrottledState('initial', 100));
    expect(result.current[0]).toBe('initial');
  });

  test('should update state immediately if leading option is true', () => {
    const { result } = renderHook(() => useThrottledState('initial', 100, { leading: true }));
    act(() => {
      result.current[1]('new');
    });
    expect(result.current[0]).toBe('new');
  });

  test('should update state after specified wait time if leading option is false', () => {
    const { result } = renderHook(() => useThrottledState('initial', 100, { leading: false }));
    act(() => {
      result.current[1]('new');
    });
    expect(result.current[0]).toBe('initial');
    act(() => {
      jest.advanceTimersByTime(101);
    });
    expect(result.current[0]).toBe('new');
  });

  test('should update state once within specified wait time if leading option is false', () => {
    const { result } = renderHook(() => useThrottledState('initial', 100, { leading: false }));
    act(() => {
      result.current[1]('new1');
      result.current[1]('new2');
      result.current[1]('new3');
    });
    expect(result.current[0]).toBe('initial');
    act(() => {
      jest.advanceTimersByTime(101);
    });
    expect(result.current[0]).toBe('new3');
  });
});
