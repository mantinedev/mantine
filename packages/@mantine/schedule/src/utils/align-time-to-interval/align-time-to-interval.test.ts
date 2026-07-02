import { alignTimeToInterval } from './align-time-to-interval';

describe('@mantine/schedule/align-time-to-interval', () => {
  it('leaves times already on the interval grid unchanged', () => {
    expect(alignTimeToInterval('08:00:00', 120)).toBe('08:00:00');
    expect(alignTimeToInterval('00:00:00', 240)).toBe('00:00:00');
    expect(alignTimeToInterval('09:30:00', 30)).toBe('09:30:00');
  });

  it('floors multi-hour intervals to the nearest clock boundary', () => {
    expect(alignTimeToInterval('07:00:00', 120)).toBe('06:00:00');
    expect(alignTimeToInterval('07:00:00', 240)).toBe('04:00:00');
    expect(alignTimeToInterval('11:00:00', 240)).toBe('08:00:00');
    expect(alignTimeToInterval('23:00:00', 120)).toBe('22:00:00');
  });

  it('floors sub-hour intervals to the nearest boundary', () => {
    expect(alignTimeToInterval('09:15:00', 30)).toBe('09:00:00');
    expect(alignTimeToInterval('09:20:00', 15)).toBe('09:15:00');
    expect(alignTimeToInterval('09:45:00', 60)).toBe('09:00:00');
  });

  it('uses the clamped interval for alignment', () => {
    // 90 is not a whole number of hours, so it clamps to 60 and floors to the hour.
    expect(alignTimeToInterval('09:45:00', 90)).toBe('09:00:00');
  });
});
