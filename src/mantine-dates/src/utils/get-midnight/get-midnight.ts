import dayjs from 'dayjs';

export function getMidnight() {
  return dayjs().startOf('day').toDate();
}
