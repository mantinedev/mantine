import { act, renderHook } from '@testing-library/react';
import { useDebouncedEffect } from './use-debounced-effect';

describe('@mantine/hooks/use-debounced-effect', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('runs the effect after the delay, not immediately on mount', () => {
    const effect = jest.fn();
    renderHook(() => useDebouncedEffect(effect, [1], 100));

    expect(effect).not.toHaveBeenCalled();

    act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(effect).toHaveBeenCalledTimes(1);
  });

  it('debounces rapid dependency changes into a single run', () => {
    const effect = jest.fn();
    const { rerender } = renderHook(({ value }) => useDebouncedEffect(effect, [value], 100), {
      initialProps: { value: 0 },
    });

    act(() => {
      jest.advanceTimersByTime(50);
    });
    rerender({ value: 1 });

    act(() => {
      jest.advanceTimersByTime(50);
    });
    rerender({ value: 2 });

    expect(effect).not.toHaveBeenCalled();

    act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(effect).toHaveBeenCalledTimes(1);
  });

  it('runs cleanup before the next execution and on unmount', () => {
    const cleanup = jest.fn();
    const effect = jest.fn(() => cleanup);
    const { rerender, unmount } = renderHook(
      ({ value }) => useDebouncedEffect(effect, [value], 100),
      { initialProps: { value: 0 } }
    );

    act(() => {
      jest.advanceTimersByTime(100);
    });
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

  it('runs immediately on the leading edge when leading is true', () => {
    const effect = jest.fn();
    renderHook(() => useDebouncedEffect(effect, [1], { delay: 100, leading: true }));

    expect(effect).toHaveBeenCalledTimes(1);
  });

  it('guarantees a run within maxWait during continuous changes', () => {
    const effect = jest.fn();
    const { rerender } = renderHook(
      ({ value }) => useDebouncedEffect(effect, [value], { delay: 100, maxWait: 250 }),
      { initialProps: { value: 0 } }
    );

    for (let i = 1; i <= 4; i += 1) {
      act(() => {
        jest.advanceTimersByTime(80);
      });
      rerender({ value: i });
    }

    expect(effect).toHaveBeenCalled();
  });

  it('does not run a pending effect after unmount', () => {
    const effect = jest.fn();
    const { unmount } = renderHook(() => useDebouncedEffect(effect, [1], 100));

    unmount();
    act(() => {
      jest.advanceTimersByTime(200);
    });

    expect(effect).not.toHaveBeenCalled();
  });

  it('runs the latest effect closure', () => {
    const spy = jest.fn();
    const { rerender } = renderHook(
      ({ value }) => useDebouncedEffect(() => spy(value), [value], 100),
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

  it('reschedules the pending effect when options change before it fires', () => {
    const effect = jest.fn();
    const { rerender } = renderHook(({ delay }) => useDebouncedEffect(effect, [1], delay), {
      initialProps: { delay: 1000 },
    });

    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(effect).not.toHaveBeenCalled();

    rerender({ delay: 100 });
    act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(effect).toHaveBeenCalledTimes(1);
  });
});
