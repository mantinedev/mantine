import { MONTHS, normalizePhrase, parseNaturalDate, WEEKDAYS } from './parseNaturalDate';

export interface DateSuggestion {
  /** Text shown in the option */
  label: string;
  date: Date;
}

export const MAX_SUGGESTIONS = 5;

const PRESETS = ['Today', 'Tomorrow', 'Next week', 'End of month'];

const DATE_PHRASES = [
  'today',
  'tomorrow',
  'yesterday',
  'next week',
  'next month',
  'end of week',
  'end of month',
  ...WEEKDAYS,
  ...WEEKDAYS.map((weekday) => `next ${weekday}`),
];

const DEFAULT_TIMES = ['at 9am', 'at noon', 'at 5pm'];

/** Presets shown when the input is empty */
export function getPresets(now: Date = new Date()): DateSuggestion[] {
  return PRESETS.map((label) => ({ label, date: parseNaturalDate(label, now)!.date }));
}

/** Times the typed number may stand for: "5" → "5pm", "5am"; "17" → "17:00" */
function timeVariants(hours: number, minutes: string | undefined) {
  const suffix = minutes === undefined ? '' : `:${minutes}`;
  if (hours >= 1 && hours <= 12) {
    return [`${hours}${suffix}pm`, `${hours}${suffix}am`];
  }
  if (hours >= 13 && hours <= 23) {
    return [`${hours}:${minutes ?? '00'}`];
  }
  return [];
}

/** Phrases that may complete the query, in the order they are suggested */
function candidatePhrases(query: string) {
  const numberMatch = query.match(/(?:^|\s)(\d{1,3})(?::(\d{0,2}))?(?:[ap]m?)?(?=\s|$)/);
  if (!numberMatch) {
    return [
      ...DATE_PHRASES,
      ...DATE_PHRASES.flatMap((phrase) => DEFAULT_TIMES.map((time) => `${phrase} ${time}`)),
    ];
  }

  const count = Number(numberMatch[1]);
  const minutes = numberMatch[2] === undefined ? undefined : numberMatch[2].padEnd(2, '0');
  const times = timeVariants(count, minutes);
  const phrases: string[] = [];

  if (minutes === undefined && count > 0) {
    phrases.push(`in ${count} days`, `in ${count} weeks`);
    if (times.length > 0) {
      phrases.push(`${times[0]} today`);
    }
    phrases.push(`in ${count} months`);
    if (times.length > 1) {
      phrases.push(`${times[1]} tomorrow`);
    }
    phrases.push(`${count} days from now`, `${count} weeks from now`);
  } else {
    phrases.push(...times.map((time) => `${time} today`));
  }

  phrases.push(...DATE_PHRASES.flatMap((phrase) => times.map((time) => `${phrase} at ${time}`)));

  if (minutes === undefined && count >= 1 && count <= 31) {
    phrases.push(...MONTHS.map((month) => `${month} ${count}`));
  }

  return phrases;
}

/** Every query word is the start of a phrase word, in the same order: "fri 5" ~ "friday at 5pm" */
function matchesWords(queryWords: string[], phrase: string) {
  const phraseWords = phrase.split(' ');
  let position = 0;
  return queryWords.every((word) => {
    while (position < phraseWords.length && !phraseWords[position].startsWith(word)) {
      position += 1;
    }
    position += 1;
    return position <= phraseWords.length;
  });
}

/**
 * Up to five phrases that complete the query and resolve to a date.
 * When the query itself is understood it comes first.
 */
export function getSuggestions(query: string, now: Date = new Date()): DateSuggestion[] {
  const normalized = normalizePhrase(query);
  if (normalized === '') {
    return getPresets(now);
  }

  const suggestions: DateSuggestion[] = [];
  const typed = parseNaturalDate(query, now);
  if (typed) {
    suggestions.push({ label: query.trim().replace(/\s+/g, ' '), date: typed.date });
  }

  const queryWords = normalized.split(' ');
  for (const phrase of candidatePhrases(normalized)) {
    if (suggestions.length >= MAX_SUGGESTIONS) {
      break;
    }
    if (!matchesWords(queryWords, phrase) || normalizePhrase(phrase) === normalized) {
      continue;
    }
    const parsed = parseNaturalDate(phrase, now);
    // A longer spelling of what was typed ("march 5" for "mar 5") adds nothing
    if (!parsed || (typed && parsed.date.getTime() === typed.date.getTime())) {
      continue;
    }
    suggestions.push({ label: phrase, date: parsed.date });
  }

  return suggestions;
}
