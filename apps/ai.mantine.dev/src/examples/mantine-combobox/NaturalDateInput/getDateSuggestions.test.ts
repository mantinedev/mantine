import { formatDueDate, formatRelative } from './formatDueDate';
import { getDateSuggestions } from './getDateSuggestions';

// Monday, October 26, 2026, noon
const NOW = new Date(2026, 9, 26, 12, 0);

function phrases(text: string) {
  return getDateSuggestions(text, NOW).map((item) => item.phrase);
}

describe('getDateSuggestions', () => {
  it('completes "ne" with next week, next month and weekdays of the next week', () => {
    expect(phrases('ne')).toEqual([
      'next week',
      'next month',
      'next monday',
      'next tuesday',
      'next wednesday',
    ]);
  });

  it('completes a number with durations and hours', () => {
    expect(phrases('3')).toEqual([
      'in 3 days',
      'in 3 weeks',
      '3pm today',
      'in 3 months',
      '3pm tomorrow',
    ]);
  });

  it('completes a weekday followed by an hour with pm and am times', () => {
    expect(phrases('fri 5')).toEqual(['friday at 5pm', 'friday at 5am']);
  });

  it('completes a short weekday to its full name', () => {
    expect(phrases('fri')).toEqual(['friday']);
  });

  it('completes every word of a phrase from its first letters', () => {
    expect(phrases('e o m')).toEqual(['end of month']);
  });

  it('completes a duration unit', () => {
    expect(phrases('in 2 w')).toEqual(['in 2 weeks']);
  });

  it('completes a month name in a date', () => {
    expect(phrases('mar 5')).toEqual(['march 5']);
  });

  it('completes minutes of a time', () => {
    expect(phrases('tomorrow at 5:3')).toEqual(['tomorrow at 5:30pm', 'tomorrow at 5:30am']);
  });

  it('suggests am first for morning hours', () => {
    expect(phrases('tomorrow 9')).toEqual(['tomorrow at 9am', 'tomorrow at 9pm']);
  });

  it('completes noon', () => {
    expect(phrases('tomorrow at no')).toEqual(['tomorrow at noon']);
  });

  it('suggests text that already parses as it is', () => {
    expect(phrases('2027-03-05')).toEqual(['2027-03-05']);
  });

  it('returns at most five suggestions', () => {
    expect(phrases('t').length).toBeLessThanOrEqual(5);
  });

  it('returns no suggestions for text it cannot complete', () => {
    expect(phrases('soon')).toEqual([]);
  });

  it('returns no suggestions for empty text', () => {
    expect(phrases('  ')).toEqual([]);
  });

  it('resolves every suggestion to its date', () => {
    const [friday] = getDateSuggestions('fri 3p', NOW);
    expect(friday).toEqual({ phrase: 'friday at 3pm', date: new Date(2026, 9, 30, 15) });
  });
});

describe('formatDueDate', () => {
  it('shows the weekday, date and time', () => {
    expect(formatDueDate(new Date(2026, 9, 30, 15), NOW)).toBe('Fri, Oct 30, 3:00 PM');
  });

  it('leaves out the time of a date due at the end of the day', () => {
    expect(formatDueDate(new Date(2026, 9, 30, 23, 59, 59, 999), NOW)).toBe('Fri, Oct 30');
  });

  it('shows the year of a date in another year', () => {
    expect(formatDueDate(new Date(2027, 2, 5, 8, 5), NOW)).toBe('Fri, Mar 5, 2027, 8:05 AM');
  });

  it('shows midnight as 12 AM', () => {
    expect(formatDueDate(new Date(2026, 9, 27, 0), NOW)).toBe('Tue, Oct 27, 12:00 AM');
  });
});

describe('formatRelative', () => {
  it.each([
    [new Date(2026, 9, 26, 18), 'today'],
    [new Date(2026, 9, 27, 9), 'tomorrow'],
    [new Date(2026, 9, 25, 9), 'yesterday'],
    [new Date(2026, 9, 30, 15), 'in 4 days'],
    [new Date(2026, 9, 21, 9), '5 days ago'],
    [new Date(2026, 10, 16), 'in 3 weeks'],
    [new Date(2027, 2, 5), 'in 4 months'],
    [new Date(2028, 9, 26), 'in 2 years'],
  ])('describes %s as "%s"', (date, expected) => {
    expect(formatRelative(date, NOW)).toBe(expected);
  });
});
