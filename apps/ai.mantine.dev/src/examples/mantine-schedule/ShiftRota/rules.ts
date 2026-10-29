import dayjs from 'dayjs';
import { getEmployee, Shift, Vacation } from './data';

export const MIN_REST_HOURS = 11;

export interface ShiftCandidate {
  id?: string;
  employeeId: string;
  start: string;
  end: string;
}

export function formatShiftRange(shift: { start: string; end: string }) {
  return `${dayjs(shift.start).format('HH:mm')}–${dayjs(shift.end).format('HH:mm')}`;
}

function describeShift(shift: Shift) {
  return `${dayjs(shift.start).format('ddd')} ${formatShiftRange(shift)}`;
}

function formatHours(minutes: number) {
  return `${Math.round((minutes / 60) * 10) / 10} h`;
}

/** Returns the reason the shift cannot be placed, or null when it follows every rule */
export function getShiftViolation(
  candidate: ShiftCandidate,
  shifts: Shift[],
  vacations: Vacation[]
): string | null {
  const name = getEmployee(candidate.employeeId)?.name ?? 'This employee';
  const start = dayjs(candidate.start);
  const end = dayjs(candidate.end);

  if (!end.isAfter(start)) {
    return 'A shift must end after it starts';
  }

  const vacation = vacations.find((item) => {
    if (item.employeeId !== candidate.employeeId) {
      return false;
    }
    const dayStart = dayjs(item.date).startOf('day');
    return start.isBefore(dayStart.add(1, 'day')) && end.isAfter(dayStart);
  });

  if (vacation) {
    return `${name} is on vacation on ${dayjs(vacation.date).format('ddd, MMM D')}`;
  }

  for (const shift of shifts) {
    if (shift.employeeId !== candidate.employeeId || shift.id === candidate.id) {
      continue;
    }

    const shiftStart = dayjs(shift.start);
    const shiftEnd = dayjs(shift.end);

    if (start.isBefore(shiftEnd) && end.isAfter(shiftStart)) {
      return `${name} already works ${describeShift(shift)}`;
    }

    const restAfter = start.diff(shiftEnd, 'minute');
    if (!start.isBefore(shiftEnd) && restAfter < MIN_REST_HOURS * 60) {
      return `${name} needs ${MIN_REST_HOURS} h of rest after ${describeShift(shift)}, only ${formatHours(restAfter)}`;
    }

    const restBefore = shiftStart.diff(end, 'minute');
    if (!shiftStart.isBefore(end) && restBefore < MIN_REST_HOURS * 60) {
      return `${name} needs ${MIN_REST_HOURS} h of rest before ${describeShift(shift)}, only ${formatHours(restBefore)}`;
    }
  }

  return null;
}

/** Hours of the employee's shifts that fall inside the week starting at `weekStart` */
export function getPlannedHours(employeeId: string, shifts: Shift[], weekStart: dayjs.Dayjs) {
  const weekEnd = weekStart.add(1, 'week');

  const minutes = shifts.reduce((total, shift) => {
    if (shift.employeeId !== employeeId) {
      return total;
    }
    const start = dayjs(shift.start).isBefore(weekStart) ? weekStart : dayjs(shift.start);
    const end = dayjs(shift.end).isAfter(weekEnd) ? weekEnd : dayjs(shift.end);
    return end.isAfter(start) ? total + end.diff(start, 'minute') : total;
  }, 0);

  return Math.round((minutes / 60) * 10) / 10;
}

export function isShiftInWeek(shift: Shift, weekStart: dayjs.Dayjs) {
  return (
    dayjs(shift.start).isBefore(weekStart.add(1, 'week')) && dayjs(shift.end).isAfter(weekStart)
  );
}
