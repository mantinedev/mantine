import { Activity } from 'react';
import { act, render, renderHook } from '@testing-library/react';
import { useCountdown, UseCountdownOptions, UseCountdownReturnValue } from './use-countdown';

interface TargetProps {
  targetDate?: Date | string;
}

function renderInActivity(options: UseCountdownOptions) {
  const result: { current: UseCountdownReturnValue } = { current: null as any };

  function Probe() {
    result.current = useCountdown(options);
    return null;
  }

  const view = (mode: 'visible' | 'hidden') => (
    <Activity mode={mode}>
      <Probe />
    </Activity>
  );
  const utils = render(view('visible'));

  return {
    result,
    setMode: (mode: 'visible' | 'hidden') => utils.rerender(view(mode)),
  };
}

describe('@mantine/hooks/use-countdown', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  beforeEach(() => {
    jest.setSystemTime(new Date('2026-01-01T00:00:00.000Z'));
  });

  afterEach(() => {
    jest.restoreAllMocks();
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

  it('restarts from countStart after a paused and resumed run reaches 0', () => {
    const hook = renderHook(() => useCountdown({ countStart: 10_000, interval: 1000 }));

    act(() => hook.result.current.start());
    act(() => jest.advanceTimersByTime(3000));
    act(() => hook.result.current.stop());
    expect(hook.result.current.count).toBe(7000);

    act(() => hook.result.current.start());
    act(() => jest.advanceTimersByTime(7000));
    expect(hook.result.current.count).toBe(0);
    expect(hook.result.current.running).toBe(false);

    act(() => hook.result.current.start());
    expect(hook.result.current.count).toBe(10_000);
  });

  it('restarts from the new countStart after a run finished while countStart changed', () => {
    const hook = renderHook(({ countStart }) => useCountdown({ countStart, interval: 1000 }), {
      initialProps: { countStart: 5000 },
    });

    act(() => hook.result.current.start());
    hook.rerender({ countStart: 8000 });
    act(() => jest.advanceTimersByTime(5000));
    expect(hook.result.current.count).toBe(0);

    act(() => hook.result.current.start());
    expect(hook.result.current.count).toBe(8000);
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
      ({ targetDate }: TargetProps) => useCountdown({ targetDate, interval: 1000 }),
      { initialProps: {} as TargetProps }
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
      ({ targetDate }: TargetProps) => useCountdown({ targetDate, interval: 1000, onComplete }),
      { initialProps: { targetDate: new Date(Date.now() + 5000) } as TargetProps }
    );

    expect(hook.result.current.running).toBe(true);

    act(() => hook.rerender({ targetDate: new Date(Date.now() - 1000) }));
    expect(hook.result.current.count).toBe(0);
    expect(hook.result.current.running).toBe(false);
    expect(onComplete).toHaveBeenCalledTimes(1);
  });

  it('stops the countdown when targetDate is removed', () => {
    const hook = renderHook(
      ({ targetDate }: TargetProps) => useCountdown({ targetDate, interval: 1000 }),
      { initialProps: { targetDate: new Date(Date.now() + 5000) } as TargetProps }
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

  it('starts automatically in countStart mode when autoStart is true', () => {
    const hook = renderHook(() => useCountdown({ countStart: 3000, autoStart: true }));
    expect(hook.result.current.running).toBe(true);

    act(() => jest.advanceTimersByTime(1000));
    expect(hook.result.current.count).toBe(2000);
  });

  it('reset in targetDate mode stops and restores the time remaining until targetDate', () => {
    const targetDate = new Date(Date.now() + 10_000);
    const hook = renderHook(() => useCountdown({ targetDate, interval: 1000 }));

    act(() => jest.advanceTimersByTime(3000));
    expect(hook.result.current.count).toBe(7000);

    act(() => hook.result.current.reset());
    expect(hook.result.current.running).toBe(false);
    expect(hook.result.current.count).toBe(7000);

    act(() => jest.advanceTimersByTime(2000));
    expect(hook.result.current.count).toBe(7000);
  });

  it('does not start in targetDate mode when autoStart is false until start is called', () => {
    const targetDate = new Date(Date.now() + 10_000);
    const hook = renderHook(() => useCountdown({ targetDate, interval: 1000, autoStart: false }));

    expect(hook.result.current.running).toBe(false);
    expect(hook.result.current.count).toBe(10_000);

    act(() => jest.advanceTimersByTime(2000));
    act(() => hook.result.current.start());
    expect(hook.result.current.running).toBe(true);
    expect(hook.result.current.count).toBe(8000);

    act(() => jest.advanceTimersByTime(1000));
    expect(hook.result.current.count).toBe(7000);
  });

  it('clears the timeout on unmount', () => {
    const clearTimeoutSpy = jest.spyOn(window, 'clearTimeout');
    const onTick = jest.fn();
    const hook = renderHook(() => useCountdown({ countStart: 5000, autoStart: true, onTick }));

    clearTimeoutSpy.mockClear();
    hook.unmount();
    expect(clearTimeoutSpy).toHaveBeenCalled();

    act(() => jest.advanceTimersByTime(3000));
    expect(onTick).not.toHaveBeenCalled();
    clearTimeoutSpy.mockRestore();
  });

  it('does not restart a stopped countdown when Activity shows the tree again', () => {
    const view = renderInActivity({ countStart: 5000, autoStart: true });

    act(() => jest.advanceTimersByTime(2000));
    act(() => view.result.current.stop());
    expect(view.result.current.count).toBe(3000);

    act(() => view.setMode('hidden'));
    act(() => view.setMode('visible'));
    expect(view.result.current.running).toBe(false);
    expect(view.result.current.count).toBe(3000);
  });

  it('does not restart a finished countdown when Activity shows the tree again', () => {
    const onComplete = jest.fn();
    const view = renderInActivity({ countStart: 2000, autoStart: true, onComplete });

    act(() => jest.advanceTimersByTime(2000));
    expect(view.result.current.count).toBe(0);
    expect(onComplete).toHaveBeenCalledTimes(1);

    act(() => view.setMode('hidden'));
    act(() => view.setMode('visible'));
    act(() => jest.advanceTimersByTime(3000));
    expect(view.result.current.running).toBe(false);
    expect(view.result.current.count).toBe(0);
    expect(onComplete).toHaveBeenCalledTimes(1);
  });

  it('keeps the end timestamp of a running countdown when Activity shows the tree again', () => {
    const view = renderInActivity({ countStart: 10_000, autoStart: true });

    act(() => jest.advanceTimersByTime(2000));
    act(() => view.setMode('hidden'));
    act(() => jest.advanceTimersByTime(2000));
    act(() => view.setMode('visible'));
    expect(view.result.current.running).toBe(true);

    act(() => jest.advanceTimersByTime(1000));
    expect(view.result.current.count).toBe(5000);
  });

  it('treats an invalid targetDate as count 0 without running or completing', () => {
    const onComplete = jest.fn();
    const onTick = jest.fn();
    const hook = renderHook(() =>
      useCountdown({ targetDate: 'not a date', interval: 1000, onComplete, onTick })
    );

    expect(hook.result.current.count).toBe(0);
    expect(hook.result.current.running).toBe(false);

    act(() => hook.result.current.start());
    act(() => jest.advanceTimersByTime(3000));
    expect(hook.result.current.count).toBe(0);
    expect(hook.result.current.running).toBe(false);
    expect(onComplete).not.toHaveBeenCalled();
    expect(onTick).not.toHaveBeenCalled();
  });

  it('starts counting when an invalid targetDate becomes valid', () => {
    const onComplete = jest.fn();
    const hook = renderHook(
      ({ targetDate }: TargetProps) => useCountdown({ targetDate, interval: 1000, onComplete }),
      { initialProps: { targetDate: 'not a date' } as TargetProps }
    );

    expect(hook.result.current.count).toBe(0);

    act(() => hook.rerender({ targetDate: new Date(Date.now() + 5000) }));
    expect(hook.result.current.running).toBe(true);
    expect(hook.result.current.count).toBe(5000);

    act(() => jest.advanceTimersByTime(1000));
    expect(hook.result.current.count).toBe(4000);
    expect(onComplete).not.toHaveBeenCalled();
  });

  it('stops without completing when a valid targetDate becomes invalid', () => {
    const onComplete = jest.fn();
    const hook = renderHook(
      ({ targetDate }: TargetProps) => useCountdown({ targetDate, interval: 1000, onComplete }),
      { initialProps: { targetDate: new Date(Date.now() + 5000) } as TargetProps }
    );

    act(() => hook.rerender({ targetDate: 'not a date' }));
    expect(hook.result.current.count).toBe(0);
    expect(hook.result.current.running).toBe(false);
    expect(onComplete).not.toHaveBeenCalled();
  });

  it('resets count when countStart changes while idle', () => {
    const hook = renderHook(({ countStart }) => useCountdown({ countStart, interval: 1000 }), {
      initialProps: { countStart: 30_000 },
    });

    act(() => hook.rerender({ countStart: 60_000 }));
    expect(hook.result.current.count).toBe(60_000);

    act(() => hook.result.current.start());
    act(() => jest.advanceTimersByTime(1000));
    expect(hook.result.current.count).toBe(59_000);
  });

  it('keeps the current end timestamp when countStart changes while running', () => {
    const hook = renderHook(({ countStart }) => useCountdown({ countStart, interval: 1000 }), {
      initialProps: { countStart: 30_000 },
    });

    act(() => hook.result.current.start());
    act(() => jest.advanceTimersByTime(2000));
    act(() => hook.rerender({ countStart: 60_000 }));
    expect(hook.result.current.running).toBe(true);

    act(() => jest.advanceTimersByTime(1000));
    expect(hook.result.current.count).toBe(27_000);
  });

  it('resets count when countStart changes while paused', () => {
    const hook = renderHook(({ countStart }) => useCountdown({ countStart, interval: 1000 }), {
      initialProps: { countStart: 30_000 },
    });

    act(() => hook.result.current.start());
    act(() => jest.advanceTimersByTime(15_000));
    act(() => hook.result.current.stop());
    expect(hook.result.current.count).toBe(15_000);

    act(() => hook.rerender({ countStart: 45_000 }));
    expect(hook.result.current.count).toBe(45_000);

    act(() => hook.result.current.start());
    act(() => jest.advanceTimersByTime(1000));
    expect(hook.result.current.count).toBe(44_000);
  });

  it('does not call onComplete again when start is called on an expired targetDate', () => {
    const onComplete = jest.fn();
    const targetDate = new Date(Date.now() - 1000);
    const hook = renderHook(() => useCountdown({ targetDate, onComplete }));

    act(() => hook.result.current.start());
    act(() => hook.result.current.start());
    expect(onComplete).toHaveBeenCalledTimes(1);
  });

  it('does not call onComplete again when start is called repeatedly with countStart 0', () => {
    const onComplete = jest.fn();
    const hook = renderHook(() => useCountdown({ countStart: 0, onComplete }));

    act(() => hook.result.current.start());
    act(() => hook.result.current.start());
    expect(onComplete).toHaveBeenCalledTimes(1);
  });

  it('aligns ticks to the target date grid', () => {
    const onTick = jest.fn();
    const start = Date.now();
    renderHook(() => useCountdown({ targetDate: start + 2400, interval: 1000, onTick }));

    act(() => jest.advanceTimersByTime(399));
    expect(onTick).not.toHaveBeenCalled();

    act(() => jest.advanceTimersByTime(1));
    expect(onTick).toHaveBeenLastCalledWith(2000);

    act(() => jest.advanceTimersByTime(1000));
    expect(onTick).toHaveBeenLastCalledWith(1000);

    act(() => jest.advanceTimersByTime(1000));
    expect(onTick).toHaveBeenLastCalledWith(0);
    expect(onTick).toHaveBeenCalledTimes(3);
  });

  it('realigns to the target date grid after a late tick', () => {
    const onTick = jest.fn();
    const targetDate = Date.now() + 5000;
    renderHook(() => useCountdown({ targetDate, interval: 1000, onTick }));

    const fakeNow = Date.now.bind(Date);
    const nowSpy = jest.spyOn(Date, 'now').mockImplementation(() => fakeNow() + 1);

    act(() => jest.advanceTimersByTime(5000));
    expect(onTick.mock.calls.map(([count]) => count)).toEqual([4000, 3000, 2000, 1000, 0]);
    nowSpy.mockRestore();
  });

  it('reports whole grid values in targetDate mode when ticks fire late', () => {
    const targetDate = Date.now() + 5000;
    const hook = renderHook(() => useCountdown({ targetDate, interval: 1000 }));
    const counts = [hook.result.current.count];
    const seconds = [hook.result.current.formatted.seconds];

    let offset = 0;
    const fakeNow = Date.now.bind(Date);
    jest.spyOn(Date, 'now').mockImplementation(() => fakeNow() + offset);

    [1, 3, 2, 1, 2].forEach((lateness) => {
      offset += lateness;
      act(() => jest.advanceTimersByTime(1000));
      counts.push(hook.result.current.count);
      seconds.push(hook.result.current.formatted.seconds);
    });

    expect(counts).toEqual([5000, 4000, 3000, 2000, 1000, 0]);
    expect(seconds).toEqual([5, 4, 3, 2, 1, 0]);
  });

  it('does not report the same grid value twice when a tick fires more than half an interval late', () => {
    const onTick = jest.fn();
    const targetDate = Date.now() + 5000;
    const hook = renderHook(() => useCountdown({ targetDate, interval: 1000, onTick }));
    const counts = [hook.result.current.count];

    const fakeNow = Date.now.bind(Date);
    let offset = 0;
    jest.spyOn(Date, 'now').mockImplementation(() => fakeNow() + offset);

    offset = 600;
    act(() => jest.advanceTimersByTime(1000));
    counts.push(hook.result.current.count);

    [1400, 1000, 1000].forEach((step) => {
      act(() => jest.advanceTimersByTime(step));
      counts.push(hook.result.current.count);
    });

    expect(counts).toEqual([5000, 3000, 2000, 1000, 0]);
    expect(onTick.mock.calls.map(([value]) => value)).toEqual([3000, 2000, 1000, 0]);
  });

  it('starts a targetDate run on the grid value when the target was created a moment earlier', () => {
    const targetDate = Date.now() + 4998;
    const hook = renderHook(() => useCountdown({ targetDate, interval: 1000 }));
    const seconds = [hook.result.current.formatted.seconds];
    const counts = [hook.result.current.count];

    [998, 1000, 1000].forEach((step) => {
      act(() => jest.advanceTimersByTime(step));
      counts.push(hook.result.current.count);
      seconds.push(hook.result.current.formatted.seconds);
    });

    expect(counts).toEqual([5000, 4000, 3000, 2000]);
    expect(seconds).toEqual([5, 4, 3, 2]);
  });

  it('reports whole grid values anchored to the start in countStart mode when ticks fire late', () => {
    const onComplete = jest.fn();
    const hook = renderHook(() =>
      useCountdown({ countStart: 2500, interval: 1000, autoStart: true, onComplete })
    );
    const counts = [hook.result.current.count];

    let offset = 0;
    const fakeNow = Date.now.bind(Date);
    jest.spyOn(Date, 'now').mockImplementation(() => fakeNow() + offset);

    [2, 1, 3].forEach((lateness) => {
      offset += lateness;
      act(() => jest.advanceTimersByTime(1000));
      counts.push(hook.result.current.count);
    });

    expect(counts).toEqual([2500, 1500, 500, 0]);
    expect(onComplete).toHaveBeenCalledTimes(1);
  });

  it('reports a single snapped tick after a large clock jump', () => {
    const onTick = jest.fn();
    const onComplete = jest.fn();
    const targetDate = Date.now() + 10_000;
    renderHook(() => useCountdown({ targetDate, interval: 1000, onTick, onComplete }));

    const fakeNow = Date.now.bind(Date);
    jest.spyOn(Date, 'now').mockImplementation(() => fakeNow() + 6004);

    act(() => jest.advanceTimersByTime(1000));
    expect(onTick.mock.calls.map(([count]) => count)).toEqual([3000]);

    act(() => jest.advanceTimersByTime(3000));
    expect(onTick).toHaveBeenLastCalledWith(0);
    expect(onComplete).toHaveBeenCalledTimes(1);
  });

  it('clamps the last tick to the end of the countdown', () => {
    const onTick = jest.fn();
    const onComplete = jest.fn();
    const hook = renderHook(() =>
      useCountdown({ countStart: 2500, interval: 1000, autoStart: true, onTick, onComplete })
    );

    act(() => jest.advanceTimersByTime(2000));
    expect(hook.result.current.count).toBe(500);
    expect(onComplete).not.toHaveBeenCalled();

    act(() => jest.advanceTimersByTime(500));
    expect(hook.result.current.count).toBe(0);
    expect(onComplete).toHaveBeenCalledTimes(1);
    expect(onTick.mock.calls.map(([count]) => count)).toEqual([1500, 500, 0]);
  });
});
