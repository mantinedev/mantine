import { act, renderHook } from '@testing-library/react';
import { useHoldRepeat } from './use-hold-repeat';

describe('@mantine/hooks/use-hold-repeat', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('fires the trigger once on start when delay/interval are not set', () => {
    const onTrigger = jest.fn();
    const { result } = renderHook(() => useHoldRepeat(onTrigger));

    act(() => result.current.start());
    expect(onTrigger).toHaveBeenCalledTimes(1);

    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(onTrigger).toHaveBeenCalledTimes(1);

    act(() => result.current.stop());
  });

  it('repeats after the delay, then at a constant numeric interval', () => {
    const onTrigger = jest.fn();
    const { result } = renderHook(() => useHoldRepeat(onTrigger, { delay: 500, interval: 100 }));

    act(() => result.current.start());
    expect(onTrigger).toHaveBeenCalledTimes(1);

    act(() => {
      jest.advanceTimersByTime(499);
    });
    expect(onTrigger).toHaveBeenCalledTimes(1);

    act(() => {
      jest.advanceTimersByTime(1);
    });
    expect(onTrigger).toHaveBeenCalledTimes(2);

    act(() => {
      jest.advanceTimersByTime(300);
    });
    expect(onTrigger).toHaveBeenCalledTimes(5);

    act(() => result.current.stop());
  });

  it('evaluates a function interval with a post-increment count starting at 2', () => {
    const onTrigger = jest.fn();
    const interval = jest.fn().mockReturnValue(100);
    const { result } = renderHook(() => useHoldRepeat(onTrigger, { delay: 500, interval }));

    act(() => result.current.start());
    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(interval).toHaveBeenNthCalledWith(1, 2);

    act(() => {
      jest.advanceTimersByTime(100);
    });
    expect(interval).toHaveBeenNthCalledWith(2, 3);

    act(() => {
      jest.advanceTimersByTime(100);
    });
    expect(interval).toHaveBeenNthCalledWith(3, 4);

    act(() => result.current.stop());
  });

  it('stop() clears the timer so no further triggers fire', () => {
    const onTrigger = jest.fn();
    const { result } = renderHook(() => useHoldRepeat(onTrigger, { delay: 500, interval: 100 }));

    act(() => result.current.start());
    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(onTrigger).toHaveBeenCalledTimes(2);

    act(() => result.current.stop());
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(onTrigger).toHaveBeenCalledTimes(2);
  });

  it('does not reschedule repeats when the trigger calls stop()', () => {
    let stop = () => {};
    const onTrigger = jest.fn(() => {
      if (onTrigger.mock.calls.length >= 2) {
        stop();
      }
    });
    const { result } = renderHook(() => useHoldRepeat(onTrigger, { delay: 100, interval: 100 }));
    stop = result.current.stop;

    act(() => result.current.start());
    act(() => {
      jest.advanceTimersByTime(100);
    });
    expect(onTrigger).toHaveBeenCalledTimes(2);

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(onTrigger).toHaveBeenCalledTimes(2);
  });

  it('does not schedule the delay timer when the first trigger calls stop()', () => {
    let stop = () => {};
    const onTrigger = jest.fn(() => stop());
    const { result } = renderHook(() => useHoldRepeat(onTrigger, { delay: 100, interval: 100 }));
    stop = result.current.stop;

    act(() => result.current.start());
    expect(onTrigger).toHaveBeenCalledTimes(1);

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(onTrigger).toHaveBeenCalledTimes(1);
  });

  it('clears a pending timeout on unmount', () => {
    const onTrigger = jest.fn();
    const { result, unmount } = renderHook(() =>
      useHoldRepeat(onTrigger, { delay: 500, interval: 100 })
    );

    act(() => result.current.start());
    expect(onTrigger).toHaveBeenCalledTimes(1);

    unmount();
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(onTrigger).toHaveBeenCalledTimes(1);
  });

  it('calls onStart and onStop once per hold', () => {
    const onStart = jest.fn();
    const onStop = jest.fn();
    const { result } = renderHook(() =>
      useHoldRepeat(() => {}, { delay: 500, interval: 100, onStart, onStop })
    );

    act(() => result.current.start());
    expect(onStart).toHaveBeenCalledTimes(1);
    expect(onStop).not.toHaveBeenCalled();

    act(() => {
      jest.advanceTimersByTime(700);
    });
    act(() => result.current.stop());
    expect(onStart).toHaveBeenCalledTimes(1);
    expect(onStop).toHaveBeenCalledTimes(1);
  });

  it('does not call onStop when stop() is called without an active hold', () => {
    const onStop = jest.fn();
    const { result } = renderHook(() => useHoldRepeat(() => {}, { onStop }));

    act(() => result.current.stop());
    expect(onStop).not.toHaveBeenCalled();
  });

  it('keeps start/stop identity stable across rerenders', () => {
    const { result, rerender } = renderHook(({ cb }) => useHoldRepeat(cb), {
      initialProps: { cb: () => {} },
    });
    const first = result.current;

    rerender({ cb: () => {} });
    expect(result.current.start).toBe(first.start);
    expect(result.current.stop).toBe(first.stop);
  });
});
