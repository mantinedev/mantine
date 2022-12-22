import dayjs from 'dayjs';

interface IsDisabled {
  date: Date;
  minDate?: Date;
  maxDate?: Date;
  excludeDate?(date: Date): boolean;
  disableOutsideEvents?: boolean;
  outside?: boolean;
}

export function isDisabled({
  minDate,
  maxDate,
  excludeDate,
  disableOutsideEvents,
  date,
  outside,
}: IsDisabled) {
  const isAfterMax = maxDate instanceof Date && dayjs(maxDate).isBefore(date, 'day');
  const isBeforeMin = minDate instanceof Date && dayjs(minDate).isAfter(date, 'day');
  const shouldExclude = typeof excludeDate === 'function' && excludeDate(date);
  const disabledOutside = !!disableOutsideEvents && !!outside;
  return isAfterMax || isBeforeMin || shouldExclude || disabledOutside;
}
