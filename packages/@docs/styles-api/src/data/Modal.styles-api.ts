import type { ModalFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const ModalStylesApi: StylesApiData<ModalFactory> = {
  selectors: {
    root: 'Root element',
    inner: 'Element used to center modal, has fixed position, takes entire screen',
    content: '`Modal.Content` root element',
    header: 'Contains title and close button',
    overlay: 'Overlay displayed under the `Modal.Content`',
    title: 'Modal title (h2 tag), displayed in the header',
    body: 'Modal body, displayed after header',
    close: 'Close button',
  },

  vars: {
    root: {
      '--modal-radius': 'Controls `border-radius` of `Modal.Content`',
      '--modal-size': 'Controls `width` of `Modal.Content`',
      '--modal-x-offset':
        'Controls left and right `padding` of the inner element used to position `Modal.Content`',
      '--modal-y-offset':
        'Controls top and bottom `padding` of the inner element used to position `Modal.Content`',
    },
  },

  modifiers: [
    { modifier: 'data-full-screen', selector: 'root', condition: '`fullScreen` prop is set' },
    { modifier: 'data-centered', selector: 'root', condition: '`centered` prop is set' },
  ],
};
