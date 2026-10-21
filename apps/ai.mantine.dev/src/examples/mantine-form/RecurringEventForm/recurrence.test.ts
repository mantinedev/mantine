import { getOccurrences, isInSeries, type RecurrenceRule } from './recurrence';

const rule = (overrides: Partial<RecurrenceRule>): RecurrenceRule => ({
  start: '2026-10-21',
  repeat: 'daily',
  interval: 1,
  weekdays: [],
  monthlyMode: 'dayOfMonth',
  ends: 'never',
  count: 0,
  until: null,
  ...overrides,
});

describe('getOccurrences', () => {
  it('returns the start date alone for an event that does not repeat', () => {
    expect(getOccurrences(rule({ repeat: 'none' }))).toEqual(['2026-10-21']);
  });

  it('steps daily dates by the interval', () => {
    expect(getOccurrences(rule({ interval: 3 }), { limit: 3 })).toEqual([
      '2026-10-21',
      '2026-10-24',
      '2026-10-27',
    ]);
  });

  it('repeats on the selected weekdays of every other week', () => {
    expect(
      getOccurrences(rule({ repeat: 'weekly', interval: 2, weekdays: ['MO', 'WE', 'FR'] }), {
        limit: 5,
      })
    ).toEqual(['2026-10-21', '2026-10-23', '2026-11-02', '2026-11-04', '2026-11-06']);
  });

  it('starts a weekly series on the first selected weekday after the start', () => {
    expect(getOccurrences(rule({ repeat: 'weekly', weekdays: ['MO'] }), { limit: 2 })).toEqual([
      '2026-10-26',
      '2026-11-02',
    ]);
  });

  it('skips months without the day of the start', () => {
    expect(getOccurrences(rule({ start: '2026-01-31', repeat: 'monthly' }), { limit: 3 })).toEqual([
      '2026-01-31',
      '2026-03-31',
      '2026-05-31',
    ]);
  });

  it('repeats monthly on the same weekday of the month', () => {
    expect(
      getOccurrences(rule({ repeat: 'monthly', monthlyMode: 'weekdayOfMonth' }), { limit: 3 })
    ).toEqual(['2026-10-21', '2026-11-18', '2026-12-16']);
  });

  it('uses the last weekday of the month for a start in the fifth week', () => {
    expect(
      getOccurrences(
        rule({ start: '2026-10-30', repeat: 'monthly', monthlyMode: 'weekdayOfMonth' }),
        {
          limit: 3,
        }
      )
    ).toEqual(['2026-10-30', '2026-11-27', '2026-12-25']);
  });

  it('repeats February 29 only in leap years', () => {
    expect(getOccurrences(rule({ start: '2028-02-29', repeat: 'yearly' }), { limit: 2 })).toEqual([
      '2028-02-29',
      '2032-02-29',
    ]);
  });

  it('stops after the end date', () => {
    expect(getOccurrences(rule({ ends: 'on', until: '2026-10-23' }))).toEqual([
      '2026-10-21',
      '2026-10-22',
      '2026-10-23',
    ]);
  });

  it('counts skipped dates towards the number of occurrences', () => {
    expect(
      getOccurrences(rule({ ends: 'after', count: 3 }), { exceptions: ['2026-10-22'] })
    ).toEqual(['2026-10-21', '2026-10-23']);
  });

  it('returns no dates when every date is skipped', () => {
    expect(
      getOccurrences(rule({ ends: 'after', count: 1 }), { exceptions: ['2026-10-21'] })
    ).toEqual([]);
  });
});

describe('isInSeries', () => {
  it('accepts a date produced by the rule', () => {
    expect(isInSeries(rule({ repeat: 'weekly', weekdays: ['WE'] }), '2026-11-04')).toBe(true);
  });

  it('rejects a date the rule skips', () => {
    expect(isInSeries(rule({ repeat: 'weekly', weekdays: ['WE'] }), '2026-11-05')).toBe(false);
  });

  it('rejects a date before the start', () => {
    expect(isInSeries(rule({}), '2026-10-20')).toBe(false);
  });

  it('rejects a date after the last occurrence', () => {
    expect(isInSeries(rule({ ends: 'after', count: 2 }), '2026-10-23')).toBe(false);
  });
});
