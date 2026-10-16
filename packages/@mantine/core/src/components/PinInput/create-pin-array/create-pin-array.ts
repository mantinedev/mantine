export function createPinArray(length: number, value: string): string[] {
  if (length < 1) {
    return [];
  }

  const values = new Array<string>(length).fill('');

  if (value) {
    const splitted = value.split('');
    for (let i = 0; i < Math.min(length, splitted.length); i += 1) {
      values[i] = splitted[i] === ' ' ? '' : splitted[i];
    }
  }

  return values;
}

export function getPinValue(values: string[]): string {
  return values
    .map((char) => char || ' ')
    .join('')
    .trimEnd();
}
