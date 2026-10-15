export type AmPm = 'am' | 'pm';

export interface AmPmLabels {
  am: string;
  pm: string;
}

export function to24Hours(hours: number, amPm: AmPm) {
  return (hours % 12) + (amPm === 'pm' ? 12 : 0);
}

export function to12Hours(hours: number): { hours: number; amPm: AmPm } {
  return { hours: hours % 12 === 0 ? 12 : hours % 12, amPm: hours >= 12 ? 'pm' : 'am' };
}

export function getHoursOfPeriod(amPm: AmPm) {
  return Array.from({ length: 12 }, (_, index) => to24Hours(index + 1, amPm));
}

function normalizeLabel(label: string) {
  return label.toLowerCase();
}

export function isAmPmLabel(text: string, label: string) {
  return normalizeLabel(text) === normalizeLabel(label);
}

export function getAmPmFromLabel(label: string | null, labels: AmPmLabels): AmPm | null {
  if (label === null) {
    return null;
  }

  return isAmPmLabel(label, labels.am) ? 'am' : isAmPmLabel(label, labels.pm) ? 'pm' : null;
}

export function getAmPmLabel(amPm: AmPm | null, labels: AmPmLabels) {
  return amPm === null ? null : labels[amPm];
}

export function findAmPmLabelSuffix(text: string, labels: AmPmLabels) {
  const normalized = normalizeLabel(text);

  for (const amPm of ['am', 'pm'] as const) {
    const label = normalizeLabel(labels[amPm]);
    if (label && normalized.endsWith(label)) {
      return { amPm, rest: text.slice(0, text.length - label.length) };
    }
  }

  return null;
}

export function findAmPmByLabelPrefix(prefix: string, labels: AmPmLabels): AmPm[] {
  const normalized = normalizeLabel(prefix);
  return (['am', 'pm'] as const).filter((amPm) =>
    normalizeLabel(labels[amPm]).startsWith(normalized)
  );
}
