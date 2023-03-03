import dayjs from 'dayjs';

interface GetDefaultClampedDate {
  minDate: Date;
  maxDate: Date;
}

export function getDefaultClampedDate({ minDate, maxDate }: GetDefaultClampedDate) {
  const today = new Date();

  if (!minDate && !maxDate) {
    return today;
  }

  if (dayjs(today).isBefore(minDate)) {
    return minDate;
  }

  if (dayjs(today).isAfter(maxDate)) {
    return maxDate;
  }

  return today;
}
