import dayjs from 'dayjs';
import { isInTimeRange } from './is-in-time-range';

describe('@mantine/schedule/is-in-time-range', () => {
  it('returns true when time is within the specified range', () => {
    const date = dayjs('2024-01-01 12:30:00').toDate();
    expect(isInTimeRange({ date, startTime: '09:00:00', endTime: '17:00:00' })).toBe(true);
  });

  it('returns false when time is outside the specified range', () => {
    const date = dayjs('2024-01-01 08:30:00').toDate();
    expect(isInTimeRange({ date, startTime: '09:00:00', endTime: '17:00:00' })).toBe(false);
  });

  it('returns true with default range (00:00:00 - 23:59:59) for any time', () => {
    const date = dayjs('2024-01-01 15:45:30').toDate();
    expect(isInTimeRange({ date })).toBe(true);
  });
});
