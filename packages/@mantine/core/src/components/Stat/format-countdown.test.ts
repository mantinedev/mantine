import { formatCountdown } from './format-countdown';

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

describe('@mantine/core/Stat/formatCountdown', () => {
  it('formats hours, minutes and seconds with zero padding', () => {
    expect(formatCountdown(HOUR + 2 * MINUTE + 3 * SECOND, 'HH:mm:ss')).toBe('01:02:03');
  });

  it('rolls larger units into the leading token when it is absent', () => {
    expect(formatCountdown(HOUR + 2 * MINUTE + 3 * SECOND, 'mm:ss')).toBe('62:03');
  });

  it('supports day tokens with escaped literals', () => {
    expect(formatCountdown(2 * DAY + 3 * HOUR + 4 * MINUTE, 'D[d] HH:mm:ss')).toBe('2d 03:04:00');
  });

  it('supports millisecond tokens', () => {
    expect(formatCountdown(5 * SECOND + 123, 'ss.SSS')).toBe('05.123');
  });

  it('scales millisecond tokens to their width like dayjs', () => {
    expect(formatCountdown(5 * SECOND + 123, 'ss.S')).toBe('05.1');
    expect(formatCountdown(5 * SECOND + 123, 'ss.SS')).toBe('05.12');
    expect(formatCountdown(5 * SECOND + 5, 'ss.SSS')).toBe('05.005');
  });

  it('clamps negative and non-finite durations to zero', () => {
    expect(formatCountdown(-5000, 'mm:ss')).toBe('00:00');
    expect(formatCountdown(Number.NaN, 'mm:ss')).toBe('00:00');
  });

  it('keeps escaped tokens as literal text', () => {
    expect(formatCountdown(90 * SECOND, '[m]m[m] ss[s]')).toBe('m1m 30s');
  });
});
