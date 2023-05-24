import { getColorValue } from './get-color-value';
import { getSizeValue, identity } from './get-default-value';
import { getFontSizeValue } from './get-font-size-value';
import { getSpacingValue } from './get-spacing-value';

export const valueGetters = {
  identity,
  color: getColorValue,
  size: getSizeValue,
  fontSize: getFontSizeValue,
  spacing: getSpacingValue,
};

export type SystemValueType = keyof typeof valueGetters;
