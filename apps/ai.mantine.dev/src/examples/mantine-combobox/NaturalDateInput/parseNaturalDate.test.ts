import {
  formatDueDate,
  formatRelative,
  parseNaturalDate,
  type ParsedDate,
} from './parseNaturalDate';

// Wednesday, October 28, 2026, noon (local time)
const NOW = new Date(2026, 9, 28, 12, 0);

function endOfDay(year: number, month: number, day: number) {
  return new Date(year, month, day, 23, 59, 59, 999);
}

function parse(text: string, now = NOW): ParsedDate | null {
  return parseNaturalDate(text, now);
}

describe('parseNaturalDate', () => {
  describe('relative days', () => {
    it.each([
      ['today', endOfDay(2026, 9, 28)],
      ['tomorrow', endOfDay(2026, 9, 29)],
      ['yesterday', endOfDay(2026, 9, 27)],
    ])('resolves "%s"', (text, expected) => {
      expect(parse(text)?.date).toEqual(expected);
    });

    it('ignores case and extra spaces', () => {
      expect(parse('  ToMoRRow ')?.date).toEqual(endOfDay(2026, 9, 29));
    });

    it('marks a date without a time as due at the end of the day', () => {
      expect(parse('tomorrow')?.hasTime).toBe(false);
    });
  });

  describe('weekdays', () => {
    it.each([
      ['fri', endOfDay(2026, 9, 30)],
      ['friday', endOfDay(2026, 9, 30)],
      ['mon', endOfDay(2026, 10, 2)],
      ['thurs', endOfDay(2026, 9, 29)],
    ])('resolves "%s" to the next such day', (text, expected) => {
      expect(parse(text)?.date).toEqual(expected);
    });

    it('resolves the current weekday to the same day of the next week', () => {
      expect(parse('wednesday')?.date).toEqual(endOfDay(2026, 10, 4));
    });

    it.each([
      ['next friday', endOfDay(2026, 10, 6)],
      ['next mon', endOfDay(2026, 10, 2)],
      ['next sunday', endOfDay(2026, 10, 8)],
    ])('resolves "%s" to that day of the next week', (text, expected) => {
      expect(parse(text)?.date).toEqual(expected);
    });

    it('resolves "this monday" to the Monday of the current week', () => {
      expect(parse('this monday')?.date).toEqual(endOfDay(2026, 9, 26));
    });
  });

  describe('offsets', () => {
    it.each([
      ['in 3 days', endOfDay(2026, 9, 31)],
      ['in 1 day', endOfDay(2026, 9, 29)],
      ['in 2 weeks', endOfDay(2026, 10, 11)],
      ['in a week', endOfDay(2026, 10, 4)],
      ['in 1 month', endOfDay(2026, 10, 28)],
      ['in 3 months', endOfDay(2027, 0, 28)],
      ['5 days from now', endOfDay(2026, 10, 2)],
      ['2 weeks from now', endOfDay(2026, 10, 11)],
    ])('resolves "%s"', (text, expected) => {
      expect(parse(text)?.date).toEqual(expected);
    });

    it('clamps a month offset to the last day of a shorter month', () => {
      expect(parse('in 1 month', new Date(2027, 0, 31, 9))?.date).toEqual(endOfDay(2027, 1, 28));
    });
  });

  describe('weeks and months', () => {
    it.each([
      ['next week', endOfDay(2026, 10, 2)],
      ['next month', endOfDay(2026, 10, 1)],
      ['end of week', endOfDay(2026, 10, 1)],
      ['end of month', endOfDay(2026, 9, 31)],
    ])('resolves "%s"', (text, expected) => {
      expect(parse(text)?.date).toEqual(expected);
    });

    it('starts weeks on Monday when today is Sunday', () => {
      const sunday = new Date(2026, 10, 1, 10);
      expect(parse('next week', sunday)?.date).toEqual(endOfDay(2026, 10, 2));
    });

    it('resolves "end of week" on Sunday to that Sunday', () => {
      const sunday = new Date(2026, 10, 1, 10);
      expect(parse('end of week', sunday)?.date).toEqual(endOfDay(2026, 10, 1));
    });
  });

  describe('calendar dates', () => {
    it.each([
      ['mar 5', endOfDay(2027, 2, 5)],
      ['March 5', endOfDay(2027, 2, 5)],
      ['5 march', endOfDay(2027, 2, 5)],
      ['5th of march', endOfDay(2027, 2, 5)],
      ['march 5 2027', endOfDay(2027, 2, 5)],
      ['march 5, 2028', endOfDay(2028, 2, 5)],
      ['2027-03-05', endOfDay(2027, 2, 5)],
      ['3/5', endOfDay(2027, 2, 5)],
      ['3/5/2027', endOfDay(2027, 2, 5)],
      ['dec 25', endOfDay(2026, 11, 25)],
      ['12/25', endOfDay(2026, 11, 25)],
    ])('resolves "%s"', (text, expected) => {
      expect(parse(text)?.date).toEqual(expected);
    });

    it('resolves a date without a year that already passed to next year', () => {
      expect(parse('oct 27')?.date).toEqual(endOfDay(2027, 9, 27));
    });

    it('resolves a date without a year that is today to today', () => {
      expect(parse('oct 28')?.date).toEqual(endOfDay(2026, 9, 28));
    });

    it('accepts a past date with an explicit year', () => {
      expect(parse('2025-01-15')?.date).toEqual(endOfDay(2025, 0, 15));
    });

    it.each(['feb 30', '2026-02-29', '13/1', '0/5', 'mar 32'])(
      'rejects the invalid date "%s"',
      (text) => {
        expect(parse(text)).toBeNull();
      }
    );

    it('resolves Feb 29 without a year to the next leap year', () => {
      expect(parse('feb 29')?.date).toEqual(endOfDay(2028, 1, 29));
    });

    it('reads its own formatted output back', () => {
      const date = new Date(2027, 2, 5, 15, 30);
      expect(parse(formatDueDate(date, NOW))?.date).toEqual(date);
    });
  });

  describe('times', () => {
    it.each([
      ['at 3pm', new Date(2026, 9, 28, 15, 0)],
      ['3:30pm', new Date(2026, 9, 28, 15, 30)],
      ['3:30 PM', new Date(2026, 9, 28, 15, 30)],
      ['15:30', new Date(2026, 9, 28, 15, 30)],
      ['noon', new Date(2026, 9, 28, 12, 0)],
      ['midnight', new Date(2026, 9, 28, 0, 0)],
      ['12am', new Date(2026, 9, 28, 0, 0)],
      ['12pm', new Date(2026, 9, 28, 12, 0)],
    ])('resolves "%s" to today at that time', (text, expected) => {
      expect(parse(text)?.date).toEqual(expected);
    });

    it.each([
      ['tomorrow at 3pm', new Date(2026, 9, 29, 15, 0)],
      ['friday at 5pm', new Date(2026, 9, 30, 17, 0)],
      ['next friday 9am', new Date(2026, 10, 6, 9, 0)],
      ['mar 5 at noon', new Date(2027, 2, 5, 12, 0)],
      ['2027-03-05 15:30', new Date(2027, 2, 5, 15, 30)],
      ['in 2 days at midnight', new Date(2026, 9, 30, 0, 0)],
      ['end of month at 5:45pm', new Date(2026, 9, 31, 17, 45)],
      ['3pm today', new Date(2026, 9, 28, 15, 0)],
      ['9am tomorrow', new Date(2026, 9, 29, 9, 0)],
    ])('resolves "%s"', (text, expected) => {
      expect(parse(text)?.date).toEqual(expected);
    });

    it('marks a date with a time', () => {
      expect(parse('tomorrow at 3pm')?.hasTime).toBe(true);
    });

    it.each(['13pm', '25:00', '3:75pm', 'tomorrow at 3'])(
      'rejects the invalid time "%s"',
      (text) => {
        expect(parse(text)).toBeNull();
      }
    );
  });

  it.each(['', 'blah', 'fri 5', 'next', 'in days', 'march'])('returns null for "%s"', (text) => {
    expect(parse(text)).toBeNull();
  });
});

