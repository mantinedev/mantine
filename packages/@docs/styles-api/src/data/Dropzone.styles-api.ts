import type { DropzoneFactory, DropzoneFullScreenFactory } from '@mantine/dropzone';
import type { StylesApiData } from '../types';

export const DropzoneStylesApi: StylesApiData<DropzoneFactory> = {
  selectors: {
    root: 'Dropzone root element',
    inner: 'Dropzone inner element (wraps children)',
  },

  vars: {
    root: {
      '--dropzone-accept-bg': 'Controls `background-color` when file is accepted',
      '--dropzone-reject-bg': 'Controls `background-color` when file is rejected',
      '--dropzone-accept-color': 'Controls `color` when file is accepted',
      '--dropzone-reject-color': 'Controls `color` when file is rejected',
      '--dropzone-radius': 'Controls `border-radius`',
    },
  },

  modifiers: [
    {
      modifier: 'data-accept',
      selector: 'root',
      condition: 'Files that are dragged over the dropzone are accepted',
    },
    {
      modifier: 'data-reject',
      selector: 'root',
      condition: 'Files that are dragged over the dropzone are rejected',
    },
    { modifier: 'data-idle', selector: 'root', condition: 'Dropzone is idle' },
    { modifier: 'data-loading', selector: 'root', condition: '`loading` prop is set' },
    { modifier: 'data-disabled', selector: 'root', condition: '`disabled` prop is set' },
    {
      modifier: 'data-activate-on-click',
      selector: 'root',
      condition: '`activateOnClick` prop is `true`',
    },
  ],
};

export const DropzoneFullScreenStylesApi: StylesApiData<DropzoneFullScreenFactory> = {
  selectors: {
    fullScreen: 'Dropzone.Fullscreen root element',
    ...DropzoneStylesApi.selectors,
  },

  vars: {},
};
