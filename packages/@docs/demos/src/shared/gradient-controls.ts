import { ConfiguratorControlOptions } from '@mantine/ds';

export const gradientControls: ConfiguratorControlOptions[] = [
  { type: 'color', prop: 'gradientFrom', initialValue: 'blue', libraryValue: '__none__' },
  { type: 'color', prop: 'gradientTo', initialValue: 'cyan', libraryValue: '__none__' },
  {
    type: 'number',
    prop: 'gradientDegree',
    initialValue: 90,
    min: 0,
    max: 360,
    libraryValue: '__none__',
  },
];