describe('formatDueDate', () => {
  it('shows weekday, month, day and time', () => {
    expect(formatDueDate(new Date(2026, 9, 30, 15, 0), NOW)).toBe('Fri, Oct 30, 3:00 PM');
  });

  it('leaves the time out at the end of the day', () => {
    expect(formatDueDate(endOfDay(2026, 9, 30), NOW)).toBe('Fri, Oct 30');
  });

  it('shows the year when it is not the current one', () => {
    expect(formatDueDate(endOfDay(2027, 2, 5), NOW)).toBe('Fri, Mar 5, 2027');
  });

  it('shows midnight as 12:00 AM', () => {
    expect(formatDueDate(new Date(2026, 9, 30, 0, 5), NOW)).toBe('Fri, Oct 30, 12:05 AM');
  });
});

describe('formatRelative', () => {
  it.each([
    [endOfDay(2026, 9, 28), 'today'],
    [endOfDay(2026, 9, 29), 'tomorrow'],
    [endOfDay(2026, 9, 27), 'yesterday'],
    [new Date(2026, 9, 30, 15), 'in 2 days'],
    [endOfDay(2026, 9, 25), '3 days ago'],
    [endOfDay(2026, 10, 18), 'in 3 weeks'],
    [endOfDay(2027, 2, 5), 'in 4 months'],
    [endOfDay(2028, 9, 28), 'in 2 years'],
    [new Date(2026, 9, 28, 15), 'in 3 hours'],
    [new Date(2026, 9, 28, 12, 20), 'in 20 minutes'],
    [new Date(2026, 9, 28, 9), '3 hours ago'],
    [new Date(2026, 9, 28, 13), 'in 1 hour'],
  ])('describes %s as "%s"', (date, expected) => {
    expect(formatRelative(date, NOW)).toBe(expected);
  });
});
