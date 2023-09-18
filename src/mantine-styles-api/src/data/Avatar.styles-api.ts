import type { AvatarFactory, AvatarGroupFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const AvatarStylesApi: StylesApiData<AvatarFactory> = {
  selectors: {
    root: 'Root element',
    image: '`img` element',
    placeholder: 'Avatar placeholder, displayed when the image cannot be loaded',
  },

  vars: {
    root: {
      '--avatar-bd': 'Controls placeholder `border`',
      '--avatar-bg': 'Controls placeholder `background`',
      '--avatar-color': 'Controls placeholder text `color`',
      '--avatar-size': 'Controls `width`, `min-width` and `height`',
      '--avatar-radius': 'Controls `border-radius`',
    },
  },
};

export const AvatarGroupStylesApi: StylesApiData<AvatarGroupFactory> = {
  selectors: {
    group: 'Root element',
  },

  vars: {
    group: {
      '--ag-spacing': 'Controls negative spacing between avatars',
    },
  },
};
