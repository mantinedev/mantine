import dayjs from 'dayjs';
import { AnyDateValue } from '../../types';

interface GetCurrentTimePositionInput {
  startTime?: string;
  endTime?: string;
  now?: AnyDateValue;
}

export function getCurrentTimePosition(input?: GetCurrentTimePositionInput) {
  const now = dayjs(input?.now);

  if (!input?.startTime || !input?.endTime) {
    const startOf = now.startOf('date');
    const diffInMinutes = now.diff(startOf, 'minute');
    return (diffInMinutes / 1440) * 100;
  }

  const [startHour, startMinute] = input.startTime.split(':').map(Number);
  const [endHour, endMinute] = input.endTime.split(':').map(Number);

  const startOfDay = now.startOf('date');
  const startDateTime = startOfDay.hour(startHour).minute(startMinute).second(0);
  const endDateTime = startOfDay.hour(endHour).minute(endMinute).second(0);

  const totalMinutes = endDateTime.diff(startDateTime, 'minute');
  const currentMinutes = now.diff(startDateTime, 'minute');

  return (currentMinutes / totalMinutes) * 100;
}
