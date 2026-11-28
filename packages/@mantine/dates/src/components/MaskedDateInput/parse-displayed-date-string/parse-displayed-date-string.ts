import type { ParsedDate } from '../parse-date-string/parse-date-string';

interface ParseDisplayedDateStringInput {
  value: string;
  fieldsOrder: ('day' | 'month' | 'year')[];
  dateSeparator: string;
  amPmLabels: { am: string; pm: string };
}

/**
 * Reads the whole value as the input displays it: `fieldsOrder` fields (4-digit year) joined by the
 * trimmed `dateSeparator`, then optionally `H:mm[:ss]` and an `amPmLabels` label, compared by letters
 * ignoring case (hours 1–12, returned in 24h format; not read when both labels have the same letters
 * or one has none). Returns all fields `null` for any other shape.
 */
export function parseDisplayedDateString({
  value,
  fieldsOrder,
  dateSeparator,
  amPmLabels,
}: ParseDisplayedDateStringInput): ParsedDate {
  const empty = { day: null, month: null, year: null, hours: null, minutes: null, seconds: null };
  const separator = `\\s*${dateSeparator.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*`;
  const date = fieldsOrder.map((field) => (field === 'year' ? '(\\d{4})' : '(\\d{1,2})'));
  const match = value
    .trim()
    .match(
      new RegExp(
        `^${date.join(separator)}(?:,?\\s+([01]?\\d|2[0-3]):([0-5]\\d)(?::([0-5]\\d))?(?:\\s*([^\\d\\s]\\D*))?)?$`
      )
    );

  if (!match) {
    return empty;
  }

  const [day, month, year] = (['day', 'month', 'year'] as const).map((field) =>
    Number(match[fieldsOrder.indexOf(field) + 1])
  );
  const [hours, minutes, seconds] = match
    .slice(4, 7)
    .map((n) => (n === undefined ? null : Number(n)));
  const parsed = { day, month, year, hours, minutes, seconds };

  if (hours === null || match[7] === undefined) {
    return parsed;
  }

  const [label, am, pm] = [match[7], amPmLabels.am, amPmLabels.pm].map((text) =>
    text.replace(/[^\p{L}]/gu, '').toLowerCase()
  );

  if (hours < 1 || hours > 12 || !am || !pm || am === pm || (label !== am && label !== pm)) {
    return empty;
  }

  return { ...parsed, hours: (hours % 12) + (label === pm ? 12 : 0) };
}
