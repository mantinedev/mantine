import { getDigitParts, type DigitParts } from './get-digit-parts';

export interface DigitSlot {
  type: 'digit';
  key: string;
  digit: string;
  previousDigit: string | null;
  empty: boolean;
}

export interface CharSlot {
  type: 'char';
  key: string;
  char: string;
  empty: boolean;
}

export type RenderSlot = DigitSlot | CharSlot;

export interface GetRenderSlotsInput {
  current: DigitParts;
  previous: DigitParts;
  prefix?: string;
  suffix?: string;
  decimalSeparator?: string;
  thousandSeparator?: string | boolean;
}

function padLeft(arr: string[], length: number): (string | null)[] {
  return [...Array(length - arr.length).fill(null), ...arr];
}

function padRight(arr: string[], length: number): (string | null)[] {
  return [...arr, ...Array(length - arr.length).fill(null)];
}

export function getRenderSlots({
  current,
  previous,
  prefix,
  suffix,
  decimalSeparator = '.',
  thousandSeparator,
}: GetRenderSlotsInput): RenderSlot[] {
  const maxIntLen = Math.max(current.intDigits.length, previous.intDigits.length);
  const maxFracLen = Math.max(current.fracDigits.length, previous.fracDigits.length);

  const currIntPadded = padLeft(current.intDigits, maxIntLen);
  const prevIntPadded = padLeft(previous.intDigits, maxIntLen);
  const currFracPadded = padRight(current.fracDigits, maxFracLen);
  const prevFracPadded = padRight(previous.fracDigits, maxFracLen);

  const sep = thousandSeparator
    ? typeof thousandSeparator === 'string'
      ? thousandSeparator
      : ','
    : null;

  const slots: RenderSlot[] = [];

  if (prefix) {
    for (let i = 0; i < prefix.length; i++) {
      slots.push({ type: 'char', key: `prefix-${i}`, char: prefix[i], empty: false });
    }
  }

  if (current.negative || previous.negative) {
    slots.push({ type: 'char', key: 'sign', char: '-', empty: !current.negative });
  }

  for (let i = 0; i < maxIntLen; i++) {
    const posFromRight = maxIntLen - 1 - i;
    const currDigit = currIntPadded[i];
    const prevDigit = prevIntPadded[i];
    const isEmpty = currDigit === null;

    slots.push({
      type: 'digit',
      key: `int-${posFromRight}`,
      digit: currDigit ?? '0',
      previousDigit: prevDigit,
      empty: isEmpty,
    });

    if (sep && posFromRight > 0 && posFromRight % 3 === 0) {
      slots.push({ type: 'char', key: `sep-${posFromRight}`, char: sep, empty: isEmpty });
    }
  }

  if (current.hasDecimal || previous.hasDecimal) {
    slots.push({
      type: 'char',
      key: 'dec',
      char: decimalSeparator,
      empty: !current.hasDecimal,
    });
  }

  for (let i = 0; i < maxFracLen; i++) {
    const currDigit = currFracPadded[i];
    const prevDigit = prevFracPadded[i];
    const isEmpty = currDigit === null;

    slots.push({
      type: 'digit',
      key: `frac-${i}`,
      digit: currDigit ?? '0',
      previousDigit: prevDigit,
      empty: isEmpty,
    });
  }

  if (suffix) {
    for (let i = 0; i < suffix.length; i++) {
      slots.push({ type: 'char', key: `suffix-${i}`, char: suffix[i], empty: false });
    }
  }

  return slots;
}

export interface GetRenderSlotsFromValuesInput {
  value: number;
  previousValue: number;
  prefix?: string;
  suffix?: string;
  decimalSeparator?: string;
  thousandSeparator?: string | boolean;
  decimalScale?: number;
  fixedDecimalScale?: boolean;
}

export function getRenderSlotsFromValues({
  value,
  previousValue,
  prefix,
  suffix,
  decimalSeparator,
  thousandSeparator,
  decimalScale,
  fixedDecimalScale,
}: GetRenderSlotsFromValuesInput): RenderSlot[] {
  const current = getDigitParts({ value, decimalScale, fixedDecimalScale });
  const prev = getDigitParts({ value: previousValue, decimalScale, fixedDecimalScale });

  return getRenderSlots({
    current,
    previous: prev,
    prefix,
    suffix,
    decimalSeparator,
    thousandSeparator,
  });
}
