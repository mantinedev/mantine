import { act, renderHook } from '@testing-library/react';
import { useThrottledEffect } from './use-throttled-effect';

describe('@mantine/hooks/use-throttled-effect', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('runs the effect immediately on the leading edge', () => {
    const effect = jest.fn();
    renderHook(() => useThrottledEffect(effect, [1], 100));

    expect(effect).toHaveBeenCalledTimes(1);
  });

  it('throttles rapid dependency changes', () => {
    const effect = jest.fn();
    const { rerender } = renderHook(({ value }) => useThrottledEffect(effect, [value], 100), {
      initialProps: { value: 0 },
    });

    expect(effect).toHaveBeenCalledTimes(1);

    rerender({ value: 1 });
    rerender({ value: 2 });
    expect(effect).toHaveBeenCalledTimes(1);

    act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(effect).toHaveBeenCalledTimes(2);
  });

  it('runs cleanup before the next execution and on unmount', () => {
    const cleanup = jest.fn();
    const effect = jest.fn(() => cleanup);
    const { rerender, unmount } = renderHook(
      ({ value }) => useThrottledEffect(effect, [value], 100),
      { initialProps: { value: 0 } }
    );

    expect(effect).toHaveBeenCalledTimes(1);
    expect(cleanup).not.toHaveBeenCalled();

    rerender({ value: 1 });
    act(() => {
      jest.advanceTimersByTime(100);
    });
    expect(effect).toHaveBeenCalledTimes(2);
    expect(cleanup).toHaveBeenCalledTimes(1);

    unmount();
    expect(cleanup).toHaveBeenCalledTimes(2);
  });

  it('does not run a pending effect after unmount', () => {
    const effect = jest.fn();
    const { rerender, unmount } = renderHook(
      ({ value }) => useThrottledEffect(effect, [value], 100),
      { initialProps: { value: 0 } }
    );

    expect(effect).toHaveBeenCalledTimes(1);
    rerender({ value: 1 });
    unmount();

    act(() => {
      jest.advanceTimersByTime(200);
    });

    expect(effect).toHaveBeenCalledTimes(1);
  });

  it('runs the latest effect closure', () => {
    const spy = jest.fn();
    const { rerender } = renderHook(
      ({ value }) => useThrottledEffect(() => spy(value), [value], 100),
      {
        initialProps: { value: 0 },
      }
    );

    rerender({ value: 5 });
    act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(spy).toHaveBeenLastCalledWith(5);
  });
});
