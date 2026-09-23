function isSignificant(char: string, decimalSeparator: string) {
  return /\d/.test(char) || char === decimalSeparator;
}

export function getCaretPositionAfterPaste(
  rawValue: string,
  rawCaret: number,
  formattedValue: string,
  decimalSeparator: string
) {
  let remaining = 0;
  for (let i = 0; i < rawCaret && i < rawValue.length; i += 1) {
    if (isSignificant(rawValue[i], decimalSeparator)) {
      remaining += 1;
    }
  }

  if (remaining === 0) {
    return Math.min(rawCaret, formattedValue.length);
  }

  for (let i = 0; i < formattedValue.length; i += 1) {
    if (isSignificant(formattedValue[i], decimalSeparator)) {
      remaining -= 1;
      if (remaining === 0) {
        return i + 1;
      }
    }
  }

  return formattedValue.length;
}
