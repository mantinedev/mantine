import { act, renderHook } from '@testing-library/react';
import { useThrottledState } from './use-throttled-state';

describe('useThrottledState', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should update value with throttling', () => {
    const hook = renderHook(() => useThrottledState(0, 100));
    act(() => {
      hook.result.current[1](1);
      hook.result.current[1](2);
      hook.result.current[1](3);
    });

    expect(hook.result.current[0]).toBe(1);

    jest.advanceTimersByTime(100);
    act(() => {
      hook.result.current[1](4);
    });

    expect(hook.result.current[0]).toBe(4);
  });

  it('should clear throttling timeout on unmount', () => {
    const hook = renderHook(() => useThrottledState(0, 100));

    act(() => {
      hook.result.current[1](1);
    });

    hook.unmount();
    jest.advanceTimersByTime(100);

    expect(hook.result.current[0]).toBe(1);
  });
});
