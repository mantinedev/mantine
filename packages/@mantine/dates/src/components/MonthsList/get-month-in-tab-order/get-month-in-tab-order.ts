import dayjs from 'dayjs';
import { PickerControlProps } from '../../PickerControl';
import { isMonthDisabled } from '../is-month-disabled/is-month-disabled';

export function getMonthInTabOrder(
  months: Date[][],
  minDate: Date | undefined,
  maxDate: Date | undefined,
  getMonthControlProps: ((month: Date) => Partial<PickerControlProps>) | undefined
) {
  const enabledMonths = months
    .flat()
    .filter(
      (month) =>
        !isMonthDisabled(month, minDate, maxDate) && !getMonthControlProps?.(month)?.disabled
    );

  const selectedMonth = enabledMonths.find((month) => getMonthControlProps?.(month)?.selected);

  if (selectedMonth) {
    return selectedMonth;
  }

  const currentMonth = enabledMonths.find((month) => dayjs().isSame(month, 'month'));

  if (currentMonth) {
    return currentMonth;
  }

  return enabledMonths[0];
}
