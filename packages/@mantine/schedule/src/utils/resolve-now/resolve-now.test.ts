import dayjs from 'dayjs';
import { resolveNow } from './resolve-now';

describe('@mantine/schedule/resolve-now', () => {
  it('returns the value of getCurrentTime', () => {
    expect(resolveNow(() => '2025-01-15 10:30:00').format('YYYY-MM-DD HH:mm:ss')).toBe(
      '2025-01-15 10:30:00'
    );
  });

  it('returns the system time without getCurrentTime', () => {
    jest.useFakeTimers().setSystemTime(new Date(2025, 0, 15, 9, 0));
    expect(resolveNow(undefined).isSame(dayjs(new Date(2025, 0, 15, 9, 0)))).toBe(true);
    jest.useRealTimers();
  });
});
