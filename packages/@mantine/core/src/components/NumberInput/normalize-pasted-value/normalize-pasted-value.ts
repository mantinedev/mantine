export interface NormalizePastedValueOptions {
  decimalSeparator: string;
  thousandSeparator?: string;
  allowedDecimalSeparators: string[];
  thousandsGroupStyle?: 'thousand' | 'lakh' | 'wan' | 'none';
}

function countTrailingDigits(value: string, from: number) {
  let count = 0;
  while (from + count < value.length && /\d/.test(value[from + count])) {
    count += 1;
  }
  return count;
}

export function normalizePastedValue(
  value: string,
  {
    decimalSeparator,
    thousandSeparator,
    allowedDecimalSeparators,
    thousandsGroupStyle,
  }: NormalizePastedValueOptions
) {
  const candidates = new Set(
    [...allowedDecimalSeparators, decimalSeparator].filter((s) => s.length === 1)
  );
  const chars = value.split('');
  const occurrences = chars.reduce<number[]>((acc, char, index) => {
    if (candidates.has(char)) {
      acc.push(index);
    }
    return acc;
  }, []);

  if (occurrences.length === 0) {
    return value;
  }

  const lastIndex = occurrences[occurrences.length - 1];
  const lastChar = chars[lastIndex];
  const lastCharCount = occurrences.filter((index) => chars[index] === lastChar).length;
  const lastGroupSize = thousandsGroupStyle === 'wan' ? 4 : 3;

  let decimalIndex = -1;
  if (lastCharCount === 1) {
    if (lastChar === decimalSeparator) {
      decimalIndex = lastIndex;
    } else if (lastChar === thousandSeparator) {
      decimalIndex = countTrailingDigits(value, lastIndex + 1) === lastGroupSize ? -1 : lastIndex;
    } else {
      decimalIndex = lastIndex;
    }
  }

  return chars
    .map((char, index) => {
      if (index === decimalIndex) {
        return decimalSeparator;
      }

      if (candidates.has(char) && char !== thousandSeparator) {
        return '';
      }

      return char;
    })
    .join('');
}
