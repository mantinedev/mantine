import { MONTHS, normalizePhrase, parseNaturalDate, WEEKDAYS } from './parseNaturalDate';

export interface DateSuggestion {
  phrase: string;
  date: Date;
}

const MAX_SUGGESTIONS = 5;

const FIXED_PHRASES = [
  'today',
  'tomorrow',
  'yesterday',
  'next week',
  'next month',
  ...WEEKDAYS.map((day) => `next ${day}`),
  'end of week',
  'end of month',
  ...WEEKDAYS,
  'in 1 week',
  'in 2 weeks',
  'in 1 month',
];

const UNITS = ['day', 'week', 'month'];

const isNumber = (token: string) => /^\d{1,4}$/.test(token);

function units(count: number, unit: string) {
  return `${count} ${unit}${count === 1 ? '' : 's'}`;
}

/** Every token is the start of the phrase word at the same position: "ne w" → "next week" */
function matchesWords(tokens: string[], phrase: string) {
  const words = phrase.split(' ');
  return (
    tokens.length <= words.length && tokens.every((token, index) => words[index].startsWith(token))
  );
}

function matchingUnits(token: string) {
  return UNITS.filter((unit) => unit.startsWith(token) || `${unit}s`.startsWith(token));
}

function matchingMonths(token: string) {
  return MONTHS.filter((month) => month.startsWith(token));
}

/**
 * Date phrases the tokens can grow into.
 * `final` is false when a time follows the tokens, so they are already a whole date.
 */
function completeDate(tokens: string[], final: boolean): string[] {
  const result = FIXED_PHRASES.filter((phrase) => matchesWords(tokens, phrase));
  const [first, second, third, ...rest] = tokens;

  if (tokens.length === 1 && isNumber(first)) {
    const count = Number(first);
    result.push(...UNITS.map((unit) => `in ${units(count, unit)}`));
  }

  if (first === 'in' && second !== undefined && isNumber(second) && tokens.length <= 3) {
    const count = Number(second);
    result.push(...matchingUnits(third ?? '').map((unit) => `in ${units(count, unit)}`));
  }

  if (isNumber(first) && second !== undefined) {
    const count = Number(first);
    if (tokens.length === 2) {
      result.push(...matchingUnits(second).map((unit) => `in ${units(count, unit)}`));
      result.push(...matchingMonths(second).map((month) => `${count} ${month}`));
    } else if (matchingUnits(second).length > 0 && matchesWords([third, ...rest], 'from now')) {
      result.push(...matchingUnits(second).map((unit) => `${units(count, unit)} from now`));
    } else if (tokens.length === 3 && /^\d{4}$/.test(third)) {
      result.push(...matchingMonths(second).map((month) => `${count} ${month} ${third}`));
    }
  }

  if (/^[a-z]+$/.test(first) && !FIXED_PHRASES.some((phrase) => phrase.startsWith(first))) {
    if (tokens.length === 1 && final && first.length >= 3) {
      result.push(...matchingMonths(first).map((month) => `${month} 1`));
    }
    if (second !== undefined && isNumber(second) && tokens.length <= 3) {
      const year = third !== undefined && /^\d{4}$/.test(third) ? ` ${third}` : '';
      if (third === undefined || year) {
        result.push(...matchingMonths(first).map((month) => `${month} ${Number(second)}${year}`));
      }
    }
  }

  return result;
}

/** Morning hours suggest am first, the rest pm first: "9" → 9am, "5" → 5pm */
function withMeridiem(time: string, hours: number) {
  return hours >= 7 && hours <= 11 ? [`${time}am`, `${time}pm`] : [`${time}pm`, `${time}am`];
}

/** Time phrases the tokens can grow into: "5" → "5pm", "5am"; "n" → "noon" */
function completeTime(tokens: string[]): string[] {
  const rest = tokens[0] === 'at' || tokens[0] === 'a' ? tokens.slice(1) : tokens;
  if (rest.length === 0) {
    return tokens.length > 0 ? ['9am', 'noon', '5pm'] : [];
  }

  const text = rest.join('');
  // one letter is a word only after "at": "end of m" is not "end of midnight"
  const canBeWord = text.length >= 2 || rest !== tokens;
  const result = canBeWord ? ['noon', 'midnight'].filter((word) => word.startsWith(text)) : [];

  const match = text.match(/^(\d{1,2})(?::(\d{0,2}))?(a|am|p|pm)?$/);
  if (!match) {
    return result;
  }

  const hours = Number(match[1]);
  const minutes = match[2] === undefined ? undefined : match[2].padEnd(2, '0');
  const meridiem = match[3];
  if (minutes !== undefined && Number(minutes) > 59) {
    return result;
  }

  const time = minutes === undefined ? String(hours) : `${hours}:${minutes}`;
  if (meridiem) {
    if (hours >= 1 && hours <= 12) {
      result.push(`${time}${meridiem[0]}m`);
    }
  } else if (hours >= 1 && hours <= 12) {
    result.push(...withMeridiem(time, hours));
  } else if (hours <= 23) {
    result.push(`${hours}:${minutes ?? '00'}`);
  }

  return result;
}

function candidates(tokens: string[]): string[] {
  // a lone number is a count of days and weeks, or an hour
  if (tokens.length === 1 && isNumber(tokens[0])) {
    const count = Number(tokens[0]);
    const [time] = completeTime(tokens);
    return [
      `in ${units(count, 'day')}`,
      `in ${units(count, 'week')}`,
      ...(time ? [`${time} today`] : []),
      `in ${units(count, 'month')}`,
      ...(time ? [`${time} tomorrow`] : []),
      `${units(count, 'day')} from now`,
    ];
  }

  const result: string[] = [];
  for (let split = tokens.length; split >= 1; split -= 1) {
    const dates = completeDate(tokens.slice(0, split), split === tokens.length);
    if (split === tokens.length) {
      result.push(...dates);
    } else {
      const times = completeTime(tokens.slice(split));
      dates.forEach((date) => times.forEach((time) => result.push(`${date} at ${time}`)));
    }
  }

  completeTime(tokens).forEach((time) => result.push(`${time} today`, `${time} tomorrow`));
  return result;
}

/** Up to five phrases that complete the text, each with the date it resolves to */
export function getDateSuggestions(text: string, now: Date = new Date()): DateSuggestion[] {
  const phrase = normalizePhrase(text);
  if (phrase === '') {
    return [];
  }

  const suggestions: DateSuggestion[] = [];
  for (const candidate of candidates(phrase.split(' '))) {
    const parsed = parseNaturalDate(candidate, now);
    if (parsed && !suggestions.some((item) => item.phrase === candidate)) {
      suggestions.push({ phrase: candidate, date: parsed.date });
    }
  }

  // text that already parses ("3/5", "2027-03-05") comes first unless a completion resolves to the same date
  const exact = parseNaturalDate(phrase, now);
  if (exact && !suggestions.some((item) => item.date.getTime() === exact.date.getTime())) {
    suggestions.unshift({ phrase, date: exact.date });
  }

  return suggestions.slice(0, MAX_SUGGESTIONS);
}
