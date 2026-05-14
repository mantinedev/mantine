import { getDigitParts } from './get-digit-parts';

export interface BuildValueInput {
  value: number;
  prefix?: string;
  suffix?: string;
  decimalSeparator?: string;
  thousandSeparator?: string | boolean;
  decimalScale?: number;
  fixedDecimalScale?: boolean;
}

export function buildValue({
  value,
  prefix,
  suffix,
  decimalSeparator = '.',
  thousandSeparator,
  decimalScale,
  fixedDecimalScale,
}: BuildValueInput): string {
  const parts = getDigitParts({ value, decimalScale, fixedDecimalScale });
  let intStr = parts.intDigits.join('');

  if (thousandSeparator) {
    const sep = typeof thousandSeparator === 'string' ? thousandSeparator : ',';
    intStr = intStr.replace(/\B(?=(\d{3})+(?!\d))/g, sep);
  }

  let result = parts.negative ? `-${intStr}` : intStr;
  if (parts.fracDigits.length > 0) {
    result += `${decimalSeparator}${parts.fracDigits.join('')}`;
  }

  return `${prefix || ''}${result}${suffix || ''}`;
}
