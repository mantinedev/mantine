import dayjs from 'dayjs';
import { ScheduleEventData } from '@mantine/schedule';
import { DATE_TIME_FORMAT, findTemplate, Shift, SHIFT_TEMPLATES, Vacation } from './data';

export interface ShiftEventPayload {
  shiftId: string;
  /** Start and end of the whole shift, a segment shows the full range */
  shiftStart: string;
  shiftEnd: string;
  /** The segment holds the start or the end of the shift */
  isFirst: boolean;
  isLast: boolean;
}

export type RotaEvent = ScheduleEventData<ShiftEventPayload>;

export function getShiftColor(start: string) {
  const hour = dayjs(start).hour();
  if (hour >= 4 && hour < 12) {
    return SHIFT_TEMPLATES[0].color;
  }
  return hour >= 12 && hour < 20 ? SHIFT_TEMPLATES[1].color : SHIFT_TEMPLATES[2].color;
}

export function getShiftTitle(start: string, end: string) {
  return findTemplate(start, end)?.label ?? 'Shift';
}

/**
 * Week view shows a shift that crosses midnight as one segment per day: the resources week view
 * pins events spanning several days to the top of the row, where they cannot be moved or resized.
 */
export function toShiftEvents(shift: Shift, splitAtMidnight: boolean): RotaEvent[] {
  const base = {
    title: shift.title,
    color: getShiftColor(shift.start),
    resourceId: shift.employeeId,
  };
  const payload = { shiftId: shift.id, shiftStart: shift.start, shiftEnd: shift.end };
  const end = dayjs(shift.end);
  const segments: { start: dayjs.Dayjs; end: dayjs.Dayjs }[] = [];

  if (splitAtMidnight) {
    let cursor = dayjs(shift.start);
    while (cursor.isBefore(end)) {
      const nextMidnight = cursor.startOf('day').add(1, 'day');
      const segmentEnd = nextMidnight.isBefore(end) ? nextMidnight : end;
      segments.push({ start: cursor, end: segmentEnd });
      cursor = segmentEnd;
    }
  } else {
    segments.push({ start: dayjs(shift.start), end });
  }

  return segments.map((segment, index) => ({
    ...base,
    id: segments.length === 1 ? shift.id : `${shift.id}::${index}`,
    start: segment.start.format(DATE_TIME_FORMAT),
    end: segment.end.format(DATE_TIME_FORMAT),
    payload: { ...payload, isFirst: index === 0, isLast: index === segments.length - 1 },
  }));
}

export function toVacationEvent(vacation: Vacation): ScheduleEventData {
  return {
    id: vacation.id,
    title: 'Vacation',
    start: dayjs(vacation.date).format(DATE_TIME_FORMAT),
    end: dayjs(vacation.date).add(1, 'day').format(DATE_TIME_FORMAT),
    color: 'gray',
    display: 'background',
    resourceId: vacation.employeeId,
  };
}

export function isShiftEvent(event: ScheduleEventData): event is RotaEvent {
  return (
    event.display !== 'background' && !!(event.payload as ShiftEventPayload | undefined)?.shiftId
  );
}

/** Range of the whole shift after one of its events was moved to `start` */
export function getMovedShiftRange(event: RotaEvent, start: string) {
  const payload = event.payload!;
  const delta = dayjs(start).diff(dayjs(event.start), 'minute');
  return {
    start: dayjs(payload.shiftStart).add(delta, 'minute').format(DATE_TIME_FORMAT),
    end: dayjs(payload.shiftEnd).add(delta, 'minute').format(DATE_TIME_FORMAT),
  };
}

/**
 * Range of the whole shift after one of its events was resized, or null when the dragged edge
 * is a midnight split of a night shift rather than the shift's own start or end
 */
export function getResizedShiftRange(event: RotaEvent, start: string, end: string) {
  const payload = event.payload!;
  const startChanged = !dayjs(start).isSame(dayjs(event.start));
  const endChanged = !dayjs(end).isSame(dayjs(event.end));

  if ((startChanged && !payload.isFirst) || (endChanged && !payload.isLast)) {
    return null;
  }

  return {
    start: startChanged ? dayjs(start).format(DATE_TIME_FORMAT) : payload.shiftStart,
    end: endChanged ? dayjs(end).format(DATE_TIME_FORMAT) : payload.shiftEnd,
  };
}
