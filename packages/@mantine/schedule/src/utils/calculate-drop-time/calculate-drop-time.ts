import dayjs from 'dayjs';
import { AnyDateValue, ScheduleEventData } from '../../types';
import { clampIntervalMinutes } from '../clamp-interval-minutes/clamp-interval-minutes';
import { parseTimeString } from '../parse-time-string/parse-time-string';

export interface CalculateDropTimeInput {
  /** The event being dragged */
  draggedEvent: ScheduleEventData;

  /** Target date where event will be dropped */
  targetDate: AnyDateValue;

  /** Target time slot start time in HH:mm:ss format */
  targetSlotTime: string;

  /** Mouse Y position relative to the slot */
  mouseYOffset?: number;

  /** Height of one slot in pixels */
  slotHeight?: number;

  /** Minutes per slot */
  intervalMinutes?: number;

  /** Pointer offset along the time axis within the target slot, in px. Axis-agnostic alias for `mouseYOffset`; when both are set, `slotOffset` wins. */
  slotOffset?: number;

  /** Size of the target slot along the time axis, in px. Axis-agnostic alias for `slotHeight`; when both are set, `slotSize` wins. */
  slotSize?: number;

  /** Snap step for the resulting start time, in minutes. When set, the start snaps to this interval (absolute, from the day boundary) instead of the slot start. */
  dragIntervalMinutes?: number;

  /** Start time boundary of the schedule in HH:mm:ss format. When set together with `dragIntervalMinutes`, the snapped start is clamped to stay within the displayed range (the event may still extend past `endTime`, matching how overflowing events are clipped). */
  startTime?: string;

  /** End time boundary of the schedule in HH:mm:ss format. When set together with `dragIntervalMinutes`, the snapped start is clamped to stay within the displayed range (the event may still extend past `endTime`, matching how overflowing events are clipped). */
  endTime?: string;
}

export interface CalculateDropTimeResult {
  /** New start date/time for the event */
  start: Date;

  /** New end date/time for the event */
  end: Date;
}

export function calculateDropTime({
  draggedEvent,
  targetDate,
  targetSlotTime,
  mouseYOffset = 0,
  slotHeight = 64,
  intervalMinutes = 15,
  slotOffset,
  slotSize,
  dragIntervalMinutes,
  startTime,
  endTime,
}: CalculateDropTimeInput): CalculateDropTimeResult {
  const eventDuration = dayjs(draggedEvent.end).diff(dayjs(draggedEvent.start), 'millisecond');

  const parsedTime = parseTimeString(targetSlotTime);
  const targetDay = dayjs(targetDate).startOf('day');

  const baseTargetTime = targetDay.hour(parsedTime.hours).minute(parsedTime.minutes).second(0);

  let finalTargetTime = baseTargetTime;

  const offset = slotOffset ?? mouseYOffset;
  const size = slotSize ?? slotHeight;

  if (dragIntervalMinutes != null) {
    const clampedDrag = clampIntervalMinutes(dragIntervalMinutes);
    const gridInterval = clampIntervalMinutes(intervalMinutes);
    const slotStartMinutes = parsedTime.hours * 60 + parsedTime.minutes;
    const offsetRatio = size > 0 ? offset / size : 0;
    const rawStartMinutes = slotStartMinutes + offsetRatio * gridInterval;
    let snappedStartMinutes = Math.round(rawStartMinutes / clampedDrag) * clampedDrag;

    if (endTime) {
      const parsedEnd = parseTimeString(endTime);
      const endMinutes = parsedEnd.hours * 60 + parsedEnd.minutes;
      const maxStart = Math.floor((endMinutes - 1) / clampedDrag) * clampedDrag;
      snappedStartMinutes = Math.min(snappedStartMinutes, maxStart);
    }
    if (startTime) {
      const parsedStart = parseTimeString(startTime);
      const startMinutes = parsedStart.hours * 60 + parsedStart.minutes;
      const minStart = Math.ceil(startMinutes / clampedDrag) * clampedDrag;
      snappedStartMinutes = Math.max(snappedStartMinutes, minStart);
    }

    finalTargetTime = targetDay.add(snappedStartMinutes, 'minute');
  } else if (offset > 0 && size > 0) {
    const offsetRatio = offset / size;
    const offsetMinutes = Math.round(offsetRatio * intervalMinutes);
    finalTargetTime = baseTargetTime.add(offsetMinutes, 'minute');
  }

  const newStart = finalTargetTime.toDate();
  const newEnd = finalTargetTime.add(eventDuration, 'millisecond').toDate();

  return {
    start: newStart,
    end: newEnd,
  };
}
