export interface ParsedDate {
  date: Date;
  /** false when the phrase has no time: the date is due at the end of the day */
  hasTime: boolean;
}

export const WEEKDAYS = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];

export const MONTHS = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
];

const UNITS = ['day', 'week', 'month'] as const;
type Unit = (typeof UNITS)[number];

const TIME_PATTERN = String.raw`(noon|midnight|\d{1,2}(?::\d{2})?\s*(?:am|pm)|\d{1,2}:\d{2})`;
const TIME_AT_END = new RegExp(String.raw`^(.*?)\s*(?:\bat\s+)?${TIME_PATTERN}$`);
const TIME_AT_START = new RegExp(String.raw`^(?:at\s+)?${TIME_PATTERN}(?:\s+(.*))?$`);

export function normalizePhrase(text: string) {
  return text.toLowerCase().replace(/,/g, ' ').replace(/\s+/g, ' ').trim();
}

export function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function addDays(date: Date, days: number) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);
}

function addMonths(date: Date, months: number) {
  const first = new Date(date.getFullYear(), date.getMonth() + months, 1);
  return new Date(
    first.getFullYear(),
    first.getMonth(),
    Math.min(date.getDate(), daysInMonth(first))
  );
}

function daysInMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

/** Monday of the week that contains the date */
function startOfWeek(date: Date) {
  return addDays(startOfDay(date), -((date.getDay() + 6) % 7));
}

/** Last moment of the day: the due time of a date without a time */
export function endOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999);
}

export function isEndOfDay(date: Date) {
  return (
    date.getHours() === 23 &&
    date.getMinutes() === 59 &&
    date.getSeconds() === 59 &&
    date.getMilliseconds() === 999
  );
}

/** Index in WEEKDAYS for a full or short (3+ letters) weekday name */
export function findWeekday(token: string) {
  return token.length >= 3 ? WEEKDAYS.findIndex((day) => day.startsWith(token)) : -1;
}

/** Index in MONTHS for a full or short (3+ letters) month name */
export function findMonth(token: string) {
  return token.length >= 3 ? MONTHS.findIndex((month) => month.startsWith(token)) : -1;
}

function findUnit(token: string): Unit | null {
  return UNITS.find((unit) => token === unit || token === `${unit}s`) ?? null;
}

function addUnits(date: Date, amount: number, unit: Unit) {
  if (unit === 'day') {
    return addDays(date, amount);
  }
  if (unit === 'week') {
    return addDays(date, amount * 7);
  }
  return addMonths(date, amount);
}

function parseTime(text: string): { hours: number; minutes: number } | null {
  if (text === 'noon') {
    return { hours: 12, minutes: 0 };
  }
  if (text === 'midnight') {
    return { hours: 0, minutes: 0 };
  }

  const match = text.match(/^(\d{1,2})(?::(\d{2}))?\s*(am|pm)?$/);
  if (!match) {
    return null;
  }

  const hours = Number(match[1]);
  const minutes = match[2] === undefined ? 0 : Number(match[2]);
  const meridiem = match[3];
  if (minutes > 59) {
    return null;
  }
  if (meridiem) {
    if (hours < 1 || hours > 12) {
      return null;
    }
    return { hours: (hours % 12) + (meridiem === 'pm' ? 12 : 0), minutes };
  }
  return hours <= 23 ? { hours, minutes } : null;
}

function makeDate(year: number, month: number, day: number) {
  const date = new Date(year, month, day);
  return date.getMonth() === month && date.getDate() === day ? date : null;
}

/** A date without a year is the next such date, today included */
function nextDate(month: number, day: number, today: Date) {
  for (let year = today.getFullYear(); year <= today.getFullYear() + 8; year += 1) {
    const date = makeDate(year, month, day);
    if (date && date >= today) {
      return date;
    }
  }
  return null;
}

function dateFromParts(month: number, day: number, year: string | undefined, today: Date) {
  if (month < 0 || month > 11) {
    return null;
  }
  if (year === undefined) {
    return nextDate(month, day, today);
  }
  const fullYear = year.length === 2 ? 2000 + Number(year) : Number(year);
  return makeDate(fullYear, month, day);
}

