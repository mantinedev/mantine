import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
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
    const { timeout, advanceTimerToNextTick } = setupTimer(null);
    renderHook(() => useTimeout(callback, timeout, { autoInvoke: true }));

    advanceTimerToNextTick();

    expect(callback).toHaveBeenCalled();
    expect(setTimeout).toHaveBeenCalled();
  });

  it('callback should fire without calling start when autoInvoke is true and delay changed', () => {
    const { timeout, advanceTimerToNextTick } = setupTimer();
    const hook = renderHook((props) => useTimeout(callback, props.timeout, { autoInvoke: true }), {
      initialProps: {
        timeout,
      },
    });

    advanceTimerToNextTick();

    expect(callback).toHaveBeenCalled();
    expect(setTimeout).toHaveBeenCalled();

    jest.clearAllMocks();

    act(() => {
      hook.rerender({ timeout: 1000 });
    });

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
    expect(callback).toHaveBeenCalledWith([MOCK_CALLBACK_VALUE]);
  });

  it('start and clear functions remain memoized across re-renders', () => {
    const { timeout, advanceTimerToNextTick } = setupTimer(10);
    const hook = renderHook(() => useTimeout(callback, timeout));

    const { clear, start } = hook.result.current;

    act(() => {
      hook.rerender();
    });

    expect(hook.result.current.clear).toEqual(clear);
    expect(hook.result.current.start).toEqual(start);
    advanceTimerToNextTick();
  });
});
