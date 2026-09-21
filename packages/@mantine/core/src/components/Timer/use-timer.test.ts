import { act, renderHook } from '@testing-library/react';
import { tests } from '@mantine-tests/core';
import { useTimer } from './use-timer';

describe('@mantine/core/useTimer', () => {
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

  tests.itSupportsControllerMemoization({
    hook: () => useTimer({ startMs: 5000 }),
    actions: ['start', 'pause', 'resume', 'reset', 'restart'],
    changeState: (controller) => controller.start(),
  });

  it('returns the initial value without starting automatically', () => {
    const hook = renderHook(() => useTimer({ startMs: 5000 }));
    expect(hook.result.current.value.totalMs).toBe(5000);
    expect(hook.result.current.running).toBe(false);
    expect(hook.result.current.paused).toBe(false);
  });

  it('counts up as a stopwatch without drift', () => {
    const hook = renderHook(() => useTimer({ interval: 1000 }));

    act(() => hook.result.current.start());
    expect(hook.result.current.running).toBe(true);

    act(() => jest.advanceTimersByTime(1000));
    expect(hook.result.current.value.totalMs).toBe(1000);

    act(() => jest.advanceTimersByTime(2000));
    expect(hook.result.current.value.totalMs).toBe(3000);
  });

  it('counts down when countdown is set', () => {
    const hook = renderHook(() => useTimer({ countdown: true, startMs: 3000, interval: 1000 }));

    act(() => hook.result.current.start());
    act(() => jest.advanceTimersByTime(1000));
    expect(hook.result.current.value.totalMs).toBe(2000);

    act(() => jest.advanceTimersByTime(1000));
    expect(hook.result.current.value.totalMs).toBe(1000);
  });

  it('clamps the countdown to 0 and calls onComplete exactly once', () => {
    const onComplete = jest.fn();
    const hook = renderHook(() =>
      useTimer({ countdown: true, startMs: 2000, interval: 1000, onComplete })
    );

    act(() => hook.result.current.start());
    act(() => jest.advanceTimersByTime(3000));

    expect(hook.result.current.value.totalMs).toBe(0);
    expect(hook.result.current.running).toBe(false);
    expect(onComplete).toHaveBeenCalledTimes(1);

    act(() => jest.advanceTimersByTime(2000));
    expect(onComplete).toHaveBeenCalledTimes(1);
  });

  it('completes a countdown to a non-zero target with the correct value and progress', () => {
    const onComplete = jest.fn();
    const hook = renderHook(() =>
      useTimer({ countdown: true, startMs: 5000, targetMs: 500, interval: 1000, onComplete })
    );

    act(() => hook.result.current.start());
    act(() => jest.advanceTimersByTime(5000));

    expect(hook.result.current.value.totalMs).toBe(500);
    expect(hook.result.current.progress).toBe(1);
    expect(onComplete).toHaveBeenCalledTimes(1);
  });

  it('stops the stopwatch when targetMs is reached', () => {
    const onComplete = jest.fn();
    const hook = renderHook(() => useTimer({ targetMs: 2000, interval: 1000, onComplete }));

    act(() => hook.result.current.start());
    act(() => jest.advanceTimersByTime(2000));

    expect(hook.result.current.value.totalMs).toBe(2000);
    expect(hook.result.current.running).toBe(false);
    expect(onComplete).toHaveBeenCalledTimes(1);
  });

  it('completes exactly at the boundary for durations that are not a multiple of interval', () => {
    const onComplete = jest.fn();
    const hook = renderHook(() =>
      useTimer({ countdown: true, startMs: 1500, interval: 1000, onComplete })
    );

    act(() => hook.result.current.start());

    act(() => jest.advanceTimersByTime(1000));
    expect(hook.result.current.running).toBe(true);
    expect(onComplete).not.toHaveBeenCalled();

    act(() => jest.advanceTimersByTime(500));
    expect(hook.result.current.value.totalMs).toBe(0);
    expect(hook.result.current.running).toBe(false);
    expect(onComplete).toHaveBeenCalledTimes(1);
  });

  it('calls onTick on each tick with the current value', () => {
    const onTick = jest.fn();
    const hook = renderHook(() =>
      useTimer({ countdown: true, startMs: 3000, interval: 1000, onTick })
    );

    act(() => hook.result.current.start());
    act(() => jest.advanceTimersByTime(2000));

    expect(onTick).toHaveBeenNthCalledWith(1, expect.objectContaining({ totalMs: 2000 }));
    expect(onTick).toHaveBeenNthCalledWith(2, expect.objectContaining({ totalMs: 1000 }));
  });

  it('pauses keeping the value and resumes from it', () => {
    const hook = renderHook(() => useTimer({ interval: 1000 }));

    act(() => hook.result.current.start());
    act(() => jest.advanceTimersByTime(2000));
    expect(hook.result.current.value.totalMs).toBe(2000);

    act(() => hook.result.current.pause());
    expect(hook.result.current.running).toBe(false);
    expect(hook.result.current.paused).toBe(true);

    act(() => jest.advanceTimersByTime(5000));
    expect(hook.result.current.value.totalMs).toBe(2000);

    act(() => hook.result.current.resume());
    expect(hook.result.current.running).toBe(true);

    act(() => jest.advanceTimersByTime(1000));
    expect(hook.result.current.value.totalMs).toBe(3000);
  });

  it('reset returns the value to startMs and stops', () => {
    const hook = renderHook(() => useTimer({ countdown: true, startMs: 3000, interval: 1000 }));

    act(() => hook.result.current.start());
    act(() => jest.advanceTimersByTime(1000));
    expect(hook.result.current.value.totalMs).toBe(2000);

    act(() => hook.result.current.reset());
    expect(hook.result.current.value.totalMs).toBe(3000);
    expect(hook.result.current.running).toBe(false);
    expect(hook.result.current.paused).toBe(false);
  });

  it('restart resets the value and starts again', () => {
    const hook = renderHook(() => useTimer({ countdown: true, startMs: 3000, interval: 1000 }));

    act(() => hook.result.current.start());
    act(() => jest.advanceTimersByTime(2000));
    expect(hook.result.current.value.totalMs).toBe(1000);

    act(() => hook.result.current.restart());
    expect(hook.result.current.value.totalMs).toBe(3000);
    expect(hook.result.current.running).toBe(true);

    act(() => jest.advanceTimersByTime(1000));
    expect(hook.result.current.value.totalMs).toBe(2000);
  });

  it('reschedules ticks when restarted while running', () => {
    const onTick = jest.fn();
    const hook = renderHook(() =>
      useTimer({ countdown: true, startMs: 10_000, interval: 1000, onTick })
    );

    act(() => hook.result.current.start());
    act(() => jest.advanceTimersByTime(500));
    act(() => hook.result.current.restart());
    onTick.mockClear();

    // 500ms after restart the previous run's timeout must not fire
    act(() => jest.advanceTimersByTime(500));
    expect(onTick).not.toHaveBeenCalled();

    // first tick lands a full interval after the restart
    act(() => jest.advanceTimersByTime(500));
    expect(onTick).toHaveBeenCalledTimes(1);
  });

  it('starts automatically when autoStart is set', () => {
    const hook = renderHook(() => useTimer({ interval: 1000, autoStart: true }));
    expect(hook.result.current.running).toBe(true);

    act(() => jest.advanceTimersByTime(1000));
    expect(hook.result.current.value.totalMs).toBe(1000);
  });

  it('computes progress from 0 to 1 in countdown mode', () => {
    const hook = renderHook(() => useTimer({ countdown: true, startMs: 4000, interval: 1000 }));
    expect(hook.result.current.progress).toBe(0);

    act(() => hook.result.current.start());
    act(() => jest.advanceTimersByTime(1000));
    expect(hook.result.current.progress).toBe(0.25);

    act(() => jest.advanceTimersByTime(3000));
    expect(hook.result.current.progress).toBe(1);
  });

  it('returns 0 progress for an open-ended stopwatch', () => {
    const hook = renderHook(() => useTimer({ interval: 1000 }));

    act(() => hook.result.current.start());
    act(() => jest.advanceTimersByTime(1000));
    expect(hook.result.current.progress).toBe(0);
  });

  it('splits the value into time segments', () => {
    const hook = renderHook(() => useTimer({ startMs: (25 * 60 + 30) * 1000 + 500 }));
    expect(hook.result.current.value).toMatchObject({
      days: 0,
      hours: 0,
      minutes: 25,
      seconds: 30,
      milliseconds: 500,
    });
  });

  it('resets when startMs changes', () => {
    const hook = renderHook(({ startMs }) => useTimer({ startMs, interval: 1000 }), {
      initialProps: { startMs: 1000 },
    });

    act(() => hook.result.current.start());
    act(() => jest.advanceTimersByTime(1000));
    expect(hook.result.current.value.totalMs).toBe(2000);

    act(() => hook.rerender({ startMs: 5000 }));
    expect(hook.result.current.value.totalMs).toBe(5000);
    expect(hook.result.current.running).toBe(false);
  });

  it('completes immediately when starting an already-finished countdown', () => {
    const onComplete = jest.fn();
    const hook = renderHook(() => useTimer({ countdown: true, startMs: 0, onComplete }));

    act(() => hook.result.current.start());
    expect(hook.result.current.running).toBe(false);
    expect(onComplete).toHaveBeenCalledTimes(1);
  });

  it('exposes the parse helper', () => {
    expect(useTimer.parse(90 * 1000)).toBe(90000);
    expect(useTimer.parse({ minutes: 25 })).toBe(1_500_000);
    expect(useTimer.parse({ hours: 1, minutes: 30, seconds: 15 })).toBe(5_415_000);
  });
});
