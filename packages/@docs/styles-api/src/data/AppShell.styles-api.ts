import type { AppShellFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const AppShellStylesApi: StylesApiData<AppShellFactory> = {
  selectors: {
    root: 'Root element (`AppShell` component)',
    navbar: '`AppShell.Navbar` root element',
    header: '`AppShell.Header` root element',
    main: '`AppShell.Main` root element',
    aside: '`AppShell.Aside` root element',
    footer: '`AppShell.Footer` root element',
    section: '`AppShell.Section` root element',
    resizeHandle: 'Resize handle rendered in resizable sections',
  },

  vars: {
    root: {
      '--app-shell-transition-duration': 'Controls transition duration of all children',
      '--app-shell-transition-timing-function':
        'Controls transition timing function of all children',
      '--app-shell-resize-handle-size': 'Controls width/height of the resize handle hit area',
    },
  },

  modifiers: [
    {
      modifier: 'data-resizing',
      selector: 'root',
      condition: 'User is resizing the window or a section is being resized',
    },
    { modifier: 'data-layout', selector: 'root', value: 'Value of the `layout` prop' },
    { modifier: 'data-disabled', selector: 'root', condition: '`disabled` prop is set' },
    {
      modifier: 'data-with-border',
      selector: ['navbar', 'header', 'aside', 'footer'],
      condition: '`withBorder` prop is set either on the `AppShell` or on the associated component',
    },
    {
      modifier: 'data-grow',
      selector: 'section',
      condition: '`grow` prop is set on the `AppShell.Section`',
    },
    {
      modifier: 'data-section',
      selector: 'resizeHandle',
      value: 'Section the handle resizes: `navbar`, `aside`, `header` or `footer`',
    },
    {
      modifier: 'data-orientation',
      selector: 'resizeHandle',
      value: 'Orientation of the handle: `vertical` or `horizontal`',
    },
    {
      modifier: 'data-active',
      selector: 'resizeHandle',
      condition: 'Section is being resized',
    },
  ],
};
