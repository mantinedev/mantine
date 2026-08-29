import { act, renderHook } from '@testing-library/react';
import { useInterval } from './use-interval';

const defaultTimeout = 2000;

const callback = jest.fn();

const setupTimer = (timeout: number = defaultTimeout) => ({
  timeout,
  advanceTimerToNextTick: () => jest.advanceTimersByTime(timeout),
});

const setupHook = (cb: (...args: any[]) => void = callback, timeout: number = defaultTimeout) =>
  renderHook(() => useInterval(cb, timeout));

describe('@mantine/hooks/use-interval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setInterval');
    jest.spyOn(global, 'clearInterval');
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('initialize', () => {
    const { result } = setupHook();
    const { start, stop, toggle, active } = result.current;

    expect(typeof active).toBe('boolean');
    expect(typeof start).toBe('function');
    expect(typeof stop).toBe('function');
    expect(typeof toggle).toBe('function');
  });

  it('should run after timeout exceeded', () => {
    const { advanceTimerToNextTick } = setupTimer();
    const { result } = setupHook();

    advanceTimerToNextTick();
    expect(callback).not.toHaveBeenCalled();
    expect(result.current.active).toBe(false);

    act(() => {
      result.current.start();
    });

    expect(setInterval).toHaveBeenCalledWith(expect.any(Function), defaultTimeout);

    expect(result.current.active).toBe(true);

    advanceTimerToNextTick();
    expect(callback).toHaveBeenCalledTimes(1);

    advanceTimerToNextTick();
    expect(callback).toHaveBeenCalledTimes(2);

    advanceTimerToNextTick();
    expect(callback).toHaveBeenCalledTimes(3);
  });

  it('should stop after stop fn call', () => {
    const { advanceTimerToNextTick } = setupTimer();

    const { result } = setupHook();

    advanceTimerToNextTick();
    expect(callback).not.toHaveBeenCalled();
    expect(result.current.active).toBe(false);

    act(() => {
      result.current.start();
    });
    expect(setInterval).toHaveBeenCalledWith(expect.any(Function), defaultTimeout);

    advanceTimerToNextTick();
    expect(callback).toHaveBeenCalledTimes(1);
    expect(result.current.active).toBe(true);

    act(() => {
      result.current.stop();
    });

    expect(clearInterval).toHaveBeenCalled();

    expect(result.current.active).toBe(false);

    advanceTimerToNextTick();
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should not restart the interval when fn identity changes between renders', () => {
    const fn = jest.fn();
    // A fresh inline arrow on every render, which is how the hook is usually called.
    const { result, rerender } = renderHook(() => useInterval(() => fn(), defaultTimeout));

    act(() => {
      result.current.start();
    });

    act(() => {
      jest.advanceTimersByTime(defaultTimeout / 2);
    });
    rerender();
    act(() => {
      jest.advanceTimersByTime(defaultTimeout / 2);
    });

    // Restarting on the re-render would have reset the timer half way, so the tick
    // would never arrive for a component that re-renders faster than `interval`.
    expect(fn).toHaveBeenCalledTimes(1);
    expect(result.current.active).toBe(true);
  });

  it('should call the latest fn after a re-render', () => {
    const first = jest.fn();
    const second = jest.fn();
    const { result, rerender } = renderHook(({ fn }) => useInterval(fn, defaultTimeout), {
      initialProps: { fn: first },
    });

    act(() => {
      result.current.start();
    });

    rerender({ fn: second });

    act(() => {
      jest.advanceTimersByTime(defaultTimeout);
    });

    expect(second).toHaveBeenCalledTimes(1);
    expect(first).not.toHaveBeenCalled();
  });

  it('should toggle between active states', () => {
    const { advanceTimerToNextTick } = setupTimer();

    const { result } = setupHook();
    advanceTimerToNextTick();
    expect(callback).not.toHaveBeenCalled();
    expect(result.current.active).toBe(false);

    act(() => {
      result.current.toggle();
    });
    expect(setInterval).toHaveBeenCalledWith(expect.any(Function), defaultTimeout);

    advanceTimerToNextTick();
    expect(callback).toHaveBeenCalledTimes(1);
    expect(result.current.active).toBe(true);

    act(() => {
      result.current.toggle();
    });

    expect(clearInterval).toHaveBeenCalled();

    expect(result.current.active).toBe(false);

    advanceTimerToNextTick();
    expect(callback).toHaveBeenCalledTimes(1);

    advanceTimerToNextTick();
    expect(callback).toHaveBeenCalledTimes(1);

    act(() => {
      result.current.toggle();
    });

    expect(setInterval).toHaveBeenCalledWith(expect.any(Function), defaultTimeout);

    advanceTimerToNextTick();
    expect(callback).toHaveBeenCalledTimes(2);

    advanceTimerToNextTick();
    expect(callback).toHaveBeenCalledTimes(3);
  });
});
