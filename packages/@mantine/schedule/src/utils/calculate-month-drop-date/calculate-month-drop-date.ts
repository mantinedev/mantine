import dayjs from 'dayjs';
import { DateStringValue, ScheduleEventData } from '../../types';

export interface CalculateMonthDropDateInput {
  /** The event being dragged */
  draggedEvent: ScheduleEventData;

  /** The target day where the event is being dropped */
  targetDay: DateStringValue;
}

export interface CalculateMonthDropDateResult {
  /** New start date for the event */
  start: Date;

  /** New end date for the event */
  end: Date;
}

export function calculateMonthDropDate({
  draggedEvent,
  targetDay,
}: CalculateMonthDropDateInput): CalculateMonthDropDateResult {
  const eventDuration = dayjs(draggedEvent.end).diff(
    dayjs(draggedEvent.start),
    'millisecond'
  );

  const originalStartTime = dayjs(draggedEvent.start);
  const targetDayStart = dayjs(targetDay).startOf('day');

  const newStart = targetDayStart
    .hour(originalStartTime.hour())
    .minute(originalStartTime.minute())
    .second(originalStartTime.second())
    .millisecond(originalStartTime.millisecond());

  const newEnd = newStart.add(eventDuration, 'millisecond');

  return {
    start: newStart.toDate(),
    end: newEnd.toDate(),
  };
}
