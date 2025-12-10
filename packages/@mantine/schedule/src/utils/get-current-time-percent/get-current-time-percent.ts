import dayjs from 'dayjs';

interface GetCurrentTimePercentInput {
  startTime?: string;
  endTime?: string;
}

export function getCurrentTimePercent(input?: GetCurrentTimePercentInput) {
  const now = dayjs();

  if (!input?.startTime || !input?.endTime) {
    const startOf = dayjs().startOf('date');
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
