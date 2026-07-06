import { getDisplayMs, getTimerValue } from './get-timer-value';

describe('@mantine/core/Timer/getTimerValue', () => {
  it('splits milliseconds into time segments', () => {
    expect(getTimerValue(90_000)).toMatchObject({ minutes: 1, seconds: 30, milliseconds: 0 });
    expect(getTimerValue(194_400_000)).toMatchObject({ days: 2, hours: 6, minutes: 0, seconds: 0 });
  });

  it('clamps negative values to zero', () => {
    expect(getTimerValue(-500).totalMs).toBe(0);
  });
});

describe('@mantine/core/Timer/getDisplayMs', () => {
  it('snaps a countdown to the start-anchored interval grid', () => {
    // A tick that fires a few ms late (raw 88_997) must still resolve to the current
    // second, otherwise the readout skips a value (e.g. 1:30 -> 1:28, never showing 1:29).
    expect(getDisplayMs(88_997, 1000, true, 90_000)).toBe(89_000);
    expect(getDisplayMs(90_000, 1000, true, 90_000)).toBe(90_000);
    expect(getDisplayMs(89_000, 1000, true, 90_000)).toBe(89_000);
    // The start value is shown for the whole first interval
    expect(getDisplayMs(89_500, 1000, true, 90_000)).toBe(90_000);
    expect(getDisplayMs(0, 1000, true, 90_000)).toBe(0);
  });

  it('snaps a countdown to sub-second intervals', () => {
    expect(getDisplayMs(26_099, 50, true, 30_000)).toBe(26_100);
  });

  it('never exceeds the start value and preserves a non-zero boundary', () => {
    expect(getDisplayMs(5000, 1000, true, 5000, 500)).toBe(5000);
    expect(getDisplayMs(3800, 1000, true, 5000, 500)).toBe(4000);
    expect(getDisplayMs(500, 1000, true, 5000, 500)).toBe(500);
  });

  it('returns raw milliseconds for stopwatch mode', () => {
    expect(getDisplayMs(88_997, 1000, false, 90_000)).toBe(88_997);
  });
});
