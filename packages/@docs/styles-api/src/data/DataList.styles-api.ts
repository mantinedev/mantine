import type { DataListFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const DataListStylesApi: StylesApiData<DataListFactory> = {
  selectors: {
    root: 'Root `dl` element',
    item: 'DataList.Item root element',
    itemLabel: 'DataList.ItemLabel `dt` element',
    itemValue: 'DataList.ItemValue `dd` element',
  },

  vars: {
    root: {
      '--data-list-fz': 'Controls `font-size`',
      '--data-list-lh': 'Controls `line-height`',
      '--data-list-gap': 'Controls gap between items',
      '--data-list-label-width': 'Controls `min-width` of `DataList.ItemLabel`',
    },
  },

  modifiers: [
    {
      modifier: 'data-orientation',
      selector: 'root',
      value: 'Value of `orientation` prop',
    },
    {
      modifier: 'data-with-divider',
      selector: 'root',
      condition: '`withDivider` prop is set',
    },
  ],
};
