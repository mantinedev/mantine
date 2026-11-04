/**
 * @jest-environment ./jest.timezone-environment.ts
 * @timezone America/New_York
 */
import { testUtils } from '../../test-utils';
import { getCurrentTimePosition } from '../get-current-time-position/get-current-time-position';
import { getDayPosition } from './get-day-position';

const percentOfDay = (time: string) => {
  const [hours, minutes] = time.split(':').map(Number);
  return ((hours * 60 + minutes) / 1440) * 100;
};

const getPosition = (date: string, start: string, end: string) =>
  getDayPosition({
    event: testUtils.createEvent({ start: `${date} ${start}:00`, end: `${date} ${end}:00` }),
    intervalMinutes: 30,
  });

describe('@mantine/schedule/get-day-position on daylight saving time days', () => {
  it('runs in a time zone with daylight saving time', () => {
    expect(new Date(2026, 0, 15).getTimezoneOffset()).toBe(300);
    expect(new Date(2026, 6, 15).getTimezoneOffset()).toBe(240);
  });

  it.each([
    { day: '25-hour day', date: '2026-11-01' },
    { day: '23-hour day', date: '2026-03-08' },
  ])('places events at their wall clock time on a $day', ({ date }) => {
    for (const [start, end] of [
      ['00:30', '01:00'],
      ['04:00', '04:30'],
      ['18:00', '18:30'],
      ['23:00', '23:30'],
    ]) {
      const { top, height } = getPosition(date, start, end);
      expect(top).toBeCloseTo(percentOfDay(start));
      expect(top + height).toBeCloseTo(percentOfDay(end));
    }
  });

  it('sizes an event that spans the repeated hour by wall clock time', () => {
    const { top, height } = getPosition('2026-11-01', '01:30', '02:00');
    expect(top).toBeCloseTo(percentOfDay('01:30'));
    expect(top + height).toBeCloseTo(percentOfDay('02:00'));
  });

  it.each([
    { day: '25-hour day', now: new Date(2026, 10, 1, 18, 0) },
    { day: '23-hour day', now: new Date(2026, 2, 8, 18, 0) },
  ])('places current time indicator at wall clock time on a $day', ({ now }) => {
    expect(getCurrentTimePosition({ now })).toBeCloseTo(percentOfDay('18:00'));
    expect(
      getCurrentTimePosition({
        now,
        startTime: '00:00:00',
        endTime: '23:59:59',
        intervalMinutes: 30,
      })
    ).toBeCloseTo(percentOfDay('18:00'));
  });
});
