export interface DigitParts {
  negative: boolean;
  intDigits: string[];
  fracDigits: string[];
  hasDecimal: boolean;
}

export interface GetDigitPartsInput {
  value: number;
  decimalScale?: number;
  fixedDecimalScale?: boolean;
}

const PLAIN_FORMAT = new Intl.NumberFormat('en-US', {
  useGrouping: false,
  maximumFractionDigits: 20,
});

function toPlainString(num: number, decimalScale?: number): string {
  if (!Number.isFinite(num)) {
    return '0';
  }

  if (decimalScale !== undefined) {
    return new Intl.NumberFormat('en-US', {
      useGrouping: false,
      minimumFractionDigits: decimalScale,
      maximumFractionDigits: decimalScale,
    }).format(num);
  }

  const str = String(num);
  if (!str.includes('e') && !str.includes('E')) {
    return str;
  }

  return PLAIN_FORMAT.format(num);
}

export function getDigitParts({
  value,
  decimalScale,
  fixedDecimalScale,
}: GetDigitPartsInput): DigitParts {
  const abs = Math.abs(value);
  let str = toPlainString(abs, decimalScale);

  if (!fixedDecimalScale && decimalScale !== undefined) {
    const parts = str.split('.');
    if (parts[1]) {
      const trimmed = parts[1].replace(/0+$/, '');
      str = trimmed ? `${parts[0]}.${trimmed}` : parts[0];
    }
  }

  const dotIdx = str.indexOf('.');
  const intStr = dotIdx >= 0 ? str.slice(0, dotIdx) : str;
  const fracStr = dotIdx >= 0 ? str.slice(dotIdx + 1) : '';

  return {
    negative: value < 0,
    intDigits: intStr.split(''),
    fracDigits: fracStr ? fracStr.split('') : [],
    hasDecimal: dotIdx >= 0,
  };
}
