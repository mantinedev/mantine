import dayjs, { Dayjs } from 'dayjs';
import { DateStringValue, ScheduleEventData } from '../../../types';

interface CalculateEventDaysInput {
  event: ScheduleEventData;
  weekDays: DateStringValue[];
  actualEndDate: Dayjs;
}

export function calculateEventDays({ event, weekDays, actualEndDate }: CalculateEventDaysInput) {
  const eventStartDate = dayjs(event.start).startOf('day');

  return weekDays.filter((day) => {
    const dayDate = dayjs(day).startOf('day');
    return (
      (dayDate.isAfter(eventStartDate) || dayDate.isSame(eventStartDate)) &&
      (dayDate.isBefore(actualEndDate) || dayDate.isSame(actualEndDate))
    );
  });
}
