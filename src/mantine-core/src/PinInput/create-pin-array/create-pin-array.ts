export const createPinArray = (length: number, value: string) => {
  const arr = new Array(length).fill('');

  value &&
    value
      .trim()
      .split('')
      .forEach((char, i) => {
        arr[i] = char;
      });

  return arr;
};
