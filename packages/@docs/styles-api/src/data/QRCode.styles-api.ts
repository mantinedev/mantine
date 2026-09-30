import type { QRCodeFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const QRCodeStylesApi: StylesApiData<QRCodeFactory> = {
  selectors: {
    root: 'Root element',
    svg: 'Inner `svg` element that renders the QR code modules',
    logo: 'Centered overlay element that wraps the `logo` prop content',
  },

  vars: {
    root: {
      '--qr-size': 'Controls `width` and `height` of the root element',
      '--qr-color': 'Controls the color of the dark modules',
    },
  },
};
