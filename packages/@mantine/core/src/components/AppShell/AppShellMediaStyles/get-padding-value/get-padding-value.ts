import { getSpacing } from '../../../../core';

export function getPaddingValue(padding: string | number | undefined) {
  return Number(padding) === 0 ? '0px' : getSpacing(padding);
}
