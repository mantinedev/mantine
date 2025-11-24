import { getDayTimeIntervals } from './get-day-time-intervals';

describe('@mantine/dates/get-day-time-intervals', () => {
  it('returns intervals with default 30 minute duration', () => {
    const intervals = getDayTimeIntervals({
      startTime: '09:00:00',
      endTime: '10:00:00',
    });

    expect(intervals).toHaveLength(2);
    expect(intervals[0].duration).toBe(30 * 60); // 1800 seconds
    expect(intervals[1].duration).toBe(30 * 60);
  });

  it('respects custom interval minutes', () => {
    const intervals = getDayTimeIntervals({
      startTime: '09:00:00',
      endTime: '10:00:00',
      intervalMinutes: 15,
    });

    expect(intervals).toHaveLength(4);
    intervals.forEach((interval) => {
      expect(interval.duration).toBe(15 * 60); // 900 seconds
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
    // Should reach end of day (23:59:59)
    expect(lastInterval.endTime).toBe('23:59:59');
  });

  it('generates correct number of intervals for full day', () => {
    const intervals = getDayTimeIntervals({
      startTime: '00:00:00',
      endTime: '23:59:59',
      intervalMinutes: 60,
    });

    // 24 intervals for 24 hours
    expect(intervals).toHaveLength(24);
  });

  it('handles single interval', () => {
    const intervals = getDayTimeIntervals({
      startTime: '09:00:00',
      endTime: '09:30:00',
      intervalMinutes: 30,
    });

    expect(intervals).toHaveLength(1);
    expect(intervals[0].startTime).toBe('09:00:00');
    expect(intervals[0].endTime).toBe('09:30:00');
  });

  it('works with custom interval durations', () => {
    const intervals = getDayTimeIntervals({
      startTime: '09:00:00',
      endTime: '10:00:00',
      intervalMinutes: 20,
    });

    expect(intervals).toHaveLength(3);
    intervals.forEach((interval) => {
      expect(interval.duration).toBe(20 * 60); // 1200 seconds
    });
  });

  it('correctly identifies hour starts with 15 minute intervals', () => {
    const intervals = getDayTimeIntervals({
      startTime: '09:00:00',
      endTime: '10:00:00',
      intervalMinutes: 15,
    });

    expect(intervals).toHaveLength(4);
    expect(intervals[0].isHourStart).toBe(true); // 09:00
    expect(intervals[1].isHourStart).toBe(false); // 09:15
    expect(intervals[2].isHourStart).toBe(false); // 09:30
    expect(intervals[3].isHourStart).toBe(false); // 09:45
  });

  it('handles start time that is not at minute boundary', () => {
    const intervals = getDayTimeIntervals({
      startTime: '09:15:00',
      endTime: '09:45:00',
      intervalMinutes: 15,
    });

    expect(intervals).toHaveLength(2);
    expect(intervals[0].startTime).toBe('09:15:00');
    expect(intervals[0].isHourStart).toBe(false);
  });

  it('cuts down the last interval to the end time if not enough time', () => {
    const intervals = getDayTimeIntervals({
      startTime: '23:55:00',
      endTime: '23:59:59',
      intervalMinutes: 15,
    });

    expect(intervals).toHaveLength(1);
    expect(intervals[0].startTime).toBe('23:55:00');
    expect(intervals[0].endTime).toBe('23:59:59');
    expect(intervals[0].duration).toBe(4 * 60 + 59); // 299 seconds
  });

  it('handles intervals with seconds in start time', () => {
    const intervals = getDayTimeIntervals({
      startTime: '09:00:30',
      endTime: '09:15:30',
      intervalMinutes: 15,
    });

    expect(intervals).toHaveLength(1);
    expect(intervals[0].startTime).toBe('09:00:30');
    expect(intervals[0].endTime).toBe('09:15:30');
    expect(intervals[0].isHourStart).toBe(false);
  });
});
