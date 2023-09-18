import type { TabsFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const TabsStylesApi: StylesApiData<TabsFactory> = {
  selectors: {
    root: 'Root element (`Tabs` component)',
    list: 'List of tabs (`Tabs.List` component)',
    panel: 'Panel with tab content (`Tabs.Panel` component)',
    tab: 'Tab button (`Tabs.Tab` component)',
    tabLabel: 'Label of `Tabs.Tab`',
    tabSection: 'Left and right sections of `Tabs.Tab`',
  },

  vars: {
    root: {
      '--tabs-color':
        'Controls colors of `Tabs.Tab`, only applicable when variant is `pills` or `default`',
      '--tabs-radius': 'Controls `Tabs.Tab` `border-radius`',
    },
  },

  modifiers: [
    {
      modifier: 'data-orientation',
      selector: ['root', 'tab', 'list', 'panel'],
      value: 'Value of `orientation` prop',
    },
    {
      modifier: 'data-placement',
      selector: ['root', 'tab', 'list'],
      value: 'Value of placement prop',
      condition: 'Value of `orientation` prop is "vertical" on `Tabs` component',
    },
    {
      modifier: 'data-inverted',
      selector: ['tab', 'list'],
      condition: '`inverted` prop is set on `Tabs` component',
    },
    {
      modifier: 'data-grow',
      selector: ['list'],
      condition: '`grow` prop is set on `Tabs.List` component',
    },
    {
      modifier: 'data-position',
      selector: ['tabSection'],
      value: 'Position of the section, left or right',
    },
  ],
};
