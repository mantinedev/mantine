import { act, renderHook } from '@testing-library/react';
import { useTimeout } from './use-timeout';

const defaultTimeout = 2000;

const callback = jest.fn();

const setupTimer = (timeout: number = defaultTimeout) => ({
  timeout,
  advanceTimerToNextTick: () => jest.advanceTimersByTime(timeout),
});

describe('@mantine/hooks/use-timeout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
    jest.spyOn(global, 'clearTimeout');
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('initialize', () => {
    const hook = renderHook(() => useTimeout(callback, defaultTimeout, { autoInvoke: false }));
    const { start, clear } = hook.result.current;

    expect(typeof start).toBe('function');
    expect(typeof clear).toBe('function');
  });

  it('callback should NOT fire before calling start function, if autoInvoke is false', () => {
    const { timeout, advanceTimerToNextTick } = setupTimer();
    renderHook(() => useTimeout(callback, timeout, { autoInvoke: false }));

    advanceTimerToNextTick();

    expect(callback).not.toHaveBeenCalled();
    expect(setTimeout).not.toHaveBeenCalled();
    expect(clearTimeout).not.toHaveBeenCalled();
  });

  it('callback should fire after calling start function, if autoInvoke is false', () => {
    const { timeout, advanceTimerToNextTick } = setupTimer();
    const hook = renderHook(() => useTimeout(callback, timeout, { autoInvoke: false }));

    act(() => {
      hook.result.current.start();
    });

    advanceTimerToNextTick();

    expect(callback).toHaveBeenCalled();
    expect(setTimeout).toHaveBeenCalled();
  });

  it('callback should fire without calling start when autoInvoke is true', () => {
    const { timeout, advanceTimerToNextTick } = setupTimer();
    renderHook(() => useTimeout(callback, timeout, { autoInvoke: true }));

    advanceTimerToNextTick();

    expect(callback).toHaveBeenCalled();
    expect(setTimeout).toHaveBeenCalled();
  });

  it('callback should be called when rerender is triggered before timeout', () => {
    const { timeout, advanceTimerToNextTick } = setupTimer();
    const { rerender, result } = renderHook(() => useTimeout(callback, timeout));

    result.current.start();

    rerender();

    advanceTimerToNextTick();

    expect(callback).toHaveBeenCalled();
    expect(setTimeout).toHaveBeenCalled();
  });

  it('timeout is cleared on calling clear', () => {
    const { timeout, advanceTimerToNextTick } = setupTimer(10);
    const hook = renderHook(() => useTimeout(callback, timeout, { autoInvoke: false }));

    act(() => {
      hook.result.current.start();
    });

    act(() => {
      hook.result.current.clear();
    });

    advanceTimerToNextTick();

    expect(callback).not.toHaveBeenCalled();
    expect(setTimeout).toHaveBeenCalled();
    expect(clearTimeout).toHaveBeenCalled();
  });

  it('start function passes parameters to callback', () => {
    const { timeout, advanceTimerToNextTick } = setupTimer(10);
    const hook = renderHook(() => useTimeout(callback, timeout));

    const MOCK_CALLBACK_VALUE = 'MOCK_CALLBACK_VALUE';
    act(() => {
      hook.result.current.start(MOCK_CALLBACK_VALUE);
    });

    advanceTimerToNextTick();

    expect(setTimeout).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledWith(MOCK_CALLBACK_VALUE);
  });

  it('can schedule the next timeout from its callback', () => {
    const calls: number[] = [];
    const hook = renderHook(() =>
      useTimeout((value: number) => {
        calls.push(value);
        if (value === 1) {
          hook.result.current.start(2);
        }
      }, 10)
    );

    hook.result.current.start(1);
    jest.advanceTimersByTime(10);
    expect(calls).toEqual([1]);

    jest.advanceTimersByTime(10);
    expect(calls).toEqual([1, 2]);
  });

  it('can clear a timeout restarted inside its callback', () => {
    const fn = jest.fn(() => {
      hook.result.current.clear();
      hook.result.current.start();
    });
    const hook = renderHook(() => useTimeout(fn, 10));

    hook.result.current.start();
    jest.advanceTimersByTime(10);
    expect(fn).toHaveBeenCalledTimes(1);

    hook.result.current.clear();
    jest.advanceTimersByTime(10);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('can start again after its callback throws', () => {
    const error = new Error('callback failed');
    const fn = jest.fn().mockImplementationOnce(() => {
      throw error;
    });
    const hook = renderHook(() => useTimeout(fn, 10));

    hook.result.current.start();
    expect(() => jest.advanceTimersByTime(10)).toThrow(error);

    hook.result.current.start();
    jest.advanceTimersByTime(10);
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it('does not schedule duplicate pending timeouts', () => {
    const fn = jest.fn();
    const hook = renderHook(() => useTimeout(fn, 10));

    hook.result.current.start('first');
    hook.result.current.start('second');
    jest.advanceTimersByTime(20);

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith('first');
  });
});
