import type { ToolbarFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const ToolbarStylesApi: StylesApiData<ToolbarFactory> = {
  selectors: {
    root: 'Root element',
    group: '`Toolbar.Group` and `Toolbar.ToggleGroup` root element',
    toggle: '`Toolbar.Toggle` and `Toolbar.ToggleItem` root element',
    divider: '`Toolbar.Divider` root element',
  },

  vars: {
    root: {
      '--toolbar-toggle-size': 'Controls toggle `height` and `min-width`',
      '--toolbar-padding': 'Controls toolbar `padding`',
      '--toolbar-gap': 'Controls `gap` between toolbar items',
      '--toolbar-radius': 'Controls `border-radius` of toolbar and its children',
    },

    toggle: {
      '--toolbar-toggle-active-bg':
        'Controls active state `background-color` of `Toolbar.Toggle` and `Toolbar.ToggleItem`',
      '--toolbar-toggle-active-hover':
        'Controls active state hover `background-color` of `Toolbar.Toggle` and `Toolbar.ToggleItem`',
      '--toolbar-toggle-active-color':
        'Controls active state text `color` of `Toolbar.Toggle` and `Toolbar.ToggleItem`',
    },
  },

  modifiers: [
    {
      modifier: 'data-orientation',
      selector: ['root', 'group', 'divider'],
      value: 'Value of `orientation` prop',
    },
    {
      modifier: 'data-with-border',
      selector: 'root',
      condition: '`withBorder` prop is set',
    },
    {
      modifier: 'data-active',
      selector: 'toggle',
      condition: 'Toggle is in active state',
    },
    {
      modifier: 'data-disabled',
      selector: 'toggle',
      condition: '`disabled` prop is set on toggle',
    },
    {
      modifier: 'data-auto-width',
      selector: 'toggle',
      condition: '`autoWidth` prop is set on toggle',
    },
  ],
};
