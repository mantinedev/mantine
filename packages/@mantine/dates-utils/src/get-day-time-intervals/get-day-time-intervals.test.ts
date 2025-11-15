import { getDayTimeIntervals } from './get-day-time-intervals';

describe('@mantine/dates/get-day-time-intervals', () => {
  it('returns intervals with default 30 minute duration', () => {
    const startDate = new Date(2024, 0, 15, 9, 0, 0); // Jan 15, 2024 09:00
    const endDate = new Date(2024, 0, 15, 10, 0, 0); // Jan 15, 2024 10:00
    const intervals = getDayTimeIntervals({
      startTime: startDate,
      endTime: endDate,
    });

    expect(intervals).toHaveLength(2);
    expect(intervals[0].duration).toBe(30);
    expect(intervals[1].duration).toBe(30);
  });

  it('respects custom interval minutes', () => {
    const startDate = new Date(2024, 0, 15, 9, 0, 0);
    const endDate = new Date(2024, 0, 15, 10, 0, 0);
    const intervals = getDayTimeIntervals({
      startTime: startDate,
      endTime: endDate,
      intervalMinutes: 15,
    });

    expect(intervals).toHaveLength(4);
    intervals.forEach((interval) => {
      expect(interval.duration).toBe(15);
    });
  });

  it('returns correct startTime and endTime for each interval', () => {
    const startDate = new Date(2024, 0, 15, 9, 0, 0);
    const endDate = new Date(2024, 0, 15, 9, 30, 0);
    const intervals = getDayTimeIntervals({
      startTime: startDate,
      endTime: endDate,
      intervalMinutes: 15,
    });

    expect(intervals).toHaveLength(2);

    expect(intervals[0].startTime.getHours()).toBe(9);
    expect(intervals[0].startTime.getMinutes()).toBe(0);
    expect(intervals[0].endTime.getHours()).toBe(9);
    expect(intervals[0].endTime.getMinutes()).toBe(15);

    expect(intervals[1].startTime.getHours()).toBe(9);
    expect(intervals[1].startTime.getMinutes()).toBe(15);
    expect(intervals[1].endTime.getHours()).toBe(9);
    expect(intervals[1].endTime.getMinutes()).toBe(30);
  });

  it('marks intervals that start at hour boundary with isHourStart true', () => {
    const startDate = new Date(2024, 0, 15, 9, 0, 0);
    const endDate = new Date(2024, 0, 15, 11, 0, 0);
    const intervals = getDayTimeIntervals({
      startTime: startDate,
      endTime: endDate,
      intervalMinutes: 30,
    });

    expect(intervals).toHaveLength(4);
    expect(intervals[0].isHourStart).toBe(true); // 09:00
    expect(intervals[1].isHourStart).toBe(false); // 09:30
    expect(intervals[2].isHourStart).toBe(true); // 10:00
    expect(intervals[3].isHourStart).toBe(false); // 10:30
  });

  it('generates intervals until end of day when endTime is not provided', () => {
    const startDate = new Date(2024, 0, 15, 23, 30, 0);
    const intervals = getDayTimeIntervals({
      startTime: startDate,
      intervalMinutes: 15,
    });

    expect(intervals.length).toBeGreaterThan(0);
    const lastInterval = intervals[intervals.length - 1];
    // Should reach end of day (23:59:59)
    expect(lastInterval.startTime.getHours()).toBe(23);
  });

  it('accepts Date objects as startTime', () => {
    const startDate = new Date(2024, 0, 15, 9, 0, 0);
    const endDate = new Date(2024, 0, 15, 10, 0, 0);
    const intervals = getDayTimeIntervals({
      startTime: startDate,
      endTime: endDate,
      intervalMinutes: 30,
    });

    expect(intervals).toHaveLength(2);
    expect(intervals[0].startTime.getHours()).toBe(9);
  });

  it('generates correct number of intervals for full day', () => {
    const startDate = new Date(2024, 0, 15, 0, 0, 0);
    const endDate = new Date(2024, 0, 15, 23, 59, 59);
    const intervals = getDayTimeIntervals({
      startTime: startDate,
      endTime: endDate,
      intervalMinutes: 60,
    });

    // 24 intervals for 24 hours
    expect(intervals).toHaveLength(24);
  });

  it('handles single interval', () => {
    const startDate = new Date(2024, 0, 15, 9, 0, 0);
    const endDate = new Date(2024, 0, 15, 9, 30, 0);
    const intervals = getDayTimeIntervals({
      startTime: startDate,
      endTime: endDate,
      intervalMinutes: 30,
    });

    expect(intervals).toHaveLength(1);
    expect(intervals[0].startTime.getMinutes()).toBe(0);
    expect(intervals[0].endTime.getMinutes()).toBe(30);
  });

  it('works with custom interval durations', () => {
    const startDate = new Date(2024, 0, 15, 9, 0, 0);
    const endDate = new Date(2024, 0, 15, 10, 0, 0);
    const intervals = getDayTimeIntervals({
      startTime: startDate,
      endTime: endDate,
      intervalMinutes: 20,
    });

    expect(intervals).toHaveLength(3);
    intervals.forEach((interval) => {
      expect(interval.duration).toBe(20);
    });
  });

  it('correctly identifies hour starts with 15 minute intervals', () => {
    const startDate = new Date(2024, 0, 15, 9, 0, 0);
    const endDate = new Date(2024, 0, 15, 10, 0, 0);
    const intervals = getDayTimeIntervals({
      startTime: startDate,
      endTime: endDate,
      intervalMinutes: 15,
    });

    expect(intervals).toHaveLength(4);
    expect(intervals[0].isHourStart).toBe(true); // 09:00
    expect(intervals[1].isHourStart).toBe(false); // 09:15
    expect(intervals[2].isHourStart).toBe(false); // 09:30
    expect(intervals[3].isHourStart).toBe(false); // 09:45
  });

  it('handles start time that is not at minute boundary', () => {
    const startDate = new Date(2024, 0, 15, 9, 15, 0);
    const endDate = new Date(2024, 0, 15, 9, 45, 0);
    const intervals = getDayTimeIntervals({
      startTime: startDate,
      endTime: endDate,
      intervalMinutes: 15,
    });

    expect(intervals).toHaveLength(2);
    expect(intervals[0].startTime.getMinutes()).toBe(15);
    expect(intervals[0].isHourStart).toBe(false);
  });
});
