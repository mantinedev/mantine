import { toTimeString } from './to-time-string';

describe('@mantine/schedule/to-time-string', () => {
  it('converts given parsed time to HH:mm:ss format string', () => {
    expect(toTimeString({ hours: 0, minutes: 0, seconds: 0 })).toBe('00:00:00');
    expect(toTimeString({ hours: 12, minutes: 30, seconds: 45 })).toBe('12:30:45');
    expect(toTimeString({ hours: 23, minutes: 59, seconds: 59 })).toBe('23:59:59');
    expect(toTimeString({ hours: 7, minutes: 5, seconds: 9 })).toBe('07:05:09');
  });
});
