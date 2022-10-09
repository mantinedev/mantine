import { CascaderItem } from '@mantine/core';

export const CASCADER_DEFAULT_DATA: CascaderItem[] = [
  {
    value: 'I love',
    children: [{ value: 'react' }, { value: 'vue' }, { value: 'svelte' }],
  },
  {
    value: 'I hate',
    children: [{ value: 'react', disabled: true }, { value: 'solid' }, { value: 'angular' }],
  },
];
