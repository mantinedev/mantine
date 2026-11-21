import 'dayjs/locale/ru';
import { getWeekFormatter } from './get-week-formatter';

const base = { locale: 'en', format: 'MMM D, YYYY', labelSeparator: '–' };

describe('@mantine/dates/get-week-formatter', () => {
  it('formats a single week as start – end', () => {
    expect(getWeekFormatter(1)({ ...base, type: 'default', date: '2026-03-04' })).toBe(
      'Mar 2, 2026 – Mar 8, 2026'
    );
    expect(getWeekFormatter(0)({ ...base, type: 'default', date: '2026-03-04' })).toBe(
      'Mar 1, 2026 – Mar 7, 2026'
    );
  });

  it('returns empty string for null value', () => {
    expect(getWeekFormatter(1)({ ...base, type: 'default', date: null })).toBe('');
  });

  it('returns empty string for an empty scalar value', () => {
    expect(getWeekFormatter(1)({ ...base, type: 'default', date: '' })).toBe('');
  });

  it('formats a range from start of first week to end of last week', () => {
    expect(
      getWeekFormatter(1)({ ...base, type: 'range', date: ['2026-03-02', '2026-03-16'] })
    ).toBe('Mar 2, 2026 – Mar 22, 2026');
  });

  it('formats a partial range with trailing separator', () => {
    expect(getWeekFormatter(1)({ ...base, type: 'range', date: ['2026-03-02', null] })).toBe(
      'Mar 2, 2026 – '
    );
    expect(getWeekFormatter(1)({ ...base, type: 'range', date: [null, null] })).toBe('');
  });

  it('formats multiple weeks as comma separated spans', () => {
    expect(
      getWeekFormatter(1)({ ...base, type: 'multiple', date: ['2026-03-02', '2026-03-16'] })
    ).toBe('Mar 2, 2026 – Mar 8, 2026, Mar 16, 2026 – Mar 22, 2026');
  });

  it('uses locale for formatting', () => {
    expect(
      getWeekFormatter(1)({ ...base, locale: 'ru', type: 'default', date: '2026-03-04' })
    ).toBe('март 2, 2026 – март 8, 2026');
  });
});
