import { getColorValue } from './get-color-value';
import { getDefaultValue } from './get-default-value';
import { getFontSizeValue } from './get-font-size-value';
import { getSpacingValue } from './get-spacing-value';

export const valueGetters = {
  color: getColorValue,
  default: getDefaultValue,
  fontSize: getFontSizeValue,
  spacing: getSpacingValue,
};

export type SystemValueType = keyof typeof valueGetters;
