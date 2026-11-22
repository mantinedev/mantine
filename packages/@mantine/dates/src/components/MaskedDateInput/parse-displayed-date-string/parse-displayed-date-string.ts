import type { ParsedDate } from '../parse-date-string/parse-date-string';

interface ParseDisplayedDateStringInput {
  value: string;
  fieldsOrder: ('day' | 'month' | 'year')[];
  dateSeparator: string;
  amPmLabels: { am: string; pm: string };
}

function normalizeLabel(label: string) {
  return label.replace(/[^\p{L}]/gu, '').toLowerCase();
}

/**
 * Reads a date pasted in the shape the input displays: day, month and year in `fieldsOrder`
 * (year with 4 digits) separated by the trimmed `dateSeparator` with optional whitespace around it,
 * then optionally a space or a comma and a time in `H:mm` or `H:mm:ss` format (hours 0–23), then
 * optionally an am/pm label from `amPmLabels`, compared by letters only and ignoring case. Hours
 * with a label must be 1–12 and are returned in 24h format. A label is not read when the two labels
 * have the same letters or one has none. All fields are `null` when the whole value does not have
 * this shape.
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
  const label = match[7] === undefined ? null : normalizeLabel(match[7]);
  const am = normalizeLabel(amPmLabels.am);
  const pm = normalizeLabel(amPmLabels.pm);
  const parsed = { day, month, year, hours, minutes, seconds };

  if (label === null || hours === null) {
    return parsed;
  }

  if (hours < 1 || hours > 12 || !am || !pm || am === pm) {
    return empty;
  }

  if (label === am) {
    return { ...parsed, hours: hours % 12 };
  }

  return label === pm ? { ...parsed, hours: (hours % 12) + 12 } : empty;
}
