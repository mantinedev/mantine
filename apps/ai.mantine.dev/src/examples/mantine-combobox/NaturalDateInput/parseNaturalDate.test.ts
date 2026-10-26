import { parseNaturalDate } from './parseNaturalDate';

// Monday, October 26, 2026, noon
const NOW = new Date(2026, 9, 26, 12, 0);

/** Local date; without hours it is the end of that day */
function local(year: number, month: number, day: number, hours?: number, minutes = 0) {
  return hours === undefined
    ? new Date(year, month - 1, day, 23, 59, 59, 999)
    : new Date(year, month - 1, day, hours, minutes);
}

function parse(text: string) {
  return parseNaturalDate(text, NOW)?.date ?? null;
}

describe('relative days', () => {
  it.each([
    ['today', local(2026, 10, 26)],
    ['tomorrow', local(2026, 10, 27)],
    ['yesterday', local(2026, 10, 25)],
  ])('resolves "%s"', (text, expected) => {
    expect(parse(text)).toEqual(expected);
  });

  it('ignores case and extra spaces', () => {
    expect(parse('  ToMoRRow ')).toEqual(local(2026, 10, 27));
  });

  it('marks dates without a time as due at the end of the day', () => {
    expect(parseNaturalDate('today', NOW)).toEqual({ date: local(2026, 10, 26), hasTime: false });
  });
});

describe('weekdays', () => {
  it.each([
    ['friday', local(2026, 10, 30)],
    ['fri', local(2026, 10, 30)],
    ['tues', local(2026, 10, 27)],
    ['thurs', local(2026, 10, 29)],
    ['sun', local(2026, 11, 1)],
  ])('resolves "%s" to the next such day', (text, expected) => {
    expect(parse(text)).toEqual(expected);
  });

  it('resolves the current weekday to the same day next week', () => {
    expect(parse('monday')).toEqual(local(2026, 11, 2));
  });

  it.each([
    ['next friday', local(2026, 11, 6)],
    ['next mon', local(2026, 11, 2)],
    ['next sunday', local(2026, 11, 8)],
  ])('resolves "%s" to that day of the next week', (text, expected) => {
    expect(parse(text)).toEqual(expected);
  });

  it('starts weeks on Monday when today is Sunday', () => {
    const sunday = new Date(2026, 10, 1, 12);
    expect(parseNaturalDate('next friday', sunday)?.date).toEqual(local(2026, 11, 6));
  });
});

describe('durations', () => {
  it.each([
    ['in 3 days', local(2026, 10, 29)],
    ['in 1 day', local(2026, 10, 27)],
    ['in 2 weeks', local(2026, 11, 9)],
    ['in 3 months', local(2027, 1, 26)],
    ['5 days from now', local(2026, 10, 31)],
    ['1 week from now', local(2026, 11, 2)],
  ])('resolves "%s"', (text, expected) => {
    expect(parse(text)).toEqual(expected);
  });

  it('clamps months to the last day of a shorter month', () => {
    const january31 = new Date(2027, 0, 31, 12);
    expect(parseNaturalDate('in 1 month', january31)?.date).toEqual(local(2027, 2, 28));
  });
});

describe('week and month boundaries', () => {
  it.each([
    ['next week', local(2026, 11, 2)],
    ['next month', local(2026, 11, 1)],
    ['end of week', local(2026, 11, 1)],
    ['end of month', local(2026, 10, 31)],
  ])('resolves "%s"', (text, expected) => {
    expect(parse(text)).toEqual(expected);
  });

  it('resolves "end of week" on Sunday to that Sunday', () => {
    const sunday = new Date(2026, 10, 1, 12);
    expect(parseNaturalDate('end of week', sunday)?.date).toEqual(local(2026, 11, 1));
  });

  it('resolves "next month" in December to January 1st', () => {
    const december = new Date(2026, 11, 15, 12);
    expect(parseNaturalDate('next month', december)?.date).toEqual(local(2027, 1, 1));
  });
});

describe('calendar dates', () => {
  it.each([
    ['mar 5', local(2027, 3, 5)],
    ['march 5', local(2027, 3, 5)],
    ['5 march', local(2027, 3, 5)],
    ['5th of march', local(2027, 3, 5)],
    ['march 5 2027', local(2027, 3, 5)],
    ['March 5, 2028', local(2028, 3, 5)],
    ['2027-03-05', local(2027, 3, 5)],
    ['3/5', local(2027, 3, 5)],
    ['12/24', local(2026, 12, 24)],
    ['3/5/2028', local(2028, 3, 5)],
  ])('resolves "%s"', (text, expected) => {
    expect(parse(text)).toEqual(expected);
  });

  it('resolves a date without a year to this year when it is still ahead', () => {
    expect(parse('nov 3')).toEqual(local(2026, 11, 3));
  });

  it('resolves a date without a year to today when it is today', () => {
    expect(parse('oct 26')).toEqual(local(2026, 10, 26));
  });

  it('resolves a date without a year to next year when it has passed', () => {
    expect(parse('oct 25')).toEqual(local(2027, 10, 25));
  });

  it('resolves February 29 without a year to the next leap year', () => {
    expect(parse('feb 29')).toEqual(local(2028, 2, 29));
  });

  it('reads the formatted value back', () => {
    expect(parse('Fri, Oct 30, 3:00 PM')).toEqual(local(2026, 10, 30, 15));
  });

  it.each(['feb 30', '2027-13-01', '13/5', 'smarch 5'])('rejects "%s"', (text) => {
    expect(parse(text)).toBeNull();
  });
});

describe('times', () => {
  it.each([
    ['friday at 3pm', local(2026, 10, 30, 15)],
    ['friday 3:30pm', local(2026, 10, 30, 15, 30)],
    ['tomorrow 15:30', local(2026, 10, 27, 15, 30)],
    ['tomorrow at noon', local(2026, 10, 27, 12)],
    ['tomorrow at midnight', local(2026, 10, 27, 0)],
    ['tomorrow at 12am', local(2026, 10, 27, 0)],
    ['tomorrow at 12pm', local(2026, 10, 27, 12)],
    ['in 2 days at 9 am', local(2026, 10, 28, 9)],
    ['march 5 2027 at 8:15am', local(2027, 3, 5, 8, 15)],
    ['3/5 at 5pm', local(2027, 3, 5, 17)],
    ['next week at 10am', local(2026, 11, 2, 10)],
  ])('resolves "%s"', (text, expected) => {
    expect(parse(text)).toEqual(expected);
  });

  it('marks dates with a time', () => {
    expect(parseNaturalDate('tomorrow at 3pm', NOW)?.hasTime).toBe(true);
  });

  it('accepts the time before the day', () => {
    expect(parse('3pm today')).toEqual(local(2026, 10, 26, 15));
  });

  it('resolves a time alone to today', () => {
    expect(parse('5pm')).toEqual(local(2026, 10, 26, 17));
  });

  it.each(['friday at 13pm', 'friday at 25:00', 'friday at 3:75pm', 'friday at 5'])(
    'rejects "%s"',
    (text) => {
      expect(parse(text)).toBeNull();
    }
  );
});

describe('unknown text', () => {
  it.each(['', '   ', 'soon', 'next', 'in days', 'in 3 years', 'fri at'])(
    'rejects "%s"',
    (text) => {
      expect(parse(text)).toBeNull();
    }
  );
});
