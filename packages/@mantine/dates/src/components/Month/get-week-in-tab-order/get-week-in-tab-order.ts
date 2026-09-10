import dayjs from 'dayjs';
import { DateStringValue } from '../../../types';

interface GetWeekInTabOrderInput {
  dates: DateStringValue[][];
  isDayDisabled: (date: DateStringValue) => boolean;
  getWeekControlProps: ((weekStart: DateStringValue) => { selected?: boolean }) | undefined;
}

export function getWeekInTabOrder({
  dates,
  isDayDisabled,
  getWeekControlProps,
}: GetWeekInTabOrderInput): number {
  const enabledWeeks = dates
    .map((row, index) => ({ row, index }))
    .filter(({ row }) => !row.every(isDayDisabled));

  const selectedWeek = enabledWeeks.find(({ row }) => getWeekControlProps?.(row[0])?.selected);

  if (selectedWeek) {
    return selectedWeek.index;
  }

  const currentWeek = enabledWeeks.find(({ row }) =>
    row.some((date) => dayjs(date).isSame(dayjs(), 'day'))
  );

  if (currentWeek) {
    return currentWeek.index;
  }

  return enabledWeeks[0]?.index ?? -1;
}
