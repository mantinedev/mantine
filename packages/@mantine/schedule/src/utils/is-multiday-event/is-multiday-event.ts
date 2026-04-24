import dayjs from 'dayjs';
import { ScheduleEventData } from '../../types';

export function isMultidayEvent(event: ScheduleEventData) {
  const startDate = dayjs(event.start).startOf('day');
  const rawEnd = dayjs(event.end);
  const endAtMidnight = rawEnd.hour() === 0 && rawEnd.minute() === 0 && rawEnd.second() === 0;
  const endDate = endAtMidnight ? rawEnd.startOf('day').subtract(1, 'day') : rawEnd.startOf('day');
  return endDate.isAfter(startDate);
}
