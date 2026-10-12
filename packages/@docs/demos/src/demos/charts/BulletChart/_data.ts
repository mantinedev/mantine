export const ranges = [
  { value: 100000, color: 'red.8', label: 'Poor' },
  { value: 200000, color: 'yellow.7', label: 'Average' },
  { value: 300000, color: 'teal.8', label: 'Good' },
];

export const rangesCode = `export const ranges = ${JSON.stringify(ranges, null, 2)};`;
