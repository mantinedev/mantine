import { getDayTimeIntervals } from './get-day-time-intervals';

describe('@mantine/schedule/get-day-time-intervals', () => {
  it('respects custom interval minutes', () => {
    const intervals = getDayTimeIntervals({
      startTime: '09:00:00',
      endTime: '10:00:00',
      intervalMinutes: 15,
    });

    expect(intervals).toHaveLength(4);
    intervals.forEach((interval) => {
      expect(interval.duration).toBe(15 * 60);
    });
  });

  it('returns correct startTime and endTime for each interval', () => {
    const intervals = getDayTimeIntervals({
      startTime: '09:00:00',
      endTime: '09:30:00',
      intervalMinutes: 15,
    });

    expect(intervals).toHaveLength(2);

    expect(intervals[0].startTime).toBe('09:00:00');
    expect(intervals[0].endTime).toBe('09:15:00');

    expect(intervals[1].startTime).toBe('09:15:00');
    expect(intervals[1].endTime).toBe('09:30:00');
  });

  it('marks intervals that start at hour boundary with isHourStart true', () => {
    const intervals = getDayTimeIntervals({
      startTime: '09:00:00',
      endTime: '11:00:00',
      intervalMinutes: 30,
    });

    expect(intervals).toHaveLength(4);
    expect(intervals[0].isHourStart).toBe(true); // 09:00
    expect(intervals[1].isHourStart).toBe(false); // 09:30
    expect(intervals[2].isHourStart).toBe(true); // 10:00
    expect(intervals[3].isHourStart).toBe(false); // 10:30
  });

  it('generates intervals until end of day when endTime is not provided', () => {
    const intervals = getDayTimeIntervals({
      startTime: '23:30:00',
      intervalMinutes: 15,
    });

    expect(intervals.length).toBeGreaterThan(0);
    const lastInterval = intervals[intervals.length - 1];
    expect(lastInterval.endTime).toBe('23:59:59');
  });

  it('accepts valid divisors of 60', () => {
    const validDivisors = [1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60];

    validDivisors.forEach((divisor) => {
      const intervals = getDayTimeIntervals({
        startTime: '09:00:00',
        endTime: '10:00:00',
        intervalMinutes: divisor,
      });

      const expectedCount = 60 / divisor;
      expect(intervals).toHaveLength(expectedCount);
      intervals.forEach((interval) => {
        expect(interval.duration).toBe(divisor * 60);
      });
    });
  });

  it('defaults to 60 minutes for invalid divisors of 60', () => {
    const invalidDivisors = [7, 8, 9, 11, 13, 14, 16, 25, 35, 45, 55];

    invalidDivisors.forEach((divisor) => {
      const intervals = getDayTimeIntervals({
        startTime: '09:00:00',
        endTime: '10:00:00',
        intervalMinutes: divisor,
      });

      expect(intervals).toHaveLength(1);
      intervals.forEach((interval) => {
        expect(interval.duration).toBe(60 * 60);
      });
    });
  });
});
