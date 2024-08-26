import { act, renderHook } from '@testing-library/react';
import { useIdle } from './use-idle';

describe('@mantine/hooks/use-idle', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('Correct initial return value', () => {
    const hook = renderHook(() => useIdle(1000));
    expect(hook.result.current).toBe(true);
  });

  it('Starts the timer immediately instead of waiting for the first event to happen', () => {
    const spy = jest.spyOn(window, 'setTimeout');
    expect(spy).not.toHaveBeenCalled();

    const hook = renderHook(() =>
      useIdle(1000, { initialState: false, events: ['click', 'keypress'] })
    );

    expect(hook.result.current).toBe(false);
    expect(spy).toHaveBeenCalledTimes(1);
    setTimeout(() => {
      expect(hook.result.current).toBe(true);
      expect(spy).toHaveBeenCalledTimes(2);
    }, 1001);
  });

  it('Returns correct value on firing keypress event', () => {
    const hook = renderHook(() => useIdle(1000));

    expect(hook.result.current).toBe(true);
    act(() => {
      document.dispatchEvent(new KeyboardEvent('keypress'));
    });

    expect(hook.result.current).toBe(false);
    setTimeout(() => {
      expect(hook.result.current).toBe(true);
    }, 1001);
  });

  it('Correct return value on mouse events', () => {
    const hook = renderHook(() => useIdle(1000));

    expect(hook.result.current).toBe(true);
    act(() => {
      document.dispatchEvent(new MouseEvent('mousemove'));
    });

    expect(hook.result.current).toBe(false);
    setTimeout(() => {
      expect(hook.result.current).toBe(true);
    }, 1001);
  });

  it('Correct return value on touch events', () => {
    const hook = renderHook(() => useIdle(1000));
    expect(hook.result.current).toBe(true);

    act(() => {
      document.dispatchEvent(new MouseEvent('touchmove'));
    });
    expect(hook.result.current).toBe(false);

    setTimeout(() => {
      expect(hook.result.current).toBe(true);
    }, 1001);
  });

  it('Correct return value on multiple consecutive events', () => {
    const hook = renderHook(() => useIdle(1000));
    expect(hook.result.current).toBe(true);

    act(() => {
      document.dispatchEvent(new TouchEvent('touchmove'));
    });
    expect(hook.result.current).toBe(false);

    setTimeout(() => {
      expect(hook.result.current).toBe(true);
    }, 1001);
    act(() => {
      document.dispatchEvent(new MouseEvent('mousemove'));
    });
    expect(hook.result.current).toBe(false);

    setTimeout(() => {
      expect(hook.result.current).toBe(true);
    }, 1001);
  });
});
