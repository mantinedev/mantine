import { getMonthlyRule, getOccurrences, isInSeries } from './recurrence';
import type { Recurrence } from './types';

const never = { ends: 'never' } as const;

describe('getOccurrences', () => {
  it('skips months without the day of the start date', () => {
    const recurrence: Recurrence = {
      frequency: 'monthly',
      interval: 1,
      monthly: getMonthlyRule('2027-01-31', 'dayOfMonth'),
      ...never,
    };

    expect(getOccurrences('2027-01-31', recurrence, [], 3)).toEqual([
      '2027-01-31',
      '2027-03-31',
      '2027-05-31',
    ]);
  });

  it('repeats on the last weekday of the month when the start is in the fifth week', () => {
    const rule = getMonthlyRule('2026-10-29', 'weekdayOfMonth');
    const recurrence: Recurrence = { frequency: 'monthly', interval: 1, monthly: rule, ...never };

    expect(rule).toEqual({ by: 'weekdayOfMonth', weekday: 'TH', week: -1 });
    expect(getOccurrences('2026-10-29', recurrence, [], 3)).toEqual([
      '2026-10-29',
      '2026-11-26',
      '2026-12-31',
    ]);
  });

  it('repeats a February 29 start only in leap years', () => {
    const recurrence: Recurrence = { frequency: 'yearly', interval: 1, ...never };
    expect(getOccurrences('2028-02-29', recurrence, [], 2)).toEqual(['2028-02-29', '2032-02-29']);
  });

  it('counts the weeks of a weekly interval from the week of the start date', () => {
    const recurrence: Recurrence = {
      frequency: 'weekly',
      interval: 2,
      weekdays: ['MO', 'FR'],
      ...never,
    };

    // Wednesday start: Monday of the first week is before the start and is not an occurrence
    expect(getOccurrences('2026-10-21', recurrence, [], 3)).toEqual([
      '2026-10-23',
      '2026-11-02',
      '2026-11-06',
    ]);
  });

  it('counts exceptions towards the number of occurrences', () => {
    const recurrence: Recurrence = { frequency: 'daily', interval: 1, ends: 'after', count: 3 };
    expect(getOccurrences('2026-10-20', recurrence, ['2026-10-21'], 5)).toEqual([
      '2026-10-20',
      '2026-10-22',
    ]);
  });

  it('includes the end date of a series that ends on a date', () => {
    const recurrence: Recurrence = {
      frequency: 'daily',
      interval: 3,
      ends: 'on',
      until: '2026-10-26',
    };
    expect(getOccurrences('2026-10-20', recurrence, [], 5)).toEqual([
      '2026-10-20',
      '2026-10-23',
      '2026-10-26',
    ]);
  });
});

describe('isInSeries', () => {
  const recurrence: Recurrence = { frequency: 'daily', interval: 2, ends: 'after', count: 3 };

  it('accepts a date of the series', () => {
    expect(isInSeries('2026-10-20', recurrence, '2026-10-24')).toBe(true);
  });

  it('rejects a date between two occurrences', () => {
    expect(isInSeries('2026-10-20', recurrence, '2026-10-21')).toBe(false);
  });

  it('rejects a date after the last occurrence', () => {
    expect(isInSeries('2026-10-20', recurrence, '2026-10-26')).toBe(false);
  });
});
