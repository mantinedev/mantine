import dayjs from 'dayjs';
import { DateStringValue } from '../../../types';
import { PickerControlProps } from '../../PickerControl';
import { isYearDisabled } from '../is-year-disabled/is-year-disabled';

interface GetYearInTabOrderInput {
  years: DateStringValue[][];
  minDate: DateStringValue | Date | undefined;
  maxDate: DateStringValue | Date | undefined;
  getYearControlProps: ((year: DateStringValue) => Partial<PickerControlProps>) | undefined;
}

export function getYearInTabOrder({
  years,
  minDate,
  maxDate,
  getYearControlProps,
}: GetYearInTabOrderInput) {
  const enabledYears = years
    .flat()
    .filter(
      (year) =>
        !isYearDisabled({ year, minDate, maxDate }) && !getYearControlProps?.(year)?.disabled
    );

  const selectedYear = enabledYears.find((year) => getYearControlProps?.(year)?.selected);

  if (selectedYear) {
    return selectedYear;
  }

  const currentYear = enabledYears.find((year) => dayjs().isSame(year, 'year'));

  if (currentYear) {
    return currentYear;
  }

  return enabledYears[0];
}
