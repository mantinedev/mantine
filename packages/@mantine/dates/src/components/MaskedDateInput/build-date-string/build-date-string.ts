import { AmPm, to24Hours } from '../../TimePicker/utils/convert-hours/convert-hours';

interface BuildDateStringInput {
  day: number | null;
  month: number | null;
  year: number | null;
  hours: number | null;
  minutes: number | null;
  seconds: number | null;
  withTime: boolean;
  withSeconds: boolean;
  format?: '24h' | '12h';
  amPm?: AmPm | null;
}

interface BuildDateStringResult {
  valid: boolean;
  value: string;
}

function pad(value: number, length: number): string {
  return String(value).padStart(length, '0');
}

export function buildDateString(input: BuildDateStringInput): BuildDateStringResult {
  const invalid: BuildDateStringResult = { valid: false, value: '' };

  if (input.day === null || input.month === null || input.year === null) {
    return invalid;
  }

  if (input.month < 1 || input.month > 12) {
    return invalid;
  }

  const maxDays = new Date(input.year, input.month, 0).getDate();
  if (input.day < 1 || input.day > maxDays) {
    return invalid;
  }

  if (input.withTime && (input.hours === null || input.minutes === null)) {
    return invalid;
  }

  if (input.withSeconds && input.seconds === null) {
    return invalid;
  }

  if (input.withTime && input.hours !== null && input.minutes !== null) {
    if (input.format !== '12h' && (input.hours < 0 || input.hours > 23)) {
      return invalid;
    }
    if (input.minutes < 0 || input.minutes > 59) {
      return invalid;
    }
    if (input.withSeconds && input.seconds !== null && (input.seconds < 0 || input.seconds > 59)) {
      return invalid;
    }
  }

  if (input.format === '12h') {
    if (input.amPm == null) {
      return invalid;
    }
    if (input.hours !== null && (input.hours < 1 || input.hours > 12)) {
      return invalid;
    }
  }

  const datePart = `${pad(input.year, 4)}-${pad(input.month, 2)}-${pad(input.day, 2)}`;

  if (!input.withTime) {
    return { valid: true, value: datePart };
  }

  let hours = input.hours!;

  if (input.format === '12h') {
    hours = to24Hours(hours, input.amPm!);
  }

  const seconds = input.withSeconds ? input.seconds! : 0;
  const timePart = `${pad(hours, 2)}:${pad(input.minutes!, 2)}:${pad(seconds, 2)}`;

  return { valid: true, value: `${datePart} ${timePart}` };
}
