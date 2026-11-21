export function getDigits(value: string): string {
  if (!value) {
    return '';
  }

  const hasPlus = value[0] === '+';
  const digits = value.replace(/\D/g, '');
  return hasPlus ? `+${digits}` : digits;
}
