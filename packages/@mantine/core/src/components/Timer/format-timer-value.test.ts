import { formatTimerValue } from './format-timer-value';

describe('@mantine/core/Timer/formatTimerValue', () => {
  it('formats HH:mm:ss', () => {
    expect(formatTimerValue(41_115_000, 'HH:mm:ss')).toBe('11:25:15');
  });

  it('formats mm:ss', () => {
    expect(formatTimerValue(330_000, 'mm:ss')).toBe('05:30');
  });

  it('formats DD:HH:mm:ss with cumulative days', () => {
    expect(formatTimerValue(194_400_000, 'DD:HH:mm:ss')).toBe('02:06:00:00');
  });

  it('formats milliseconds and centiseconds', () => {
    expect(formatTimerValue(1_234, 'ss:SSS')).toBe('01:234');
    expect(formatTimerValue(1_230, 'ss:SS')).toBe('01:23');
  });

  it('supports non-padded tokens', () => {
    expect(formatTimerValue(5000, 'm:s')).toBe('0:5');
  });

  it('clamps negative values to zero', () => {
    expect(formatTimerValue(-1000, 'mm:ss')).toBe('00:00');
  });
});
