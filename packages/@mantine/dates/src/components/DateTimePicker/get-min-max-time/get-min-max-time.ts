import dayjs from 'dayjs';

interface GetMinTimeInput {
  minDate: Date | undefined;
  value: Date | null;
}

export function getMinTime({ minDate, value }: GetMinTimeInput): string | undefined {
  const minTime = minDate ? dayjs(minDate).format('HH:mm:ss') : null;
  return value && minDate && value.toDateString() === minDate.toDateString()
    ? minTime != null
      ? minTime
      : undefined
    : undefined;
}

interface GetMaxTimeInput {
  maxDate: Date | undefined;
  value: Date | null;
}

export function getMaxTime({ maxDate, value }: GetMaxTimeInput): string | undefined {
  const maxTime = maxDate ? dayjs(maxDate).format('HH:mm:ss') : null;
  return value && maxDate && value.toDateString() === maxDate.toDateString()
    ? maxTime != null
      ? maxTime
      : undefined
    : undefined;
}
