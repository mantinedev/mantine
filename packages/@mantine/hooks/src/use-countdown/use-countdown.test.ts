import { act, renderHook } from '@testing-library/react';
import { useCountdown } from './use-countdown';

describe('@mantine/hooks/use-countdown', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  beforeEach(() => {
    jest.setSystemTime(new Date('2026-01-01T00:00:00.000Z'));
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('returns the initial count in countStart mode without starting automatically', () => {
    const hook = renderHook(() => useCountdown({ countStart: 3000 }));
    expect(hook.result.current.count).toBe(3000);
    expect(hook.result.current.running).toBe(false);
  });

  it('clamps a negative countStart to 0', () => {
    const hook = renderHook(() => useCountdown({ countStart: -500 }));
    expect(hook.result.current.count).toBe(0);
  });

  it('counts down without drift after start is called', () => {
    const hook = renderHook(() => useCountdown({ countStart: 3000, interval: 1000 }));

    act(() => hook.result.current.start());
    expect(hook.result.current.running).toBe(true);

    act(() => jest.advanceTimersByTime(1000));
    expect(hook.result.current.count).toBe(2000);

    act(() => jest.advanceTimersByTime(1000));
    expect(hook.result.current.count).toBe(1000);
  });

  it('clamps count to 0 and calls onComplete exactly once', () => {
    const onComplete = jest.fn();
    const hook = renderHook(() => useCountdown({ countStart: 2000, interval: 1000, onComplete }));

    act(() => hook.result.current.start());
    act(() => jest.advanceTimersByTime(3000));

    expect(hook.result.current.count).toBe(0);
    expect(hook.result.current.running).toBe(false);
    expect(onComplete).toHaveBeenCalledTimes(1);

    act(() => jest.advanceTimersByTime(2000));
    expect(onComplete).toHaveBeenCalledTimes(1);
  });

  it('calls onTick on each tick with the remaining count', () => {
    const onTick = jest.fn();
    const hook = renderHook(() => useCountdown({ countStart: 3000, interval: 1000, onTick }));

    act(() => hook.result.current.start());
    act(() => jest.advanceTimersByTime(2000));

    expect(onTick).toHaveBeenNthCalledWith(1, 2000);
    expect(onTick).toHaveBeenNthCalledWith(2, 1000);
  });

  it('stop keeps the current count and resumes from it', () => {
    const hook = renderHook(() => useCountdown({ countStart: 5000, interval: 1000 }));

    act(() => hook.result.current.start());
    act(() => jest.advanceTimersByTime(2000));
    expect(hook.result.current.count).toBe(3000);

    act(() => hook.result.current.stop());
    expect(hook.result.current.running).toBe(false);

    act(() => jest.advanceTimersByTime(5000));
    expect(hook.result.current.count).toBe(3000);

    act(() => hook.result.current.start());
    act(() => jest.advanceTimersByTime(1000));
    expect(hook.result.current.count).toBe(2000);
  });

  it('snapshots the accurate remaining time when stopped between ticks', () => {
    const hook = renderHook(() => useCountdown({ countStart: 5000, interval: 1000 }));

    act(() => hook.result.current.start());
    act(() => jest.advanceTimersByTime(1500));
    expect(hook.result.current.count).toBe(4000);

    act(() => hook.result.current.stop());
    expect(hook.result.current.count).toBe(3500);

    act(() => hook.result.current.start());
    act(() => jest.advanceTimersByTime(1000));
    expect(hook.result.current.count).toBe(2500);
  });

  it('reset stops the countdown and restores the initial count', () => {
    const hook = renderHook(() => useCountdown({ countStart: 5000, interval: 1000 }));

    act(() => hook.result.current.start());
    act(() => jest.advanceTimersByTime(2000));
    expect(hook.result.current.count).toBe(3000);

    act(() => hook.result.current.reset());
    expect(hook.result.current.count).toBe(5000);
    expect(hook.result.current.running).toBe(false);
  });

  it('restarts from countStart when reset and start are called together', () => {
    const hook = renderHook(() => useCountdown({ countStart: 5000, interval: 1000 }));

    act(() => hook.result.current.start());
    act(() => jest.advanceTimersByTime(2000));
    expect(hook.result.current.count).toBe(3000);

    act(() => {
      hook.result.current.reset();
      hook.result.current.start();
    });
    expect(hook.result.current.count).toBe(5000);

    act(() => jest.advanceTimersByTime(1000));
    expect(hook.result.current.count).toBe(4000);
  });

  it('ignores repeated start calls while running', () => {
    const hook = renderHook(() => useCountdown({ countStart: 5000, interval: 1000 }));

    act(() => hook.result.current.start());
    act(() => jest.advanceTimersByTime(2000));
    expect(hook.result.current.count).toBe(3000);

    act(() => hook.result.current.start());
    act(() => jest.advanceTimersByTime(1000));
    expect(hook.result.current.count).toBe(2000);
  });

  it('restarts from countStart after reaching 0 in countStart mode', () => {
    const hook = renderHook(() => useCountdown({ countStart: 2000, interval: 1000 }));

    act(() => hook.result.current.start());
    act(() => jest.advanceTimersByTime(2000));
    expect(hook.result.current.count).toBe(0);
    expect(hook.result.current.running).toBe(false);

    act(() => hook.result.current.start());
    expect(hook.result.current.count).toBe(2000);
    expect(hook.result.current.running).toBe(true);

    act(() => jest.advanceTimersByTime(1000));
    expect(hook.result.current.count).toBe(1000);
  });

  it('exposes formatted segments', () => {
    const hook = renderHook(() => useCountdown({ countStart: 90_061_500, interval: 1000 }));

    expect(hook.result.current.formatted).toEqual({
      days: 1,
      hours: 1,
      minutes: 1,
      seconds: 1,
      milliseconds: 500,
    });
  });

  it('auto-starts and computes remaining time in targetDate mode', () => {
    const targetDate = new Date(Date.now() + 5000);
    const hook = renderHook(() => useCountdown({ targetDate, interval: 1000 }));

    expect(hook.result.current.running).toBe(true);
    expect(hook.result.current.count).toBe(5000);

    act(() => jest.advanceTimersByTime(2000));
    expect(hook.result.current.count).toBe(3000);
  });

  it('fires onComplete when a target date is reached', () => {
    const onComplete = jest.fn();
    const targetDate = new Date(Date.now() + 3000);
    const hook = renderHook(() => useCountdown({ targetDate, interval: 1000, onComplete }));

    act(() => jest.advanceTimersByTime(3000));
    expect(hook.result.current.count).toBe(0);
    expect(hook.result.current.running).toBe(false);
    expect(onComplete).toHaveBeenCalledTimes(1);
  });

  it('recomputes the remaining time when targetDate changes', () => {
    const initialTarget = new Date(Date.now() + 3000);
    const hook = renderHook(({ targetDate }) => useCountdown({ targetDate, interval: 1000 }), {
      initialProps: { targetDate: initialTarget },
    });

    expect(hook.result.current.count).toBe(3000);

    const nextTarget = new Date(Date.now() + 10_000);
    act(() => hook.rerender({ targetDate: nextTarget }));
    expect(hook.result.current.count).toBe(10_000);
  });

  it('auto-starts when targetDate is provided after being undefined', () => {
    const hook = renderHook(
      ({ targetDate }: { targetDate?: Date }) => useCountdown({ targetDate, interval: 1000 }),
      { initialProps: {} as { targetDate?: Date } }
    );

    expect(hook.result.current.running).toBe(false);

    act(() => hook.rerender({ targetDate: new Date(Date.now() + 5000) }));
    expect(hook.result.current.running).toBe(true);
    expect(hook.result.current.count).toBe(5000);

    act(() => jest.advanceTimersByTime(2000));
    expect(hook.result.current.count).toBe(3000);
  });

  it('completes immediately when targetDate moves into the past while running', () => {
    const onComplete = jest.fn();
    const hook = renderHook(
      ({ targetDate }: { targetDate?: Date }) =>
        useCountdown({ targetDate, interval: 1000, onComplete }),
      { initialProps: { targetDate: new Date(Date.now() + 5000) } as { targetDate?: Date } }
    );

    expect(hook.result.current.running).toBe(true);

    act(() => hook.rerender({ targetDate: new Date(Date.now() - 1000) }));
    expect(hook.result.current.count).toBe(0);
    expect(hook.result.current.running).toBe(false);
    expect(onComplete).toHaveBeenCalledTimes(1);
  });

  it('stops the countdown when targetDate is removed', () => {
    const hook = renderHook(
      ({ targetDate }: { targetDate?: Date }) => useCountdown({ targetDate, interval: 1000 }),
      { initialProps: { targetDate: new Date(Date.now() + 5000) } as { targetDate?: Date } }
    );

    expect(hook.result.current.running).toBe(true);

    act(() => hook.rerender({ targetDate: undefined }));
    expect(hook.result.current.running).toBe(false);
  });

  it('starts from countStart after switching away from targetDate mode', () => {
    const hook = renderHook(
      ({ targetDate, countStart }: { targetDate?: Date; countStart?: number }) =>
        useCountdown({ targetDate, countStart, interval: 1000 }),
      {
        initialProps: { targetDate: new Date(Date.now() + 30_000) } as {
          targetDate?: Date;
          countStart?: number;
        },
      }
    );

    expect(hook.result.current.count).toBe(30_000);

    act(() => hook.rerender({ targetDate: undefined, countStart: 8000 }));
    expect(hook.result.current.running).toBe(false);
    expect(hook.result.current.count).toBe(8000);

    act(() => hook.result.current.start());
    act(() => jest.advanceTimersByTime(1000));
    expect(hook.result.current.count).toBe(7000);
  });
});
