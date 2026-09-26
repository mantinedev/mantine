import type { WaffleChartCell } from '@mantine/charts';

export const data: WaffleChartCell[] = [
  { name: 'Chrome', value: 65, color: 'blue' },
  { name: 'Safari', value: 19, color: 'teal' },
  { name: 'Firefox', value: 10, color: 'orange' },
  { name: 'Other', value: 6, color: 'gray' },
];

export const dataCode = `
import { WaffleChartCell } from '@mantine/charts';

export const data: WaffleChartCell[] = [
  { name: 'Chrome', value: 65, color: 'blue' },
  { name: 'Safari', value: 19, color: 'teal' },
  { name: 'Firefox', value: 10, color: 'orange' },
  { name: 'Other', value: 6, color: 'gray' },
];
`;
