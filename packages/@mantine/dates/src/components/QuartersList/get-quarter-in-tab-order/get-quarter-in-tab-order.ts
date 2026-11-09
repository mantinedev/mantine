import { DateStringValue } from '../../../types';
import { getQuarterStart } from '../../../utils';
import { PickerControlProps } from '../../PickerControl';
import { isQuarterDisabled } from '../is-quarter-disabled/is-quarter-disabled';

interface GetQuarterInTabOrderInput {
  quarters: DateStringValue[][];
  minDate: DateStringValue | undefined;
  maxDate: DateStringValue | undefined;
  getQuarterControlProps: ((quarter: DateStringValue) => Partial<PickerControlProps>) | undefined;
}

export function getQuarterInTabOrder({
  quarters,
  minDate,
  maxDate,
  getQuarterControlProps,
}: GetQuarterInTabOrderInput) {
  const enabledQuarters = quarters
    .flat()
    .filter(
      (quarter) =>
        !isQuarterDisabled({ quarter, minDate, maxDate }) &&
        !getQuarterControlProps?.(quarter)?.disabled
    );

  const selectedQuarter = enabledQuarters.find(
    (quarter) => getQuarterControlProps?.(quarter)?.selected
  );

  if (selectedQuarter) {
    return selectedQuarter;
  }

  const currentQuarterStart = getQuarterStart(new Date());
  const currentQuarter = enabledQuarters.find((quarter) => quarter === currentQuarterStart);

  if (currentQuarter) {
    return currentQuarter;
  }

  return enabledQuarters[0];
}
