import dayjs from 'dayjs';

export function isInRange(date: Date, range: [Date, Date]) {
  const _range = [...range].sort((a, b) => a.getTime() - b.getTime());
  return (
    dayjs(_range[0]).startOf('day').subtract(1, 'ms').isBefore(date) &&
    dayjs(_range[1]).endOf('day').add(1, 'ms').isAfter(date)
  );
}