function parseCalendarDate(text: string, today: Date): Date | null {
  const iso = text.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (iso) {
    return makeDate(Number(iso[1]), Number(iso[2]) - 1, Number(iso[3]));
  }

  const slash = text.match(/^(\d{1,2})\/(\d{1,2})(?:\/(\d{4}|\d{2}))?$/);
  if (slash) {
    return dateFromParts(Number(slash[1]) - 1, Number(slash[2]), slash[3], today);
  }

  const monthFirst = text.match(/^([a-z]+)\.?\s+(\d{1,2})(?:st|nd|rd|th)?(?:\s+(\d{4}))?$/);
  if (monthFirst) {
    return dateFromParts(findMonth(monthFirst[1]), Number(monthFirst[2]), monthFirst[3], today);
  }

  const dayFirst = text.match(/^(\d{1,2})(?:st|nd|rd|th)?\s+(?:of\s+)?([a-z]+)\.?(?:\s+(\d{4}))?$/);
  if (dayFirst) {
    return dateFromParts(findMonth(dayFirst[2]), Number(dayFirst[1]), dayFirst[3], today);
  }

  return null;
}

function parseDay(text: string, now: Date): Date | null {
  const today = startOfDay(now);

  switch (text) {
    case 'today':
      return today;
    case 'tomorrow':
      return addDays(today, 1);
    case 'yesterday':
      return addDays(today, -1);
    case 'next week':
      return addDays(startOfWeek(today), 7);
    case 'next month':
      return new Date(today.getFullYear(), today.getMonth() + 1, 1);
    case 'end of week':
      return addDays(startOfWeek(today), 6);
    case 'end of month':
      return new Date(today.getFullYear(), today.getMonth() + 1, 0);
  }

  const weekday = findWeekday(text);
  if (weekday !== -1) {
    // the next such day, never today
    const offset = (weekday - ((today.getDay() + 6) % 7) + 7) % 7 || 7;
    return addDays(today, offset);
  }

  const nextWeekday = text.match(/^next ([a-z]+)$/);
  if (nextWeekday && findWeekday(nextWeekday[1]) !== -1) {
    return addDays(startOfWeek(today), 7 + findWeekday(nextWeekday[1]));
  }

  const inUnits =
    text.match(/^in (\d{1,4}) ([a-z]+)$/) ?? text.match(/^(\d{1,4}) ([a-z]+) from now$/);
  if (inUnits && findUnit(inUnits[2])) {
    return addUnits(today, Number(inUnits[1]), findUnit(inUnits[2])!);
  }

  const calendarDate = parseCalendarDate(text, today);
  if (calendarDate) {
    return calendarDate;
  }

  // "fri oct 30": a weekday in front of a calendar date, as in the formatted value
  const withWeekday = text.match(/^([a-z]+)\.?\s+(.+)$/);
  if (withWeekday && findWeekday(withWeekday[1]) !== -1) {
    return parseCalendarDate(withWeekday[2], today);
  }

  return null;
}

/**
 * Parses a due date phrase ("next friday at 3pm", "mar 5", "in 2 weeks").
 * Returns null when the text is not understood.
 */
export function parseNaturalDate(text: string, now: Date = new Date()): ParsedDate | null {
  const phrase = normalizePhrase(text);
  if (phrase === '') {
    return null;
  }

  let dayText = phrase;
  let time: { hours: number; minutes: number } | null = null;

  const timeAtEnd = phrase.match(TIME_AT_END);
  const timeAtStart = phrase.match(TIME_AT_START);
  if (timeAtEnd && parseTime(timeAtEnd[2])) {
    dayText = timeAtEnd[1];
    time = parseTime(timeAtEnd[2]);
  } else if (timeAtStart && parseTime(timeAtStart[1])) {
    dayText = timeAtStart[2] ?? '';
    time = parseTime(timeAtStart[1]);
  }

  const day = dayText === '' && time ? startOfDay(now) : parseDay(dayText, now);
  if (!day) {
    return null;
  }

  if (!time) {
    return { date: endOfDay(day), hasTime: false };
  }

  return {
    date: new Date(day.getFullYear(), day.getMonth(), day.getDate(), time.hours, time.minutes),
    hasTime: true,
  };
}
