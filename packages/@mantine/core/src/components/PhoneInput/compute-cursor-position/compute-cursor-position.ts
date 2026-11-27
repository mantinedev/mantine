export function computeCursorPosition(
  inputValue: string,
  cursorPos: number,
  newRaw: string,
  newFormatted: string,
  isDeletion = false
): number {
  const newRawDigits = newRaw.replace(/\D/g, '');
  const inputDigits = inputValue.replace(/\D/g, '');
  const isFullReplace = inputDigits.length <= newRawDigits.length - inputDigits.length + 1;

  if (!isDeletion && (isFullReplace || cursorPos >= inputValue.length)) {
    return newFormatted.length;
  }

  const digitsBeforeCursor = inputValue.slice(0, cursorPos).replace(/\D/g, '').length;
  if (digitsBeforeCursor === 0) {
    return Math.min(cursorPos, Math.max(newFormatted.search(/\d/), 0));
  }
  let result = 0;
  let digitsSeen = 0;

  for (let i = 0; i < newFormatted.length; i++) {
    if (/\d/.test(newFormatted[i])) {
      digitsSeen++;
      if (digitsSeen === digitsBeforeCursor) {
        result = i + 1;
        break;
      }
    }
  }

  if (digitsSeen < digitsBeforeCursor) {
    return newFormatted.length;
  }

  return result;
}
