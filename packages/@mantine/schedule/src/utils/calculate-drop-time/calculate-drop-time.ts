import dayjs from 'dayjs';
import { AnyDateValue, ScheduleEventData } from '../../types';
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
}: CalculateDropTimeInput): CalculateDropTimeResult {
  const eventDuration = dayjs(draggedEvent.end).diff(dayjs(draggedEvent.start), 'millisecond');

  const parsedTime = parseTimeString(targetSlotTime);
  const targetDay = dayjs(targetDate).startOf('day');

  const baseTargetTime = targetDay.hour(parsedTime.hours).minute(parsedTime.minutes).second(0);

  let finalTargetTime = baseTargetTime;

  if (mouseYOffset > 0 && slotHeight > 0) {
    const offsetRatio = mouseYOffset / slotHeight;
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
